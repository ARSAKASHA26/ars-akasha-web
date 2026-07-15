import type { EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const redirectTo = request.nextUrl.clone();
  const nextPath = request.nextUrl.searchParams.get("next");
  const safeNext = nextPath?.startsWith("/") && !nextPath.startsWith("//")
    ? nextPath
    : "/biblioteca";

  redirectTo.pathname = safeNext;
  redirectTo.search = "";

  if (!isSupabaseConfigured()) {
    redirectTo.pathname = "/entrar";
    redirectTo.searchParams.set("erro", "indisponivel");
    return NextResponse.redirect(redirectTo);
  }

  const supabase = await createSupabaseServerClient();
  const code = request.nextUrl.searchParams.get("code");
  const tokenHash = request.nextUrl.searchParams.get("token_hash");
  const type = request.nextUrl.searchParams.get("type") as EmailOtpType | null;

  const result = code
    ? await supabase.auth.exchangeCodeForSession(code)
    : tokenHash && type
      ? await supabase.auth.verifyOtp({ token_hash: tokenHash, type })
      : { error: new Error("Link de acesso incompleto.") };

  if (!result.error) {
    return NextResponse.redirect(redirectTo);
  }

  redirectTo.pathname = "/entrar";
  redirectTo.searchParams.set("erro", "envio");
  return NextResponse.redirect(redirectTo);
}
