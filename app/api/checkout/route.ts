import { NextRequest, NextResponse } from "next/server";
import { siteUrl, stripePriceIds, stripeProducts } from "@/lib/env";
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
  const price = stripePriceIds.estudoPersonalizado;
  const metadata = Object.fromEntries(
    metadataFields.map((field) => [field, readField(formData, field).slice(0, 500)])
  );

  const lineItem = price
    ? {
        price,
        quantity: 1
      }
    : {
        price_data: {
          currency: "brl",
          unit_amount: stripeProducts.estudoPersonalizadoAmount,
          product_data: {
            name: stripeProducts.estudoPersonalizadoName,
            description:
              "Estudo preparado com dados de nascimento, pergunta principal e orientacao espiritual."
          }
        },
        quantity: 1
      };

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [lineItem],
    customer_email: email || undefined,
    client_reference_id: email || undefined,
    metadata,
    success_url: `${siteUrl}/obrigado?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/estudos-personalizados`
  });

  if (!session.url) {
    return NextResponse.json(
      { error: "Nao foi possivel criar a sessao de checkout." },
      { status: 500 }
    );
  }

  return NextResponse.redirect(session.url, { status: 303 });
}
