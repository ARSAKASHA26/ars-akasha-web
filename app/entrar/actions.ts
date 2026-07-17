"use server";

import { redirect } from "next/navigation";
import { isSupabaseConfigured, siteUrl } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const privacyVersion = "2026-07-14";
const minimumPasswordLength = 8;

function field(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim();
}

function validEmail(email: string) {
  return email.includes("@") && email.includes(".");
}

export async function signIn(formData: FormData) {
  const email = field(formData, "email").toLowerCase();
  const password = field(formData, "password");

  if (!validEmail(email) || !password) {
    redirect("/entrar?erro=dados");
  }

  if (!isSupabaseConfigured()) {
    redirect("/entrar?erro=indisponivel");
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect("/entrar?erro=credenciais");
  }

  redirect("/biblioteca");
}

export async function createAccount(formData: FormData) {
  const fullName = field(formData, "full_name");
  const email = field(formData, "email").toLowerCase();
  const password = field(formData, "password");
  const passwordConfirmation = field(formData, "password_confirmation");
  const privacyAccepted = formData.get("privacy_accepted") === "on";
  const marketingEmail = formData.get("marketing_email") === "on";

  if (!fullName || !validEmail(email) || !privacyAccepted) {
    redirect("/entrar?novo=1&erro=dados");
  }

  if (password.length < minimumPasswordLength) {
    redirect("/entrar?novo=1&erro=senha-curta");
  }

  if (password !== passwordConfirmation) {
    redirect("/entrar?novo=1&erro=senhas");
  }

  if (!isSupabaseConfigured()) {
    redirect("/entrar?novo=1&erro=indisponivel");
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
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

  if (data.session) {
    redirect("/biblioteca");
  }

  redirect(`/entrar?enviado=1&email=${encodeURIComponent(email)}`);
}

export async function requestPasswordReset(formData: FormData) {
  const email = field(formData, "email").toLowerCase();

  if (!validEmail(email)) {
    redirect("/recuperar-senha?erro=dados");
  }

  if (!isSupabaseConfigured()) {
    redirect("/recuperar-senha?erro=indisponivel");
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${siteUrl}/auth/confirm?next=/redefinir-senha`
  });

  if (error) {
    redirect("/recuperar-senha?erro=envio");
  }

  redirect(`/recuperar-senha?enviado=1&email=${encodeURIComponent(email)}`);
}

export async function updatePassword(formData: FormData) {
  const password = field(formData, "password");
  const passwordConfirmation = field(formData, "password_confirmation");

  if (password.length < minimumPasswordLength) {
    redirect("/redefinir-senha?erro=senha-curta");
  }

  if (password !== passwordConfirmation) {
    redirect("/redefinir-senha?erro=senhas");
  }

  if (!isSupabaseConfigured()) {
    redirect("/entrar?erro=indisponivel");
  }

  const supabase = await createSupabaseServerClient();
  const { data: claimsData } = await supabase.auth.getClaims();

  if (!claimsData?.claims?.sub) {
    redirect("/recuperar-senha?erro=link");
  }

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    redirect("/redefinir-senha?erro=salvar");
  }

  redirect("/biblioteca?senha=alterada");
}
