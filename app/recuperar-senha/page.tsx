import type { Metadata } from "next";
import Link from "next/link";
import { isSupabaseConfigured } from "@/lib/env";
import { requestPasswordReset } from "@/app/entrar/actions";

export const metadata: Metadata = {
  title: "Recuperar senha | Ars Akasha",
  description: "Receba por e-mail o caminho para criar uma nova senha."
};

type RecoveryPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function RecoveryPage({ searchParams }: RecoveryPageProps) {
  const params = await searchParams;
  const sent = params.enviado === "1";
  const email = typeof params.email === "string" ? params.email : "";
  const error = typeof params.erro === "string" ? params.erro : "";

  return (
    <>
      <section className="page-title account-title">
        <div className="container">
          <span className="eyebrow">acesso à sua conta</span>
          <h1>Recuperar senha</h1>
          <p>Enviaremos para seu e-mail um caminho seguro para criar uma nova senha.</p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow-account-panel">
          {sent ? (
            <div className="account-message" role="status">
              <span className="eyebrow">verifique seu e-mail</span>
              <h2>O caminho foi enviado.</h2>
              <p>
                Caso exista uma conta para <strong>{email}</strong>, você receberá
                uma mensagem com as próximas instruções.
              </p>
              <Link className="button light" href="/entrar">Voltar para entrar</Link>
            </div>
          ) : (
            <form className="account-form" action={requestPasswordReset}>
              <div>
                <span className="eyebrow">nova senha</span>
                <h2>Qual é o seu e-mail?</h2>
              </div>

              {error ? (
                <p className="form-error" role="alert">
                  {error === "dados"
                    ? "Confira o e-mail informado."
                    : error === "link"
                      ? "Esse link não está mais válido. Solicite um novo."
                      : "Não foi possível enviar agora. Tente novamente em alguns minutos."}
                </p>
              ) : null}

              <label className="field">
                <span>E-mail da sua conta</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>

              <button
                className="button primary"
                type="submit"
                disabled={!isSupabaseConfigured()}
              >
                Enviar instruções
              </button>
              <Link className="form-secondary-link" href="/entrar">Voltar para entrar</Link>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
