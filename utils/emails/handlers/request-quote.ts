import { EmailTransporter } from "@/utils/services/email-transporter";
import { EmailTemplate } from "../templates/quote";

export class RequestQuoteHandler {
  constructor(private transporter: EmailTransporter) {}

  async sendConfirmationEmail(
    email: string,
    last_name: string,
    reference: string,
    service: string,
    createdAt: string | Date, // Accept date string from database
    unsubscribeToken: string,
    currency: string,
    project_description?: string | null,
    budget?: string | null,
  ): Promise<void> {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://apex49.co";
    const unsubscribeUrl = `${baseUrl}/unsubscribe?token=${unsubscribeToken}&email=${encodeURIComponent(email)}`;

    const parsedDate = createdAt ? new Date(createdAt) : new Date();
    const formattedDate = isNaN(parsedDate.getTime())
      ? new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : parsedDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

    const content = `
        <h1 style="font-size: 24px; font-weight: 700; color: #0f172a; margin: 0 0 12px 0;">Quote received!</h1>
        <p style="font-size: 16px; color: #334155; margin: 0 0 24px 0;">Hi ${last_name},</p>
        <p style="font-size: 15px; line-height: 1.6; color: #475569; margin: 0 0 24px 0;">
          Thank you for reaching out. We've received your quote request and our team is already reviewing it. You'll hear back from us within <strong>24 business hours</strong>.
        </p>

        <!-- Dynamic Invoice-Style Quote Block -->
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #000000; border-radius: 8px; padding: 24px; margin: 24px 0;">
          <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #64748b; margin-bottom: 16px;">
            Quote Reference — #${reference}
          </div>
          
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #64748b;">Date submitted:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; font-size: 14px; font-weight: 600; color: #0f172a;" align="right">${formattedDate}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #64748b;">Service requested:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; font-size: 14px; font-weight: 600; color: #0f172a;" align="right">${service}</td>
            </tr>
            ${
              project_description
                ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #64748b; padding-right: 10px;">Description:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #edf2f7; font-size: 14px; color: #334155;" align="right">
                ${project_description.length > 50 ? project_description.slice(0, 50) + "..." : project_description}
              </td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 10px 0; border-bottom: ${currency} ${budget ? "1px solid #edf2f7" : "none"}; font-size: 14px; color: #64748b;">Status:</td>
              <td style="padding: 10px 0; border-bottom: ${currency} ${budget ? "1px solid #edf2f7" : "none"};" align="right">
                <span style="font-size: 12px; font-weight: 600; padding: 4px 10px; background-color: #f1f5f9; color: #475569; border-radius: 6px;">Pending Review</span>
              </td>
            </tr>
            ${
              budget
                ? `
            <tr>
              <td style="padding: 14px 0 0 0; font-size: 15px; font-weight: 600; color: #0f172a;">Estimated amount:</td>
              <td style="padding: 14px 0 0 0; font-size: 20px; font-weight: 700; color: #000000;" align="right">${currency} ${budget}</td>
            </tr>`
                : ""
            }
          </table>
        </div>

        <p style="font-size: 16px; font-weight: 600; color: #0f172a; margin: 24px 0 12px 0;">What happens next?</p>
        <ol style="padding-left: 20px; margin: 0 0 28px 0; font-size: 14px; color: #475569; line-height: 1.7;">
          <li style="margin-bottom: 8px;">Our specialists will review your request and prepare a detailed proposal.</li>
          <li style="margin-bottom: 8px;">You’ll receive a follow-up email with the full quote breakdown for approval.</li>
          <li>Once approved, we’ll schedule the work and keep you updated every step of the way.</li>
        </ol>

        <div style="text-align: center; margin: 32px 0 20px 0;">
          <a href="mailto:support@apex49.co" style="display: inline-block; background-color: #000000; color: #ffffff !important; font-size: 15px; font-weight: 600; padding: 12px 32px; border-radius: 8px; text-decoration: none;">
            Contact Support
          </a>
        </div>

        <p style="font-size: 12px; color: #94a3b8; text-align: center; margin: 20px 0 0 0;">
          Questions? Reply to this email or contact us at <a href="mailto:support@apex49.co" style="color: #64748b; text-decoration: underline;">support@apex49.co</a>
        </p>
    `;

    await this.transporter.sendEmail(
      [email],
      "Your Quote Has Been Received",
      EmailTemplate.render(content, unsubscribeUrl),
    );
  }
}

const username = process.env.NEXT_MAILTRAP_SMTP_USERNAME!;
const password = process.env.NEXT_MAILTRAP_SMTP_PASSWORD!;

// Quick sanity check for development
if (!username || !password) {
  console.warn("⚠️ SMTP Credentials are missing from environment variables!");
}

const mailerConfig = {
  apiKey: process.env.NEXT_PUBLIC_RESEND_KEY || "",
  defaultFromAddress: "Apex49 Digital Limited <info@apex49.co>",
};

export const emailTransporter = new EmailTransporter(mailerConfig);
export const quoteEmailHandler = new RequestQuoteHandler(emailTransporter);
