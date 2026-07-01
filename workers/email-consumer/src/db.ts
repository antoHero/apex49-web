import { getSupabaseAdmin } from "../../../lib/supabase/admin";
import { Env } from ".";

export async function wasAlreadySent(env: Env, jobId: string): Promise<boolean> {
  const supabase = getSupabaseAdmin(env.SUPABASE_URL, env.SUPABASE_SECRET_KEY);

  const { data, error } = await supabase
    .from("email_log")
    .select("status")
    .eq("id", jobId)
    .maybeSingle();

  if (error) throw new Error(`supabase read failed: ${error.message}`);
  return data?.status === "sent";
}

export async function markSent(env: Env, jobId: string) {
  const supabase = getSupabaseAdmin(env.SUPABASE_URL, env.SUPABASE_SECRET_KEY);

  const { error } = await supabase
    .from("email_log")
    .upsert({ id: jobId, status: "sent", updated_at: new Date().toISOString() });

  if (error) throw new Error(`supabase write failed: ${error.message}`);
}

export async function markFailed(env: Env, jobId: string, errMsg: string) {
  const supabase = getSupabaseAdmin(env.SUPABASE_URL, env.SUPABASE_SECRET_KEY);

  const { error } = await supabase
    .from("email_log")
    .upsert({
      id: jobId,
      status: "failed",
      error: errMsg,
      updated_at: new Date().toISOString(),
    });

  if (error) throw new Error(`supabase write failed: ${error.message}`);
}