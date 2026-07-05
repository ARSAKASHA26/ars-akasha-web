export default function CheckoutPage() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="eyebrow">pagamento seguro</span>
          <h1>Checkout</h1>
          <p>
            Esta pagina esta pronta para enviar o cliente ao Stripe Checkout
            quando o produto e as chaves forem configurados.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="checkout-panel">
            <span className="eyebrow">estudo personalizado</span>
            <h2>Estudo Ars Akasha</h2>
            <p>
              Pagamento processado pelo Stripe. Apos a confirmacao, o cliente
              retorna para a pagina de obrigado.
            </p>
            <p className="price">R$ 297</p>
            <form action="/api/checkout" method="POST">
              <div className="field">
                <label htmlFor="name">Nome</label>
                <input id="name" name="name" placeholder="Nome do cliente" />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  placeholder="cliente@email.com"
                  type="email"
                />
              </div>
              <button className="button primary" type="submit">
                Pagar com Stripe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
