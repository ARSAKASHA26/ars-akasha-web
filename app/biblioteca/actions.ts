"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function updateProfile(formData: FormData) {
  if (!isSupabaseConfigured()) {
    redirect("/entrar?erro=indisponivel");
  }

  const supabase = await createSupabaseServerClient();
  const { data: claimsData } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;

  if (!userId) {
    redirect("/entrar");
  }

  const value = (name: string) => String(formData.get(name) ?? "").trim();
  const personalizedConsent = formData.get("personalized_consent") === "on";

  if (!personalizedConsent) {
    redirect("/biblioteca?erro=consentimento#meus-dados");
  }

  const { error } = await supabase
    .from("profiles")
    .update({
      full_name: value("full_name") || null,
      whatsapp: value("whatsapp") || null,
      birth_date: value("birth_date") || null,
      birth_time: value("birth_time") || null,
      birth_city: value("birth_city") || null,
      birth_state: value("birth_state") || null,
      birth_country: value("birth_country") || "Brasil"
    })
    .eq("id", userId);

  if (error) {
    redirect("/biblioteca?erro=salvar#meus-dados");
  }

  await supabase.from("consents").insert({
    user_id: userId,
    purpose: "personalized_services",
    policy_version: "2026-07-14",
    source: "client-library"
  });

  revalidatePath("/biblioteca");
  redirect("/biblioteca?salvo=1#meus-dados");
}
