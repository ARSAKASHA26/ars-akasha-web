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
            Seu pedido foi recebido. Em breve, esta pagina podera mostrar o
            andamento da entrega e abrir acesso aos estudos guardados na sua
            Biblioteca da Alma.
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
