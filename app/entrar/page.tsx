import type { Metadata } from "next";
import Link from "next/link";
import { isSupabaseConfigured } from "@/lib/env";
import { sendAccessLink } from "./actions";

export const metadata: Metadata = {
  title: "Entrar na Biblioteca da Alma | Ars Akasha",
  description: "Acesse suas leituras, estudos e registros guardados na Ars Akasha."
};

type LoginPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const sent = params.enviado === "1";
  const error = typeof params.erro === "string" ? params.erro : "";
  const email = typeof params.email === "string" ? params.email : "";
  const configured = isSupabaseConfigured();

  return (
    <>
      <section className="page-title account-title">
        <div className="container">
          <span className="eyebrow">seu espaço na Ars Akasha</span>
          <h1>Biblioteca da Alma</h1>
          <p>
            Entre com seu e-mail para guardar leituras e acompanhar os estudos
            preparados para você.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container account-entry-grid">
          <div className="account-copy">
            <span className="eyebrow">um acesso simples</span>
            <h2>Sem senha para decorar.</h2>
            <p>
              Enviaremos um link seguro para o seu e-mail. Ao abrir esse link,
              você entra diretamente na sua biblioteca.
            </p>
            <ul className="quiet-list">
              <li>Guarde seus primeiros sinais.</li>
              <li>Acompanhe pedidos e estudos em preparação.</li>
              <li>Acesse suas entregas em um só lugar.</li>
            </ul>
          </div>

          <div className="account-form-panel">
            {sent ? (
              <div className="account-message" role="status">
                <span className="eyebrow">verifique seu e-mail</span>
                <h2>Seu caminho de acesso foi enviado.</h2>
                <p>
                  Abra a mensagem enviada para <strong>{email}</strong> e toque
                  no link para entrar na Biblioteca da Alma.
                </p>
              </div>
            ) : !configured ? (
              <div className="account-message">
                <span className="eyebrow">em preparação</span>
                <h2>A Biblioteca da Alma está sendo organizada.</h2>
                <p>
                  O acesso será aberto assim que os primeiros espaços de cada
                  cliente estiverem prontos.
                </p>
              </div>
            ) : (
              <form action={sendAccessLink} className="account-form">
                <div>
                  <span className="eyebrow">entrar ou criar acesso</span>
                  <h2>Receba seu link por e-mail.</h2>
                </div>

                {error ? (
                  <p className="form-error" role="alert">
                    {error === "dados"
                      ? "Confira o e-mail e aceite o aviso de privacidade."
                      : "Não foi possível enviar o acesso agora. Tente novamente em alguns minutos."}
                  </p>
                ) : null}

                <label className="field">
                  <span>Seu nome</span>
                  <input name="full_name" type="text" autoComplete="name" />
                </label>
                <label className="field">
                  <span>Seu melhor e-mail</span>
                  <input name="email" type="email" autoComplete="email" required />
                </label>

                <label className="consent-box compact-consent">
                  <input name="privacy_accepted" type="checkbox" required />
                  <span>
                    Li e concordo com o <Link href="/privacidade">Aviso de Privacidade</Link>
                    para criar meu acesso e guardar meus registros.
                  </span>
                </label>
                <label className="consent-box compact-consent">
                  <input name="marketing_email" type="checkbox" />
                  <span>Quero receber novidades e novos conteúdos por e-mail.</span>
                </label>

                <button className="button primary submit-button" type="submit">
                  Enviar meu link de acesso
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
