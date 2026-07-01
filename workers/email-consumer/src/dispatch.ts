
import { EmailJobType } from "../../../lib/types";
import { createQuoteEmailHandler } from "../../../utils/emails/handlers/quote-handler";
import { Env } from "./index";


export async function dispatchEmail(env: Env, job: EmailJobType) {
  switch (job.type) {
    case "quote_confirmation": {
      const handler = createQuoteEmailHandler({ RESEND_API_KEY: env.RESEND_API_KEY });

      await handler.sendConfirmationEmail(
        job.to,
        job.data.last_name,
        job.data.reference,
        job.data.service,
        job.data.createdAt,
        job.data.unsubscribe_token,
        job.data.currency,
        job.data.project_description,
        job.data.budget,
      );
      return;
    }
    default:
      throw new Error(`No dispatch handler registered for email type "${job.type}"`);
  }
}