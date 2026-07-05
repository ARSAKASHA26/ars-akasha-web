import Link from "next/link";

const pillars = [
  {
    title: "Leitura gratuita",
    body: "Uma primeira leitura simbolica para abrir o campo, orientar o momento atual e apresentar a linguagem da Ars Akasha."
  },
  {
    title: "Estudos personalizados",
    body: "Dossies e leituras sob medida com base em nascimento, ciclos, arquetipos, caminhos espirituais e perguntas do cliente."
  },
  {
    title: "Biblioteca do cliente",
    body: "Estrutura preparada para uma futura area privada com login, historico de estudos e materiais digitais via Supabase."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">arsakasha.com</span>
          <h1>Ars Akasha</h1>
          <p>
            Uma aplicacao para leituras espirituais, estudos personalizados e
            uma futura biblioteca do cliente, pronta para crescer com GitHub,
            Vercel, Stripe e Supabase.
          </p>
          <div className="actions">
            <Link className="button primary" href="/leitura-gratuita">
              Comecar leitura gratuita
            </Link>
            <Link className="button secondary" href="/estudos-personalizados">
              Ver estudos personalizados
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid">
          {pillars.map((pillar) => (
            <article className="card" key={pillar.title}>
              <h2>{pillar.title}</h2>
              <p>{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container text-block">
          <span className="eyebrow">estrutura inicial</span>
          <h2>Do primeiro contato ao pagamento, com espaco para evoluir.</h2>
          <p>
            Esta base separa as jornadas principais do site, deixa o checkout
            preparado para Stripe e inclui os clientes Supabase para ativar
            autenticacao, banco de dados e biblioteca quando chegar a hora.
          </p>
        </div>
      </section>
    </>
  );
}
