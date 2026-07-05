import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ars Akasha",
  description:
    "Leituras simbolicas, estudos personalizados e biblioteca espiritual da Ars Akasha."
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
          <header className="site-header">
            <nav className="nav" aria-label="Navegacao principal">
              <Link className="brand" href="/">
                <strong>Ars Akasha</strong>
                <span>Mapas, leituras e estudos</span>
              </Link>
              <div className="nav-links">
                <Link href="/leitura-gratuita">Leitura gratuita</Link>
                <Link href="/estudos-personalizados">Estudos</Link>
                <Link href="/checkout">Checkout</Link>
              </div>
            </nav>
          </header>
          <main className="main">{children}</main>
          <footer className="site-footer">
            <div className="container">
              <span>Ars Akasha</span>
              <span>Preparado para Vercel, Stripe e Supabase.</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
