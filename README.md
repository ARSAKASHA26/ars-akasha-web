# Ars Akasha Web

Aplicacao inicial em Next.js para o dominio `arsakasha.com`, preparada para deploy na Vercel, checkout com Stripe e futura area do cliente com Supabase.

## Rodar localmente

```bash
npm install
npm run dev
```

Crie um arquivo `.env.local` a partir de `.env.example` antes de testar checkout ou Supabase.

## Rotas

- `/` pagina inicial
- `/leitura-gratuita` leitura gratuita
- `/estudos-personalizados` oferta de estudos personalizados
- `/checkout` inicio do pagamento
- `/obrigado` retorno apos pagamento
- `/api/checkout` cria uma Stripe Checkout Session
- `/api/stripe/webhook` ponto inicial para eventos Stripe

## Proximos passos para producao

1. Criar o repositorio no GitHub e conectar na Vercel.
2. Apontar `arsakasha.com` para a Vercel pelo painel da Namecheap.
3. Criar produtos e precos no Stripe e preencher `STRIPE_PRICE_ESTUDO_PERSONALIZADO`.
4. Configurar `NEXT_PUBLIC_SITE_URL=https://arsakasha.com` na Vercel.
5. Criar o projeto Supabase quando a area do cliente e biblioteca forem implementadas.
