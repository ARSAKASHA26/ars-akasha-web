import Link from "next/link";

export default function CheckoutPage() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="eyebrow">pagamento seguro</span>
          <h1>Seu estudo começa pela escolha.</h1>
          <p>
            Cada estudo tem um valor e uma finalidade diferentes. Escolha
            primeiro o que deseja compreender e depois informe seus dados.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="checkout-panel">
            <span className="eyebrow">estudo personalizado</span>
            <h2>Conheça os estudos disponíveis</h2>
            <p>
              O formulário será aberto com o nome e o valor corretos. Assim
              seu pedido chega organizado desde o primeiro contato.
            </p>
            <div className="actions" style={{ marginTop: 24 }}>
              <Link className="button primary" href="/estudos-personalizados">
                Escolher meu estudo
              </Link>
              <Link className="button light" href="/ebooks-pagos">
                Ver e-books pagos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
