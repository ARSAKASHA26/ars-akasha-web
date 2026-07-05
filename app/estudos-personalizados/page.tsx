import Link from "next/link";

const items = [
  "Mapa simbolico individual com camadas espirituais e astrologicas.",
  "Dossie em PDF com linguagem consultiva e orientacoes praticas.",
  "Possibilidade futura de entrega dentro da biblioteca do cliente."
];

export default function EstudosPersonalizadosPage() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="eyebrow">servico principal</span>
          <h1>Estudos personalizados</h1>
          <p>
            Leituras profundas para clientes que desejam um estudo produzido a
            partir da propria historia, perguntas e ciclos de vida.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid">
          <article className="card">
            <h2>Estudo completo</h2>
            <p>
              Uma entrega autoral, preparada para ser vendida pelo Stripe e
              posteriormente vinculada ao cadastro do cliente no Supabase.
            </p>
          </article>
          <article className="card">
            <h2>Fluxo de compra</h2>
            <p>
              A pagina de checkout ja aponta para uma API que cria sessoes do
              Stripe Checkout quando as chaves forem configuradas.
            </p>
          </article>
          <article className="card">
            <h2>Entrega futura</h2>
            <p>
              O webhook do Stripe esta separado para registrar pagamentos e
              liberar conteudos quando o banco estiver ativo.
            </p>
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="container text-block">
          <h2>Incluido no primeiro produto</h2>
          <ul className="feature-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="actions" style={{ marginTop: 28 }}>
            <Link className="button primary" href="/checkout">
              Ir para checkout
            </Link>
            <Link className="button light" href="/leitura-gratuita">
              Ver leitura gratuita
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
