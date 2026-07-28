import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { paidEbooks } from "@/data/catalog";

export const metadata: Metadata = {
  title: "E-books pagos | Ars Akasha",
  description:
    "E-books premium e estudos autorais da Ars Akasha sobre espiritualidade, prosperidade consciente, autoconhecimento e tradições herméticas."
};

export default function PaidEbooksPage() {
  return (
    <>
      <section className="page-title library-title paid-library-title">
        <div className="container">
          <span className="eyebrow">Ebooks Premium</span>
          <h1>E-books pagos</h1>
          <p>
            Obras autorais completas para aprofundar temas espirituais,
            simbólicos e práticos com calma, responsabilidade e consciência.
          </p>
          <div
            className="library-count"
            aria-label={`${paidEbooks.length} títulos pagos`}
          >
            <strong>{paidEbooks.length}</strong>
            <span>títulos premium disponíveis</span>
          </div>
        </div>
      </section>

      <section className="section premium-library">
        <div className="container section-heading">
          <span className="eyebrow">Escolha o seu estudo</span>
          <h2>Conhecimento autoral para guardar e aprofundar.</h2>
          <p>
            Cada e-book possui uma página própria com apresentação, valor e
            pedido direto pelo WhatsApp.
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

      <section className="section closing-cta">
        <div className="container cta-panel library-cta">
          <span className="eyebrow">outras formas de conhecer</span>
          <h2>Procura uma leitura aberta e gratuita?</h2>
          <p>
            A biblioteca gratuita reúne materiais para leitura no navegador ou
            download, sem pagamento e sem cadastro.
          </p>
          <Link className="button primary" href="/ebooks">
            Ver e-books gratuitos
          </Link>
        </div>
      </section>
    </>
  );
}
