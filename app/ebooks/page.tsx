import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { freeEbooks } from "@/data/catalog";

export const metadata: Metadata = {
  title: "E-books gratuitos | Ars Akasha",
  description:
    "Biblioteca gratuita da Ars Akasha com e-books sobre espiritualidade, orixás, anjos, Odus, mediunidade e autoconhecimento."
};

export default function EbooksPage() {
  return (
    <>
      <section className="page-title library-title">
        <div className="container">
          <span className="eyebrow">biblioteca aberta</span>
          <h1>E-books gratuitos</h1>
          <p>
            Conhecimento para ler com calma, guardar e retomar quando uma
            pergunta pedir mais profundidade. Escolha um título e comece pelo
            tema que conversa com o seu momento.
          </p>
          <div className="library-count" aria-label={`${freeEbooks.length} títulos disponíveis`}>
            <strong>{freeEbooks.length}</strong>
            <span>títulos disponíveis gratuitamente</span>
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
