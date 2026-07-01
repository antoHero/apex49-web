import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";
import { z } from "zod";
import { generateReference, generateUnsubscribeToken } from "@/lib/utils";
// import { quoteEmailHandler } from "@/utils/emails/handlers/request-quote";
import { verifyTurnstile } from "nextjs-turnstile";
import { enqueueEmail } from "@/lib/email/queue";
import { FormValues } from "@/components/contact-page";


const contactSchema = z.object({
  first_name: z.string().min(2, "Your first name is required"),
  last_name: z.string().min(2, "Your last name is required"),
  service: z.string().min(2, "Please select a service you are requesting for"),
  email: z.email("Please enter a valid email address"),
  currency: z.string("Please select a currency"),
  budget: z.string(),
  project_description: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const {
      first_name,
      last_name,
      service,
      email,
      currency,
      budget,
      project_description,
      turnstileToken,
    } = body as FormValues;

    // const isValid = await verifyTurnstile(turnstileToken);
  
    // if (!isValid) {
    //   return NextResponse.json(
    //     { error: "CAPTCHA verification failed" },
    //     { status: 400 }
    //   );
    // }

    const reference = generateReference();
    const unsubscribe_token = generateUnsubscribeToken();

    const { error, data: row } = await supabase
      .from("quote_requests")
      .insert({
        first_name,
        last_name,
        service,
        email,
        currency,
        budget,
        project_description,
        reference,
        unsubscribe_token,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message, message: error.message },
        { status: 500 },
      );
    }

    try {
      await enqueueEmail({
        type: "quote_confirmation",
        to: row.email,
        data: {
          last_name: row.last_name,
          reference: row.reference,
          service: row.service,
          createdAt: new Date(row.created_at || row.createdat).toISOString(),
          unsubscribe_token: row.unsubscribe_token,
          currency: row.currency,
          project_description: row.project_description,
          budget: row.budget,
        },
      });
    } catch (queueErr) {
      // Insert already succeeded — don't fail the request over a queue hiccup,
      // but this is now a real signal worth alerting on, not a silent console.error.
      console.error("Failed to enqueue confirmation email:", queueErr);
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Quote requested successfully, we will get back to you as soon as possible",
        data: row,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      {
        error: "Invalid JSON body",
        message: "Something happened, please try again",
      },
      { status: 400 },
    );
  }
}
