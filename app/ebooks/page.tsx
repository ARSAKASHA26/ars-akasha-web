import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { freeEbooks, paidEbooks } from "@/data/catalog";

export const metadata: Metadata = {
  title: "E-books | Ars Akasha",
  description:
    "E-books premium e gratuitos da Ars Akasha sobre espiritualidade, prosperidade consciente, autoconhecimento e tradições herméticas."
};

export default function EbooksPage() {
  return (
    <>
      <section className="page-title library-title">
        <div className="container">
          <span className="eyebrow">Biblioteca da Alma</span>
          <h1>E-books</h1>
          <p>
            Estudos autorais e leituras gratuitas para guardar, retomar e
            aprofundar quando uma pergunta pedir mais consciência.
          </p>
          <div
            className="library-count"
            aria-label={`${freeEbooks.length} títulos gratuitos e ${paidEbooks.length} premium`}
          >
            <strong>{freeEbooks.length + paidEbooks.length}</strong>
            <span>títulos disponíveis na biblioteca</span>
          </div>
        </div>
      </section>

      <section className="section premium-library">
        <div className="container section-heading">
          <span className="eyebrow">Ebooks Premium</span>
          <h2>Estudos autorais para aprofundar a sua prática.</h2>
          <p>
            Obras completas da Ars Akasha, preparadas para leitura, estudo e
            aplicação consciente.
          </p>
        </div>

        <div className="container ebook-grid premium-ebook-grid">
          {paidEbooks.map((ebook) => (
            <article className="ebook-card premium-ebook-card" key={ebook.id}>
              <div className="ebook-cover">
                <Image
                  src={ebook.coverPath}
                  alt={`Capa do e-book ${ebook.name}`}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <span>{ebook.category}</span>
              </div>
              <div className="ebook-copy">
                <small>{ebook.author}</small>
                <h2>{ebook.name}</h2>
                <strong className="ebook-price">{ebook.priceLabel}</strong>
                <p>{ebook.summary}</p>
                <div className="ebook-actions single-action">
                  <Link
                    className="button primary"
                    href={`/ebooks/${ebook.id}`}
                  >
                    Conhecer o e-book
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <span className="eyebrow">escolha sua leitura</span>
          <h2>Uma biblioteca para diferentes momentos da vida espiritual.</h2>
          <p>
            Você pode ler no navegador ou baixar o PDF. Nenhum pagamento é
            necessário para acessar estes materiais.
          </p>
        </div>

        <div className="container ebook-grid">
          {freeEbooks.map((ebook) => (
            <article className="ebook-card" key={ebook.id}>
              <div className="ebook-cover">
                <Image
                  src={ebook.coverPath}
                  alt={`Capa do e-book ${ebook.name}`}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
                <span>Gratuito</span>
              </div>
              <div className="ebook-copy">
                <small>{ebook.badge}</small>
                <h2>{ebook.name}</h2>
                <p>{ebook.summary}</p>
                <div className="ebook-actions">
                  <a
                    className="button primary"
                    href={ebook.pdfPath}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ler agora
                  </a>
                  <a className="button light" href={ebook.pdfPath} download>
                    Baixar PDF
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section closing-cta">
        <div className="container cta-panel library-cta">
          <span className="eyebrow">quando a leitura pede algo pessoal</span>
          <h2>Um e-book apresenta o tema. Um estudo olha para a sua história.</h2>
          <p>
            Se você deseja compreender como uma dessas forças se relaciona com
            seus dados, escolhas e momento de vida, conheça os estudos
            personalizados da Ars Akasha.
          </p>
          <Link className="button primary" href="/estudos-personalizados">
            Conhecer os estudos
          </Link>
        </div>
      </section>
    </>
  );
}
