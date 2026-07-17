import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createAccount, signIn } from "./actions";

export const metadata: Metadata = {
  title: "Entrar na Área do Cliente | Ars Akasha",
  description: "Acesse suas leituras, estudos, pedidos e dados pessoais na Ars Akasha."
};

type LoginPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

const errorMessages: Record<string, string> = {
  dados: "Preencha os campos obrigatórios e confira o e-mail informado.",
  credenciais: "E-mail ou senha incorretos. Confira os dados e tente novamente.",
  "senha-curta": "Crie uma senha com pelo menos 8 caracteres.",
  senhas: "As duas senhas precisam ser iguais.",
  envio: "Não foi possível concluir agora. Tente novamente em alguns minutos.",
  indisponivel: "O acesso está temporariamente indisponível. Tente novamente em alguns minutos."
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const sent = params.enviado === "1";
  const error = typeof params.erro === "string" ? params.erro : "";
  const email = typeof params.email === "string" ? params.email : "";
  const isNewAccount = params.novo === "1";
  const configured = isSupabaseConfigured();

  if (configured) {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getClaims();

    if (data?.claims?.sub) {
      redirect("/biblioteca");
    }
  }

  return (
    <>
      <section className="page-title account-title">
        <div className="container">
          <span className="eyebrow">seu espaço reservado</span>
          <h1>Área do cliente</h1>
          <p>
            Uma única conta para guardar seus dados, acompanhar estudos e
            acessar tudo o que fizer parte da sua jornada na Ars Akasha.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container account-entry-grid">
          <div className="account-copy">
            <span className="eyebrow">um cadastro, vários caminhos</span>
            <h2>Seus dados ficam com você.</h2>
            <p>
              Depois do primeiro acesso, você não precisará informar novamente
              seus dados de nascimento e contato a cada novo estudo.
            </p>
            <ul className="quiet-list">
              <li>Consulte sua leitura inicial.</li>
              <li>Acompanhe pedidos e estudos em preparação.</li>
              <li>Encontre suas entregas na Biblioteca da Alma.</li>
            </ul>
          </div>

          <div className="account-form-panel">
            {sent ? (
              <div className="account-message" role="status">
                <span className="eyebrow">confirme seu e-mail</span>
                <h2>Sua conta está quase pronta.</h2>
                <p>
                  Enviamos uma mensagem para <strong>{email}</strong>. Abra o
                  link recebido para confirmar sua conta e completar o primeiro
                  acesso.
                </p>
                <Link className="button light" href="/entrar">
                  Voltar para entrar
                </Link>
              </div>
            ) : !configured ? (
              <div className="account-message">
                <span className="eyebrow">em preparação</span>
                <h2>A Área do cliente está sendo organizada.</h2>
                <p>O acesso será reaberto assim que a configuração estiver concluída.</p>
              </div>
            ) : (
              <form
                action={isNewAccount ? createAccount : signIn}
                className="account-form"
              >
                <div>
                  <span className="eyebrow">
                    {isNewAccount ? "primeiro acesso" : "bem-vindo de volta"}
                  </span>
                  <h2>{isNewAccount ? "Crie sua conta." : "Entre em sua conta."}</h2>
                </div>

                <div className="account-mode" aria-label="Escolha de acesso">
                  <Link className={!isNewAccount ? "active" : ""} href="/entrar">
                    Entrar
                  </Link>
                  <Link className={isNewAccount ? "active" : ""} href="/entrar?novo=1">
                    Criar conta
                  </Link>
                </div>

                {error ? (
                  <p className="form-error" role="alert">
                    {errorMessages[error] ?? errorMessages.envio}
                  </p>
                ) : null}

                {isNewAccount ? (
                  <label className="field">
                    <span>Nome completo</span>
                    <input name="full_name" type="text" autoComplete="name" required />
                  </label>
                ) : null}

                <label className="field">
                  <span>E-mail</span>
                  <input name="email" type="email" autoComplete="email" required />
                </label>

                <label className="field">
                  <span>Senha</span>
                  <input
                    name="password"
                    type="password"
                    autoComplete={isNewAccount ? "new-password" : "current-password"}
                    minLength={isNewAccount ? 8 : undefined}
                    required
                  />
                  {isNewAccount ? <small>Use pelo menos 8 caracteres.</small> : null}
                </label>

                {isNewAccount ? (
                  <label className="field">
                    <span>Confirme sua senha</span>
                    <input
                      name="password_confirmation"
                      type="password"
                      autoComplete="new-password"
                      minLength={8}
                      required
                    />
                  </label>
                ) : (
                  <Link className="form-secondary-link" href="/recuperar-senha">
                    Esqueci minha senha
                  </Link>
                )}

                {isNewAccount ? (
                  <>
                    <label className="consent-box compact-consent">
                      <input name="privacy_accepted" type="checkbox" required />
                      <span>
                        Li e concordo com o <Link href="/privacidade">Aviso de Privacidade</Link>
                        para criar minha conta e guardar meus registros.
                      </span>
                    </label>
                    <label className="consent-box compact-consent">
                      <input name="marketing_email" type="checkbox" />
                      <span>Quero receber novidades e novos conteúdos por e-mail.</span>
                    </label>
                  </>
                ) : null}

                <button className="button primary submit-button" type="submit">
                  {isNewAccount ? "Criar minha conta" : "Entrar"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
