import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ars Akasha",
  description:
    "Leituras simbólicas, estudos personalizados e biblioteca espiritual da Ars Akasha."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="site-shell">
          <aside className="site-sidebar" aria-label="Resumo Ars Akasha">
            <Link className="brand sidebar-brand" href="/">
              <img src="/assets/ars-akasha-logo.jpeg" alt="" />
              <span>
                <strong>Ars Akasha</strong>
                <small>Biblioteca viva</small>
              </span>
            </Link>
            <section className="sidebar-public">
              <p className="eyebrow">Biblioteca viva</p>
              <h2>Conhecer. Transformar. Transcender.</h2>
              <p>
                Um espaço para leituras, estudos e sinais que ajudam a
                compreender caminho, proteção, propósito e evolução.
              </p>
              <div className="sidebar-highlight">
                <strong>Primeiro caminho</strong>
                <span>
                  Comece com calma, entenda a linguagem e avance para estudos
                  mais profundos.
                </span>
              </div>
              <div className="sidebar-store">
                <img src="/assets/akasha-mistica.jpeg" alt="" />
                <div>
                  <strong>Akasha Mística</strong>
                  <span>Produtos, leituras e estudos no mesmo ecossistema.</span>
                </div>
              </div>
            </section>
          </aside>

          <div className="content-shell">
            <header className="site-header">
              <nav className="nav" aria-label="Navegação principal">
                <Link className="brand" href="/">
                  <strong>Ars Akasha</strong>
                  <span>Biblioteca da Alma</span>
                </Link>
                <div className="nav-links">
                  <Link href="/leitura-gratuita">Leitura gratuita</Link>
                  <Link href="/estudos-personalizados">Estudos</Link>
                  <Link href="/ebooks">E-books gratuitos</Link>
                  <Link href="/entrar">Minha biblioteca</Link>
                </div>
              </nav>
            </header>
            <main className="main">{children}</main>
            <footer className="site-footer">
              <div className="container">
                <span>Ars Akasha | Biblioteca da Alma</span>
                <span>
                  <Link href="/privacidade">Privacidade</Link> | Estrutura
                  protegida por Vercel, Stripe e Supabase.
                </span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
