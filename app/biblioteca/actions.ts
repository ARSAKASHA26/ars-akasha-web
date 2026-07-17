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
  const requiredValues = [
    value("full_name"),
    value("whatsapp"),
    value("birth_date"),
    value("birth_city"),
    value("birth_state"),
    value("birth_country")
  ];

  if (requiredValues.some((field) => !field)) {
    redirect("/biblioteca?erro=dados#meus-dados");
  }

  const { data: existingConsent } = await supabase
    .from("consents")
    .select("id")
    .eq("user_id", userId)
    .eq("purpose", "personalized_services")
    .is("revoked_at", null)
    .maybeSingle();

  if (!existingConsent && !personalizedConsent) {
    redirect("/biblioteca?erro=consentimento#meus-dados");
  }

  const { error } = await supabase
    .from("profiles")
    .update({
      full_name: value("full_name"),
      whatsapp: value("whatsapp"),
      birth_date: value("birth_date"),
      birth_time: value("birth_time") || null,
      birth_city: value("birth_city"),
      birth_state: value("birth_state"),
      birth_country: value("birth_country")
    })
    .eq("id", userId);

  if (error) {
    redirect("/biblioteca?erro=salvar#meus-dados");
  }

  if (!existingConsent) {
    await supabase.from("consents").insert({
      user_id: userId,
      purpose: "personalized_services",
      policy_version: "2026-07-14",
      source: "client-library"
    });
  }

  revalidatePath("/biblioteca");
  redirect("/biblioteca?salvo=1#meus-dados");
}
