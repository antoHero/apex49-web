import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin(url: string, secretKey: string) {
  if (typeof window !== "undefined") {
    throw new Error(
      "getSupabaseAdmin() called in a browser context. " +
      "The service-role key must never reach client code. " +
      "Use lib/supabase/client.ts for browser-side Supabase access."
    );
  }

  if (!url || !secretKey) {
    throw new Error("getSupabaseAdmin() requires both SUPABASE_URL and SUPABASE_SECRET_KEY.");
  }

  return createClient(url, secretKey, {
    auth: { persistSession: false },
  });
}