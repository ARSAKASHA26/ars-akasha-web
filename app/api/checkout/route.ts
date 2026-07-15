import { NextRequest, NextResponse } from "next/server";
import { getPersonalizedStudyById } from "@/data/catalog";
import { siteUrl } from "@/lib/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { getStripe } from "@/lib/stripe";

export const runtime = "nodejs";

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

  const supabaseAdmin = createSupabaseAdminClient();
  let customerRequestId: string | null = null;

  if (supabaseAdmin) {
    const { data, error } = await supabaseAdmin
      .from("customer_requests")
      .insert({
        study_id: study.id,
        study_name: study.name,
        amount_in_cents: study.priceInCents,
        full_name: name.slice(0, 200),
        email: email.slice(0, 320),
        whatsapp: whatsapp.slice(0, 40),
        birth_date: readField(formData, "birth_date") || null,
        birth_time: readField(formData, "birth_time") || null,
        birth_city: readField(formData, "birth_city").slice(0, 160) || null,
        birth_state: readField(formData, "birth_state").slice(0, 120) || null,
        birth_country: readField(formData, "birth_country").slice(0, 120) || null,
        main_question: readField(formData, "main_question").slice(0, 5000) || null,
        consent_version: readField(formData, "consent_version") || "2026-07-14"
      })
      .select("id")
      .single();

    if (error) {
      console.error("Falha ao registrar pedido no Supabase:", error.message);
    } else {
      customerRequestId = data.id;
    }
  }

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
      study_id: study.id,
      study_name: study.name,
      customer_request_id: customerRequestId ?? "not-recorded"
    },
    success_url: `${siteUrl}/obrigado?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/estudos-personalizados?estudo=${study.id}#pedido`
  });

  if (supabaseAdmin && customerRequestId) {
    const { error } = await supabaseAdmin
      .from("customer_requests")
      .update({ stripe_session_id: session.id })
      .eq("id", customerRequestId);

    if (error) {
      console.error("Falha ao vincular pagamento ao pedido:", error.message);
    }
  }

  if (!session.url) {
    return NextResponse.json(
      { error: "Não foi possível iniciar o pagamento." },
      { status: 500 }
    );
  }

  return NextResponse.redirect(session.url, { status: 303 });
}
