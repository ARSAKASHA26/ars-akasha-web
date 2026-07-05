import Link from "next/link";

export default function LeituraGratuitaPage() {
  return (
    <>
      <section className="page-title">
        <div className="container">
          <span className="eyebrow">porta de entrada</span>
          <h1>Leitura gratuita</h1>
          <p>
            Uma primeira leitura para acolher a pergunta do visitante e
            transformar curiosidade em direcao clara.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container text-block">
          <h2>O que esta leitura pode entregar</h2>
          <p>
            A proposta inicial e receber dados essenciais e uma pergunta
            principal. Depois, a experiencia pode evoluir para automacao,
            captura de lead, envio por e-mail e convite para um estudo pago.
          </p>
          <ul className="feature-list">
            <li>Campo preparado para formulario de nascimento e intencao.</li>
            <li>Jornada natural para recomendar estudos personalizados.</li>
            <li>Espaco futuro para salvar a leitura na biblioteca do cliente.</li>
          </ul>
          <div className="actions" style={{ marginTop: 28 }}>
            <Link className="button primary" href="/estudos-personalizados">
              Conhecer estudos
            </Link>
            <Link className="button light" href="/">
              Voltar ao inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
