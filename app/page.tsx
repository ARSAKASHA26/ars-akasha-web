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
    title: "Biblioteca da Alma",
    body: "Um espaco em construcao para guardar seus estudos, caminhos e registros importantes em uma jornada continua."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <span className="eyebrow">arsakasha.com</span>
          <h1>Biblioteca da Alma</h1>
          <p>
            Estudos hermeticos para revelar o que sua alma trouxe, vive e veio
            aprender. Um convite ao autoconhecimento, ao proposito e a evolucao
            espiritual.
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
          <span className="eyebrow">jornada ars akasha</span>
          <h2>Uma leitura que acolhe sua historia antes de orientar seus proximos passos.</h2>
          <p>
            A Ars Akasha une simbolos, perguntas profundas e caminhos
            espirituais para transformar dados essenciais em clareza, direcao e
            uma entrega feita com cuidado.
          </p>
        </div>
      </section>
    </>
  );
}
