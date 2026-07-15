import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso de Privacidade | Ars Akasha",
  description: "Como a Ars Akasha cuida dos dados pessoais de seus clientes."
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-title account-title">
        <div className="container">
          <span className="eyebrow">cuidado e respeito</span>
          <h1>Aviso de Privacidade</h1>
          <p>
            Seus dados fazem parte de uma relação de confiança. Aqui explicamos,
            de forma direta, por que eles são pedidos e como são protegidos.
          </p>
        </div>
      </section>

      <section className="section">
        <article className="container privacy-content">
          <p className="privacy-version">Versão de 14 de julho de 2026.</p>

          <h2>Quais dados podemos receber</h2>
          <p>
            Podemos receber nome, e-mail, WhatsApp, data, hora e cidade de
            nascimento, além das perguntas e escolhas feitas por você. Dados de
            pagamento são processados pelo meio de pagamento e não ficam
            armazenados integralmente na Ars Akasha.
          </p>

          <h2>Para que usamos</h2>
          <p>
            Usamos os dados para criar seu acesso, preparar leituras e estudos
            solicitados, acompanhar pedidos, entregar conteúdos na Biblioteca da
            Alma e prestar atendimento. Novidades por e-mail só serão enviadas
            quando você escolher recebê-las.
          </p>

          <h2>Como protegemos</h2>
          <p>
            O acesso é individual e os registros pessoais ficam em uma área
            reservada. Apenas pessoas autorizadas participam do atendimento e da
            preparação dos estudos. Não vendemos seus dados pessoais.
          </p>

          <h2>Por quanto tempo guardamos</h2>
          <p>
            Mantemos os registros enquanto forem necessários para o atendimento,
            para sua biblioteca ou para cumprir obrigações legais. Você pode pedir
            correção, informação ou exclusão quando desejar, respeitados os prazos
            que a lei exigir.
          </p>

          <h2>Seus direitos e contato</h2>
          <p>
            Para consultar, corrigir ou solicitar a exclusão dos seus dados,
            escreva para <a href="mailto:financeiro@arsakasha.com">financeiro@arsakasha.com</a>.
            Confirmaremos sua identidade antes de atender solicitações sobre dados
            pessoais.
          </p>

          <div className="privacy-actions">
            <Link className="button primary" href="/entrar">
              Entrar na Biblioteca da Alma
            </Link>
            <Link className="button light" href="/">
              Voltar ao início
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
