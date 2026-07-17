import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { updatePassword } from "@/app/entrar/actions";
import { isSupabaseConfigured } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Criar nova senha | Ars Akasha",
  description: "Crie uma nova senha para sua conta Ars Akasha."
};

type ResetPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ResetPage({ searchParams }: ResetPageProps) {
  if (!isSupabaseConfigured()) {
    redirect("/entrar?erro=indisponivel");
  }

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getClaims();

  if (!data?.claims?.sub) {
    redirect("/recuperar-senha?erro=link");
  }

  const params = await searchParams;
  const error = typeof params.erro === "string" ? params.erro : "";

  return (
    <>
      <section className="page-title account-title">
        <div className="container">
          <span className="eyebrow">proteja seu acesso</span>
          <h1>Crie uma nova senha</h1>
          <p>Escolha uma senha que você não utilize em outros serviços.</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow-account-panel">
          <form className="account-form" action={updatePassword}>
            <div>
              <span className="eyebrow">último passo</span>
              <h2>Defina sua nova senha.</h2>
            </div>

            {error ? (
              <p className="form-error" role="alert">
                {error === "senha-curta"
                  ? "Use pelo menos 8 caracteres."
                  : error === "senhas"
                    ? "As duas senhas precisam ser iguais."
                    : "Não foi possível guardar a nova senha. Solicite outro link e tente novamente."}
              </p>
            ) : null}

            <label className="field">
              <span>Nova senha</span>
              <input name="password" type="password" autoComplete="new-password" minLength={8} required />
              <small>Use pelo menos 8 caracteres.</small>
            </label>

            <label className="field">
              <span>Confirme a nova senha</span>
              <input
                name="password_confirmation"
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
              />
            </label>

            <button className="button primary" type="submit">Guardar nova senha</button>
          </form>
        </div>
      </section>
    </>
  );
}
