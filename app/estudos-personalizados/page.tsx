import type { Metadata } from "next";
import Link from "next/link";
import {
  getPersonalizedStudyById,
  personalizedStudies
} from "@/data/catalog";

export const metadata: Metadata = {
  title: "Estudos personalizados | Ars Akasha",
  description:
    "Escolha um estudo personalizado da Ars Akasha preparado a partir dos seus dados, da sua pergunta e do seu momento de vida."
};

type PageProps = {
  searchParams: Promise<{ estudo?: string }>;
};

const preparationSteps = [
  "Escolha o estudo que mais se aproxima da sua pergunta.",
  "Informe seus dados de nascimento e conte o que deseja compreender.",
  "Após a confirmação, o estudo é preparado individualmente.",
  "Você recebe a entrega em PDF e pode guardá-la na sua biblioteca."
];

export default async function EstudosPersonalizadosPage({ searchParams }: PageProps) {
  const { estudo } = await searchParams;
  const selectedStudy = getPersonalizedStudyById(estudo);

  return (
    <>
      <section className="study-hero">
        <div className="container study-hero-grid">
          <div className="study-hero-copy">
            <span className="eyebrow">leituras feitas para uma pessoa</span>
            <h1>Estudos personalizados</h1>
            <p>
              Por que certos caminhos se repetem? Onde a vida pede atenção?
              Cada estudo reúne seus dados, uma pergunta verdadeira e uma
              leitura preparada com cuidado para o seu momento.
            </p>
            <div className="actions">
              <a className="button primary" href="#catalogo-estudos">
                Escolher meu estudo
              </a>
              <Link className="button secondary" href="/ebooks">
                Ver e-books gratuitos
              </Link>
            </div>
          </div>
          <aside className="study-summary" aria-label="Como os estudos são preparados">
            <span>Como funciona</span>
            <ol>
              {preparationSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="section" id="catalogo-estudos">
        <div className="container section-heading">
          <span className="eyebrow">estudos disponíveis</span>
          <h2>Qual pergunta está pedindo mais clareza hoje?</h2>
          <p>
            Cada estudo abre uma parte diferente da sua história. Leia as
            propostas com calma e escolha aquela que encontra o que você está
            vivendo agora.
          </p>
        </div>

        <div className="container studies-grid">
          {personalizedStudies.map((study) => {
            const isSelected = selectedStudy?.id === study.id;

            return (
              <article
                className={`study-card${isSelected ? " selected" : ""}`}
                key={study.id}
              >
                <div className="study-card-heading">
                  <span>{study.badge}</span>
                  <strong>{study.priceLabel}</strong>
                </div>
                <h2>{study.name}</h2>
                <p>{study.summary}</p>
                <ul>
                  {study.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <Link
                  className={`button ${isSelected ? "light" : "primary"}`}
                  href={`/estudos-personalizados?estudo=${study.id}#pedido`}
                >
                  {isSelected ? "Estudo selecionado" : "Quero este estudo"}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section alt" id="pedido">
        {selectedStudy ? (
          <div className="container study-layout">
            <form className="intake-card" action="/api/checkout" method="POST">
              <input name="study_id" type="hidden" value={selectedStudy.id} />
              <input name="study_focus" type="hidden" value={selectedStudy.name} />
              <input name="consent_version" type="hidden" value="2026-07-14" />

              <div className="panel-heading">
                <div>
                  <span className="eyebrow">seu pedido</span>
                  <h2>{selectedStudy.name}</h2>
                </div>
                <strong>{selectedStudy.priceLabel}</strong>
              </div>

              <div className="form-section">
                <h3>Como podemos falar com você?</h3>
                <div className="form-grid two">
                  <label className="field">
                    <span>Nome completo</span>
                    <input name="name" type="text" autoComplete="name" required />
                  </label>
                  <label className="field">
                    <span>E-mail</span>
                    <input name="email" type="email" autoComplete="email" required />
                  </label>
                  <label className="field">
                    <span>WhatsApp</span>
                    <input
                      name="whatsapp"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </label>
                </div>
              </div>

              <div className="form-section">
                <h3>Seus dados de nascimento</h3>
                <div className="form-grid three">
                  <label className="field">
                    <span>Data de nascimento</span>
                    <input name="birth_date" type="date" required />
                  </label>
                  <label className="field">
                    <span>Hora de nascimento</span>
                    <input name="birth_time" type="time" required />
                  </label>
                  <label className="field">
                    <span>Cidade onde nasceu</span>
                    <input name="birth_city" type="text" placeholder="Ex.: São Paulo" required />
                  </label>
                  <label className="field">
                    <span>Estado</span>
                    <input name="birth_state" type="text" placeholder="Ex.: SP" />
                  </label>
                  <label className="field">
                    <span>País</span>
                    <input name="birth_country" type="text" defaultValue="Brasil" required />
                  </label>
                </div>
              </div>

              <label className="field">
                <span>O que você deseja compreender?</span>
                <textarea
                  name="main_question"
                  placeholder="Conte em poucas linhas o que está acontecendo e qual pergunta trouxe você até este estudo."
                  required
                />
              </label>

              <label className="consent-box">
                <input name="consent" type="checkbox" required />
                <span>
                  Autorizo a Ars Akasha a usar estes dados somente para preparar
                  meu estudo e entrar em contato sobre este pedido, conforme o{" "}
                  <Link href="/privacidade">Aviso de Privacidade</Link>.
                </span>
              </label>

              <button className="button primary submit-button" type="submit">
                Continuar com este estudo
              </button>
              <p className="form-note">
                Se o pagamento on-line ainda não estiver disponível, seu pedido
                seguirá para o atendimento da Ars Akasha pelo WhatsApp.
              </p>
            </form>

            <aside className="process-panel">
              <span className="eyebrow">o que acontece depois</span>
              <h2>O estudo começa antes da escrita.</h2>
              <p>
                A data, a hora, a cidade e sua pergunta ajudam a organizar os
                cálculos e a leitura. O resultado não é um texto pronto para
                qualquer pessoa: ele nasce do encontro entre essas informações
                e o tema que você escolheu.
              </p>
              <ul className="feature-list compact">
                {selectedStudy.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link className="change-study-link" href="#catalogo-estudos">
                Escolher outro estudo
              </Link>
            </aside>
          </div>
        ) : (
          <div className="container selection-prompt">
            <span className="eyebrow">primeiro escolha o estudo</span>
            <h2>O formulário se abre com o estudo que você escolher.</h2>
            <p>
              Assim você vê o valor correto, informa seus dados uma única vez e
              segue pelo caminho certo desde o início.
            </p>
            <a className="button primary" href="#catalogo-estudos">
              Ver estudos disponíveis
            </a>
          </div>
        )}
      </section>
    </>
  );
}
