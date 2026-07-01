import { getCloudflareContext } from "@opennextjs/cloudflare";
import { EmailJobType, EmailJobSchema } from "../types";

export async function enqueueEmail(
  input: Omit<EmailJobType, "id" | "createdAt">,
) {
  const job = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: Date.now(),
  } as EmailJobType;

  const parsed = EmailJobSchema.parse(job);

  const { env } = getCloudflareContext();
  await env.EMAIL_QUEUE.send(parsed);

  return parsed.id;
}
