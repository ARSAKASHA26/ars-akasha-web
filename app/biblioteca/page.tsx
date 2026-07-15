import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { updateProfile } from "./actions";

export const metadata: Metadata = {
  title: "Minha Biblioteca da Alma | Ars Akasha",
  description: "Leituras, estudos e registros pessoais guardados na Ars Akasha."
};

type LibraryPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function LibraryPage({ searchParams }: LibraryPageProps) {
  if (!isSupabaseConfigured()) {
    redirect("/entrar?erro=indisponivel");
  }

  const params = await searchParams;
  const supabase = await createSupabaseServerClient();
  const { data: claimsData } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;

  if (!userId) {
    redirect("/entrar");
  }

  const [profileResult, readingsResult, ordersResult, itemsResult] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", userId).maybeSingle(),
    supabase.from("free_readings").select("id, created_at").order("created_at", { ascending: false }),
    supabase.from("study_orders").select("id, study_name, status, created_at").order("created_at", { ascending: false }),
    supabase.from("library_items").select("id, title, description, item_type, status, storage_path, created_at").order("created_at", { ascending: false })
  ]);

  const profile = profileResult.data;
  const readings = readingsResult.data ?? [];
  const orders = ordersResult.data ?? [];
  const items = itemsResult.data ?? [];

  return (
    <>
      <section className="page-title account-title">
        <div className="container library-heading">
          <div>
            <span className="eyebrow">seu espaço reservado</span>
            <h1>Biblioteca da Alma</h1>
            <p>
              {profile?.full_name
                ? `${profile.full_name}, aqui ficam os registros que acompanham sua jornada.`
                : "Aqui ficam os registros que acompanham sua jornada."}
            </p>
          </div>
          <form action="/auth/sair" method="POST">
            <button className="button light" type="submit">Sair</button>
          </form>
        </div>
      </section>

      <section className="library-overview">
        <div className="container library-stats" aria-label="Resumo da biblioteca">
          <span><strong>{readings.length}</strong> leituras salvas</span>
          <span><strong>{orders.length}</strong> pedidos</span>
          <span><strong>{items.length}</strong> entregas disponíveis</span>
        </div>
      </section>

      <section className="section">
        <div className="container library-sections">
          <section className="library-section">
            <div className="library-section-heading">
              <div>
                <span className="eyebrow">seus registros</span>
                <h2>Leituras e estudos</h2>
              </div>
              <Link href="/leitura-gratuita">Fazer uma leitura gratuita</Link>
            </div>

            {items.length || orders.length || readings.length ? (
              <div className="library-items">
                {items.map((item) => (
                  <article className="library-item" key={item.id}>
                    <span className="eyebrow">{item.item_type === "study" ? "estudo" : "leitura"}</span>
                    <h3>{item.title}</h3>
                    {item.description ? <p>{item.description}</p> : null}
                    <strong>{item.status === "available" ? "Disponível" : "Em preparação"}</strong>
                  </article>
                ))}
                {orders.map((order) => (
                  <article className="library-item" key={order.id}>
                    <span className="eyebrow">pedido</span>
                    <h3>{order.study_name}</h3>
                    <strong>{order.status === "paid" ? "Pagamento confirmado" : "Em acompanhamento"}</strong>
                  </article>
                ))}
              </div>
            ) : (
              <div className="library-empty">
                <h3>Sua biblioteca começa com o primeiro registro.</h3>
                <p>
                  Quando você guardar uma leitura ou solicitar um estudo, ele
                  aparecerá aqui.
                </p>
                <Link className="button primary" href="/leitura-gratuita">
                  Conhecer meus primeiros sinais
                </Link>
              </div>
            )}
          </section>

          <section className="library-section" id="meus-dados">
            <div className="library-section-heading">
              <div>
                <span className="eyebrow">cadastro pessoal</span>
                <h2>Meus dados</h2>
              </div>
            </div>

            <form className="profile-form" action={updateProfile}>
              {params.salvo === "1" ? (
                <p className="form-success" role="status">Seus dados foram guardados.</p>
              ) : null}
              {params.erro ? (
                <p className="form-error" role="alert">
                  Confira o consentimento e tente salvar novamente.
                </p>
              ) : null}

              <div className="form-grid two">
                <label className="field">
                  <span>Nome completo</span>
                  <input name="full_name" type="text" defaultValue={profile?.full_name ?? ""} />
                </label>
                <label className="field">
                  <span>E-mail</span>
                  <input type="email" value={profile?.email ?? ""} disabled />
                </label>
                <label className="field">
                  <span>WhatsApp</span>
                  <input name="whatsapp" type="tel" defaultValue={profile?.whatsapp ?? ""} />
                </label>
              </div>

              <div className="form-grid three">
                <label className="field">
                  <span>Data de nascimento</span>
                  <input name="birth_date" type="date" defaultValue={profile?.birth_date ?? ""} />
                </label>
                <label className="field">
                  <span>Hora de nascimento</span>
                  <input name="birth_time" type="time" defaultValue={profile?.birth_time?.slice(0, 5) ?? ""} />
                </label>
                <label className="field">
                  <span>Cidade onde nasceu</span>
                  <input name="birth_city" type="text" defaultValue={profile?.birth_city ?? ""} />
                </label>
                <label className="field">
                  <span>Estado</span>
                  <input name="birth_state" type="text" defaultValue={profile?.birth_state ?? ""} />
                </label>
                <label className="field">
                  <span>País</span>
                  <input name="birth_country" type="text" defaultValue={profile?.birth_country ?? "Brasil"} />
                </label>
              </div>

              <label className="consent-box compact-consent">
                <input name="personalized_consent" type="checkbox" required />
                <span>
                  Autorizo o uso destes dados somente para minhas leituras,
                  estudos e atendimento, conforme o <Link href="/privacidade">Aviso de Privacidade</Link>.
                </span>
              </label>

              <button className="button primary" type="submit">Guardar meus dados</button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}
