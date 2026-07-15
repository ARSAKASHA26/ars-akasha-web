export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const stripePriceIds = {
  estudoPersonalizado: process.env.STRIPE_PRICE_ESTUDO_PERSONALIZADO
};

export const stripeProducts = {
  estudoPersonalizadoAmount:
    Number(process.env.STRIPE_ESTUDO_PERSONALIZADO_VALOR_CENTAVOS) || 29700,
  estudoPersonalizadoName:
    process.env.STRIPE_ESTUDO_PERSONALIZADO_NOME ??
    "Estudo personalizado Ars Akasha"
};

export const supabaseConfig = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  publishableKey:
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  secretKey: process.env.SUPABASE_SECRET_KEY
};

export function isSupabaseConfigured() {
  return Boolean(supabaseConfig.url && supabaseConfig.publishableKey);
}
