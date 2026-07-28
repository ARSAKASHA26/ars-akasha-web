import Image from "next/image";
import Link from "next/link";
import { personalizedStudies } from "@/data/catalog";

const featuredStudyIds = [
  "descubra-seu-anjo-da-guarda",
  "a-sua-roda-de-samsara",
  "feridas-da-alma"
];

const featuredStudies = personalizedStudies.filter((study) =>
  featuredStudyIds.includes(study.id)
);

const preparationSteps = [
  {
    number: "01",
    title: "Escolha o estudo",
    body: "Veja as propostas com calma e escolha a que mais se aproxima do que você vive hoje."
  },
  {
    number: "02",
    title: "Conte a sua história",
    body: "Você informa seus dados uma única vez e compartilha a pergunta que deseja compreender."
  },
  {
    number: "03",
    title: "Receba a sua entrega",
    body: "O estudo é preparado individualmente e fica disponível em PDF na sua área do cliente."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="brand-hero" aria-label="Ars Akasha - Biblioteca da Alma">
        <Image
          alt="Ars Akasha, a Biblioteca da Alma: estudos herméticos para autoconhecimento, propósito e evolução espiritual"
          height={633}
          priority
          sizes="100vw"
          src="/assets/biblioteca-da-alma-hero.jpeg"
          width={1600}
        />
      </section>

      <section className="home-opening">
        <div className="container home-opening-grid">
          <div className="home-opening-copy">
            <span className="eyebrow">Ars Akasha | Biblioteca da Alma</span>
            <h1>Estudos personalizados que começam com a sua história.</h1>
            <p>
              Há momentos em que não falta resposta: falta compreender o que
              está se repetindo, o que pede cuidado e qual caminho pode ser
              visto com mais clareza. É a partir desse encontro que cada estudo
              da Ars Akasha começa.
            </p>
            <div className="actions">
              <Link className="button primary" href="/estudos-personalizados">
                Conhecer os estudos
              </Link>
              <a className="text-link" href="#como-funciona">
                Entender como funciona
              </a>
            </div>
          </div>
          <div className="home-proof" aria-label="Experiência Ars Akasha">
            <strong>Mais de 1.000</strong>
            <span>estudos realizados desde 2020</span>
            <p>
              Cada entrega nasce dos dados, da pergunta e do momento de uma
              pessoa. Não é um texto igual para todos.
            </p>
          </div>
        </div>
      </section>

      <section className="section home-about" id="conhecer">
        <div className="container home-about-grid">
          <div>
            <span className="eyebrow">O que é a Ars Akasha</span>
            <h2>Uma biblioteca viva para quem deseja se conhecer com profundidade.</h2>
          </div>
          <div className="home-about-copy">
            <p>
              A Ars Akasha reúne conhecimento hermético, leitura simbólica e
              escuta para transformar informações dispersas em um estudo que
              faça sentido para a vida real.
            </p>
            <p>
              Aqui você pode aprofundar uma questão pessoal, estudar no seu
              ritmo ou começar por uma leitura breve antes de seguir adiante.
            </p>
          </div>
        </div>
      </section>

      <section className="section home-paths">
        <div className="container section-heading compact-heading">
          <span className="eyebrow">Escolha o seu caminho</span>
          <h2>Três formas de entrar na Biblioteca da Alma.</h2>
          <p>
            Cada espaço tem uma função clara. Você escolhe somente o que faz
            sentido agora.
          </p>
        </div>

        <div className="container home-path-grid">
          <Link className="home-path-card featured" href="/estudos-personalizados">
            <span className="path-number">01</span>
            <span className="eyebrow">Feito para você</span>
            <h3>Estudos personalizados</h3>
            <p>
              Dossiês preparados a partir da sua história, dos seus dados e da
              pergunta que trouxe você até aqui.
            </p>
            <strong>Conhecer estudos</strong>
          </Link>

          <Link className="home-path-card" href="/ebooks">
            <span className="path-number">02</span>
            <span className="eyebrow">Biblioteca gratuita</span>
            <h3>E-books gratuitos</h3>
            <p>
              Dezenove leituras para aprofundar temas da Ars Akasha com calma,
              sem cadastro e no seu próprio ritmo.
            </p>
            <strong>Explorar e-books gratuitos</strong>
          </Link>

          <article className="home-path-card upcoming">
            <span className="path-number">03</span>
            <span className="eyebrow">Em preparação</span>
            <h3>Oráculos e tiragens</h3>
            <p>
              Um espaço para cartas, mensagens e caminhos em momentos de
              escolha, proteção, relacionamentos e direção espiritual.
            </p>
            <strong>Em breve no site</strong>
          </article>
        </div>
      </section>

      <section className="section home-featured">
        <div className="container featured-heading">
          <div className="section-heading compact-heading">
            <span className="eyebrow">Alguns caminhos disponíveis</span>
            <h2>Comece pela pergunta que mais pede atenção.</h2>
          </div>
          <Link className="text-link" href="/estudos-personalizados">
            Ver todos os estudos
          </Link>
        </div>

        <div className="container home-study-grid">
          {featuredStudies.map((study) => (
            <article className="home-study-card" key={study.id}>
              <div className="home-study-meta">
                <span>{study.badge}</span>
                <strong>{study.priceLabel}</strong>
              </div>
              <h3>{study.name}</h3>
              <p>{study.summary}</p>
              <ul>
                {study.features.slice(0, 3).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link
                className="button secondary"
                href={`/estudos-personalizados?estudo=${study.id}#pedido`}
              >
                Conhecer este estudo
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section home-process" id="como-funciona">
        <div className="container section-heading compact-heading">
          <span className="eyebrow">Como funciona</span>
          <h2>Um processo simples, do seu jeito e no seu tempo.</h2>
        </div>
        <div className="container process-steps">
          {preparationSteps.map((step) => (
            <article className="process-step" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-free-entry">
        <div className="container home-free-grid">
          <div>
            <span className="eyebrow">Sua primeira experiência</span>
            <h2>Conheça a linguagem da Ars Akasha antes de escolher um estudo.</h2>
            <p>
              A leitura gratuita revela sinais iniciais do seu caminho e ajuda
              você a sentir se deseja aprofundar essa conversa.
            </p>
          </div>
          <Link className="button primary" href="/leitura-gratuita">
            Fazer minha leitura gratuita
          </Link>
        </div>
      </section>
    </>
  );
}
