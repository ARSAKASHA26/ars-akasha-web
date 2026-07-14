import { NextRequest, NextResponse } from "next/server";
import { getPersonalizedStudyById } from "@/data/catalog";
import { siteUrl } from "@/lib/env";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

const metadataFields = [
  "name",
  "email",
  "whatsapp",
  "birth_date",
  "birth_time",
  "birth_city",
  "birth_state",
  "birth_country",
  "study_id",
  "study_focus",
  "main_question"
] as const;

function readField(formData: FormData, field: string) {
  return String(formData.get(field) ?? "").trim();
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = readField(formData, "email");
  const name = readField(formData, "name");
  const whatsapp = readField(formData, "whatsapp");
  const study = getPersonalizedStudyById(readField(formData, "study_id"));

  if (!study || !name || !email || !whatsapp || !readField(formData, "consent")) {
    return NextResponse.json(
      { error: "Confira os dados do pedido e tente novamente." },
      { status: 400 }
    );
  }

  const metadata = Object.fromEntries(
    metadataFields.map((field) => [field, readField(formData, field).slice(0, 500)])
  );

  if (!process.env.STRIPE_SECRET_KEY) {
    const phone = (process.env.ARS_AKASHA_WHATSAPP_NUMBER || "5544997038883").replace(
      /\D/g,
      ""
    );
    const message = [
      `Olá! Meu nome é ${name}.`,
      `Quero solicitar o estudo ${study.name} (${study.priceLabel}).`,
      `Meu WhatsApp é ${whatsapp}.`,
      "Preenchi meus dados no site da Ars Akasha e gostaria de continuar o atendimento."
    ].join(" ");

    return NextResponse.redirect(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      { status: 303 }
    );
  }

  const lineItem = {
    price_data: {
      currency: "brl",
      unit_amount: study.priceInCents,
      product_data: {
        name: study.name,
        description:
          "Estudo personalizado preparado a partir dos dados e da pergunta do cliente."
      }
    },
    quantity: 1
  };

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [lineItem],
    customer_email: email,
    client_reference_id: email,
    metadata: {
      ...metadata,
      study_name: study.name,
      study_price: study.priceLabel
    },
    success_url: `${siteUrl}/obrigado?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/estudos-personalizados?estudo=${study.id}#pedido`
  });

  if (!session.url) {
    return NextResponse.json(
      { error: "Não foi possível iniciar o pagamento." },
      { status: 500 }
    );
  }

  return NextResponse.redirect(session.url, { status: 303 });
}
