import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";
import { z } from "zod";

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
    } = body;

    const { error } = await supabase.from("contact_messages").insert({
      first_name,
      last_name,
      service,
      email,
      currency,
      budget,
      project_description,
    });

    if (error) {
      return NextResponse.json({ error: error.message, message: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Quote requested successfully, we will get back to you as soon as possible' }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid JSON body", message: 'Something happened, please try again' }, { status: 400 });
  }
}
