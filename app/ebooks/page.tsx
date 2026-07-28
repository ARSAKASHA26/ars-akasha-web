import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { freeEbooks } from "@/data/catalog";

export const metadata: Metadata = {
  title: "E-books gratuitos | Ars Akasha",
  description:
    "E-books gratuitos da Ars Akasha sobre espiritualidade, autoconhecimento e tradições herméticas para ler ou baixar livremente."
};

export default function EbooksPage() {
  return (
    <>
      <section className="page-title library-title">
        <div className="container">
          <span className="eyebrow">Biblioteca da Alma</span>
          <h1>E-books gratuitos</h1>
          <p>
            Leituras para guardar, retomar e aprofundar quando uma pergunta
            pedir mais consciência.
          </p>
          <div
            className="library-count"
            aria-label={`${freeEbooks.length} títulos gratuitos`}
          >
            <strong>{freeEbooks.length}</strong>
            <span>títulos gratuitos disponíveis</span>
          </div>
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
          <span className="eyebrow">continue aprofundando</span>
          <h2>Conheça também os e-books pagos da Ars Akasha.</h2>
          <p>
            Obras autorais mais extensas, preparadas para quem deseja estudar
            cada tema com mais profundidade e aplicação consciente.
          </p>
          <Link className="button primary" href="/ebooks-pagos">
            Ver e-books pagos
          </Link>
        </div>
      </section>
    </>
  );
}
