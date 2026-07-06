import Link from "next/link";

export default function CheckoutPage() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="eyebrow">pagamento seguro</span>
          <h1>Checkout</h1>
          <p>
            O pagamento do estudo personalizado comeca pelo formulario
            completo, para reunir nascimento, contato e pergunta antes do
            pagamento seguro.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="checkout-panel">
            <span className="eyebrow">estudo personalizado</span>
            <h2>Comece pelo pedido completo</h2>
            <p>
              Assim os dados essenciais do estudo chegam organizados antes da
              cobranca, preservando o cuidado da leitura desde o primeiro
              passo.
            </p>
            <p className="price">R$ 297</p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link className="button primary" href="/estudos-personalizados#pedido">
                Preencher dados do estudo
              </Link>
              <Link className="button light" href="/leitura-gratuita">
                Ver leitura gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
