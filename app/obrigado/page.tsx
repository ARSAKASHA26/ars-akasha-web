import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="eyebrow">pedido recebido</span>
          <h1>Obrigado</h1>
          <p>
            O pagamento foi iniciado ou confirmado. O proximo passo e preparar
            a entrega do estudo personalizado.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <h2>Proximos passos</h2>
          <p>
            Quando o Stripe estiver ativo, esta pagina podera receber o
            identificador da sessao e mostrar o status do pedido. Com Supabase,
            tambem podera liberar acesso a biblioteca do cliente.
          </p>
          <div className="actions" style={{ marginTop: 28 }}>
            <Link className="button primary" href="/">
              Voltar ao inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
