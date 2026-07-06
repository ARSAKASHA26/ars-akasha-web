import Link from "next/link";

const items = [
  "Dados de nascimento estruturados para calculo do mapa e dos ciclos.",
  "Pergunta principal do cliente guardada junto ao pedido.",
  "Pagamento seguro apos o preenchimento do pedido.",
  "Entrega preparada para acompanhar sua jornada dentro da Ars Akasha."
];

export default function EstudosPersonalizadosPage() {
  return (
    <>
      <section className="study-hero">
        <div className="container">
          <div className="study-hero-grid">
            <div className="study-hero-copy">
              <span className="eyebrow">servico principal</span>
              <h1>Estudos personalizados</h1>
              <p>
                Um pedido completo para reunir nascimento, contato e pergunta
                espiritual antes do pagamento. Assim o estudo nasce com
                contexto, cuidado e direcao desde o primeiro contato.
              </p>
              <div className="actions">
                <a className="button primary" href="#pedido">
                  Preencher pedido
                </a>
                <Link className="button secondary" href="/leitura-gratuita">
                  Ver leitura gratuita
                </Link>
              </div>
            </div>
            <aside className="study-summary" aria-label="Resumo do fluxo">
              <span>Fluxo Ars Akasha</span>
              <ol>
                <li>Cliente informa nascimento e pergunta.</li>
                <li>O pedido segue para pagamento seguro.</li>
                <li>As informacoes orientam a preparacao do estudo.</li>
                <li>O dossie nasce a partir dos calculos e da IA.</li>
              </ol>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container study-layout">
          <form className="intake-card" id="pedido" action="/api/checkout" method="POST">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">pedido do estudo</span>
                <h2>Dados para preparar o dossie</h2>
              </div>
              <strong>R$ 297</strong>
            </div>

            <div className="form-section">
              <h3>Contato</h3>
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
                <label className="field">
                  <span>Foco do estudo</span>
                  <select name="study_focus" defaultValue="Biblioteca da Alma">
                    <option>Biblioteca da Alma</option>
                    <option>Relacionamentos e ciclos afetivos</option>
                    <option>Vocacao, trabalho e prosperidade</option>
                    <option>Protecao espiritual e caminhos abertos</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="form-section">
              <h3>Nascimento</h3>
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
                  <span>Cidade de nascimento</span>
                  <input
                    name="birth_city"
                    type="text"
                    placeholder="Ex.: Sao Paulo"
                    required
                  />
                </label>
                <label className="field">
                  <span>Estado</span>
                  <input name="birth_state" type="text" placeholder="Ex.: SP" />
                </label>
                <label className="field">
                  <span>Pais</span>
                  <input
                    name="birth_country"
                    type="text"
                    defaultValue="Brasil"
                    required
                  />
                </label>
              </div>
            </div>

            <label className="field">
              <span>Pergunta principal ou momento de vida</span>
              <textarea
                name="main_question"
                placeholder="Conte em poucas linhas o que voce deseja compreender neste estudo."
                required
              />
            </label>

            <label className="consent-box">
              <input name="consent" type="checkbox" required />
              <span>
                Autorizo a Ars Akasha a usar estes dados para preparar meu
                estudo personalizado e entrar em contato sobre este pedido.
              </span>
            </label>

            <button className="button primary submit-button" type="submit">
              Continuar para pagamento seguro
            </button>
          </form>

          <aside className="process-panel">
            <span className="eyebrow">como sera usado</span>
            <h2>Do formulario ao dossie</h2>
            <p>
              Estes campos substituem formularios genericos e frios. A data, a
              hora e a cidade de nascimento ficam ligadas ao pedido para
              alimentar os calculos simbolicos, a organizacao do dossie e a
              escrita final.
            </p>
            <ul className="feature-list compact">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
