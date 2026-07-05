import { createClient } from "@supabase/supabase-js";
import { supabaseConfig } from "@/lib/env";

export function createSupabaseServerClient() {
  if (!supabaseConfig.url || !supabaseConfig.anonKey) {
    throw new Error("Variaveis publicas do Supabase nao configuradas.");
  }

  return createClient(supabaseConfig.url, supabaseConfig.anonKey, {
    auth: {
      persistSession: false
    }
  });
}
