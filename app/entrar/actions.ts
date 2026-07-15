"use server";

import { redirect } from "next/navigation";
import { isSupabaseConfigured, siteUrl } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const privacyVersion = "2026-07-14";

export async function sendAccessLink(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!email || !email.includes("@")) {
    redirect("/entrar?erro=dados");
  }

  if (!isSupabaseConfigured()) {
    redirect("/entrar?erro=indisponivel");
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: `${siteUrl}/auth/confirm?next=/biblioteca`
    }
  });

  if (error) {
    redirect("/entrar?erro=acesso");
  }

  redirect(`/entrar?enviado=1&email=${encodeURIComponent(email)}`);
}

export async function createAccess(formData: FormData) {
  const fullName = String(formData.get("full_name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const privacyAccepted = formData.get("privacy_accepted") === "on";
  const marketingEmail = formData.get("marketing_email") === "on";

  if (!fullName || !email || !email.includes("@") || !privacyAccepted) {
    redirect("/entrar?novo=1&erro=dados");
  }

  if (!isSupabaseConfigured()) {
    redirect("/entrar?novo=1&erro=indisponivel");
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: `${siteUrl}/auth/confirm?next=/biblioteca`,
      data: {
        full_name: fullName,
        privacy_accepted: true,
        privacy_version: privacyVersion,
        marketing_email: marketingEmail
      }
    }
  });

  if (error) {
    redirect("/entrar?novo=1&erro=envio");
  }

  redirect(`/entrar?enviado=1&email=${encodeURIComponent(email)}`);
}
