import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPaidEbookById, paidEbooks } from "@/data/catalog";

type PaidEbookPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return paidEbooks.map((ebook) => ({ slug: ebook.id }));
}

export async function generateMetadata({
  params
}: PaidEbookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const ebook = getPaidEbookById(slug);

  if (!ebook) {
    return {};
  }

  return {
    title: ebook.name,
    description: ebook.summary,
    authors: [{ name: ebook.author }],
    category: ebook.category,
    openGraph: {
      title: ebook.name,
      description: ebook.summary,
      type: "book",
      images: [{ url: ebook.coverPath, alt: `Capa de ${ebook.name}` }]
    }
  };
}

export default async function PaidEbookPage({ params }: PaidEbookPageProps) {
  const { slug } = await params;
  const ebook = getPaidEbookById(slug);

  if (!ebook) {
    notFound();
  }

  const whatsappNumber = (
    process.env.ARS_AKASHA_WHATSAPP_NUMBER ?? "5544997038883"
  ).replace(/\D/g, "");
  const whatsappMessage = encodeURIComponent(
    `Olá! Quero pedir o e-book ${ebook.name}, de ${ebook.author}, no valor de ${ebook.priceLabel}.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <section className="page-title paid-ebook-title">
        <div className="container paid-ebook-hero">
          <div className="paid-ebook-cover">
            <Image
              src={ebook.coverPath}
              alt={`Capa do e-book ${ebook.name}`}
              fill
              priority
              sizes="(max-width: 760px) 88vw, 390px"
            />
          </div>

          <div className="paid-ebook-intro">
            <span className="eyebrow">{ebook.category}</span>
            <h1>{ebook.name}</h1>
            <p className="paid-ebook-subtitle">{ebook.subtitle}</p>
            <p className="paid-ebook-author">Por {ebook.author}</p>
            <strong className="paid-ebook-price">{ebook.priceLabel}</strong>
            <p>{ebook.summary}</p>

            <a
              className="button primary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Pedir pelo WhatsApp
            </a>

            <small className="paid-ebook-delivery">
              O atendimento confirma o pedido, orienta o pagamento e realiza a
              entrega do PDF.
            </small>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container paid-ebook-content">
          <div>
            <span className="eyebrow">o que você encontrará</span>
            <h2>{ebook.subtitle}</h2>
            <p>{ebook.summary}</p>
          </div>
          <ul className="quiet-list">
            {ebook.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
