import { ExportedHandler } from "@cloudflare/workers-types/latest";
import { markFailed, markSent, wasAlreadySent } from "./db";
import { dispatchEmail } from "./dispatch";
import { EmailJobSchema } from "../../../lib/types";

export interface Env {
  RESEND_API_KEY: string;
  SUPABASE_URL: string;
  SUPABASE_SECRET_KEY: string;
}

const emailConsumer: ExportedHandler<Env> = {
  async queue(batch, env) {
    for (const message of batch.messages) {
      const job = EmailJobSchema.parse(message.body);

      try {
        if (await wasAlreadySent(env, job.id)) {
          message.ack();
          continue;
        }

        await dispatchEmail(env, job);
        await markSent(env, job.id);
        message.ack();
      } catch (err) {
        console.error(`email job ${job.id} failed:`, err);
        await markFailed(env, job.id, String(err));
        message.retry();
      }
    }
  },
};

export default emailConsumer;