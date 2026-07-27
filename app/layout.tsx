import type { Metadata } from "next";
import Link from "next/link";
import { isSupabaseConfigured, siteUrl } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ars Akasha",
  description:
    "Leituras simbólicas, estudos personalizados e biblioteca espiritual da Ars Akasha.",
  icons: {
    icon: "/assets/favicon-192.png",
    shortcut: "/assets/favicon-192.png",
    apple: "/assets/favicon-192.png"
  }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  let isAuthenticated = false;

  if (isSupabaseConfigured()) {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getClaims();
    isAuthenticated = Boolean(data?.claims?.sub);
  }

  return (
    <html lang="pt-BR">
      <body>
        <div className="site-shell">
          <div className="content-shell">
            <header className="site-header">
              <nav className="nav" aria-label="Navegação principal">
                <Link className="brand header-brand" href="/">
                  <img src="/assets/ars-akasha-logo.jpeg" alt="" />
                  <span className="brand-text">
                    <strong>Ars Akasha</strong>
                    <small>Biblioteca da Alma</small>
                  </span>
                </Link>
                <div className="nav-links">
                  <Link href="/estudos-personalizados">Estudos</Link>
                  <Link href="/ebooks">E-books</Link>
                  <Link href="/leitura-gratuita">Leitura gratuita</Link>
                  <Link
                    className="nav-account"
                    href={isAuthenticated ? "/biblioteca" : "/entrar"}
                  >
                    {isAuthenticated ? "Área do cliente" : "Entrar"}
                  </Link>
                </div>
              </nav>
            </header>
            <main className="main">{children}</main>
            <footer className="site-footer">
              <div className="container">
                <span>Ars Akasha | Biblioteca da Alma</span>
                <span>
                  <Link href="/privacidade">Privacidade</Link> | Tecnologia
                  apoiada por Vercel e Supabase.
                </span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
