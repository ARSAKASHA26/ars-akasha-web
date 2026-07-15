import { createBrowserClient } from "@supabase/ssr";
import { supabaseConfig } from "@/lib/env";

export function createSupabaseBrowserClient() {
  if (!supabaseConfig.url || !supabaseConfig.publishableKey) {
    throw new Error("Variaveis publicas do Supabase nao configuradas.");
  }

  return createBrowserClient(
    supabaseConfig.url,
    supabaseConfig.publishableKey
  );
}
