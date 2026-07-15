import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { supabaseConfig } from "@/lib/env";

export async function createSupabaseServerClient() {
  if (!supabaseConfig.url || !supabaseConfig.publishableKey) {
    throw new Error("Variaveis publicas do Supabase nao configuradas.");
  }

  const cookieStore = await cookies();

  return createServerClient(
    supabaseConfig.url,
    supabaseConfig.publishableKey,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // Server Components nao podem alterar cookies. O proxy renova a sessao.
          }
        }
      }
    }
  );
}
