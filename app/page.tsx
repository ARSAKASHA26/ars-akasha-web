import Link from "next/link";

const pillars = [
  {
    title: "Estudos personalizados",
    tag: "Dossies sob medida",
    body: "Uma entrega preparada a partir da sua historia, perguntas, ciclos e sinais do seu caminho espiritual.",
    href: "/estudos-personalizados"
  },
  {
    title: "E-books",
    tag: "Biblioteca gratuita",
    body: "Dezenove leituras para aprofundar temas da Ars Akasha com calma e retomar cada ensinamento quando precisar.",
    href: "/ebooks"
  },
  {
    title: "Oraculos e tiragens",
    tag: "Clareza para decidir",
    body: "Cartas, mensagens e caminhos para momentos de escolha, cura, protecao, amor e direcao espiritual.",
    href: "/"
  },
  {
    title: "Biblioteca da Alma",
    tag: "Em construcao",
    body: "Seu futuro espaco para guardar estudos, registros, entregas e caminhos importantes da sua jornada.",
    href: "/"
  }
];

const intentions = [
  "Clareza",
  "Proposito",
  "Protecao",
  "Cura emocional",
  "Relacionamentos",
  "Evolucao"
];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-label="Ars Akasha - Biblioteca da Alma">
        <span className="sr-only">
          Ars Akasha, a Biblioteca da Alma. Estudos hermeticos para
          autoconhecimento, proposito e evolucao espiritual.
        </span>
      </section>

      <section className="intro-band">
        <div className="container intro-grid">
          <div>
          <span className="eyebrow">arsakasha.com</span>
          <h1>Biblioteca da Alma</h1>
          <p>
            Estudos hermeticos, leituras e oraculos para revelar sinais do seu
            caminho, abrir clareza sobre o momento presente e apoiar escolhas
            com mais consciencia.
          </p>
          </div>
          <div className="actions">
            <Link className="button primary" href="/estudos-personalizados">
              Conhecer os estudos
            </Link>
            <Link className="button secondary" href="#portais">
              Explorar caminhos
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="portais">
        <div className="container section-heading">
          <span className="eyebrow">portais ars akasha</span>
          <h2>Escolha por onde sua jornada pede para comecar.</h2>
          <p>
            Cada portal tem uma funcao diferente: aprofundar uma pergunta,
            estudar no seu ritmo, buscar uma mensagem para o momento ou guardar
            sua propria jornada espiritual.
          </p>
        </div>
        <div className="container portal-grid">
          {pillars.map((pillar) => (
            <Link className="portal-card" href={pillar.href} key={pillar.title}>
              <span>{pillar.tag}</span>
              <h2>{pillar.title}</h2>
              <p>{pillar.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container intention-layout">
          <div className="text-block">
            <span className="eyebrow">escolha por intencao</span>
            <h2>Quando a pergunta fica clara, o caminho comeca a responder.</h2>
            <p>
              Os estudos da Ars Akasha sao organizados para acolher o que voce
              esta vivendo agora: relacoes, protecao, cura, escolhas,
              amadurecimento espiritual e proposito.
            </p>
          </div>
          <div className="intention-list" aria-label="Intencoes de estudo">
            {intentions.map((intention) => (
              <span key={intention}>{intention}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section closing-cta">
        <div className="container cta-panel">
          <span className="eyebrow">porta de entrada</span>
          <h2>Receba uma primeira leitura e sinta se esta linguagem conversa com voce.</h2>
          <p>
            Se fizer sentido, o proximo passo pode ser um estudo personalizado
            preparado com mais profundidade, cuidado e direcao.
          </p>
          <div className="actions">
            <Link className="button primary" href="/leitura-gratuita">
              Comecar leitura gratuita
            </Link>
            <Link className="button secondary" href="/ebooks">
              Abrir biblioteca gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
