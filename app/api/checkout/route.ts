import { NextRequest, NextResponse } from "next/server";
import { siteUrl, stripePriceIds } from "@/lib/env";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = String(formData.get("email") ?? "");
  const name = String(formData.get("name") ?? "");
  const price = stripePriceIds.estudoPersonalizado;

  if (!price) {
    return NextResponse.json(
      { error: "STRIPE_PRICE_ESTUDO_PERSONALIZADO nao configurado." },
      { status: 500 }
    );
  }

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price,
        quantity: 1
      }
    ],
    customer_email: email || undefined,
    client_reference_id: email || undefined,
    metadata: {
      customer_name: name
    },
    success_url: `${siteUrl}/obrigado?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/checkout`
  });

  if (!session.url) {
    return NextResponse.json(
      { error: "Nao foi possivel criar a sessao de checkout." },
      { status: 500 }
    );
  }

  return NextResponse.redirect(session.url, { status: 303 });
}
