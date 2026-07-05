import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    return NextResponse.json(
      { error: "STRIPE_WEBHOOK_SECRET nao configurado." },
      { status: 500 }
    );
  }

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Assinatura Stripe ausente." },
      { status: 400 }
    );
  }

  const rawBody = await request.text();
  const stripe = getStripe();

  try {
    const event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret
    );

    if (event.type === "checkout.session.completed") {
      // Futuro: registrar pedido pago no Supabase e liberar biblioteca.
      const session = event.data.object;
      console.info("Checkout concluido:", session.id);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro desconhecido no webhook.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
