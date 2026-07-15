import "server-only";
import { createClient } from "@supabase/supabase-js";
import { supabaseConfig } from "@/lib/env";

export function createSupabaseAdminClient() {
  if (!supabaseConfig.url || !supabaseConfig.secretKey) {
    return null;
  }

  return createClient(supabaseConfig.url, supabaseConfig.secretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}
