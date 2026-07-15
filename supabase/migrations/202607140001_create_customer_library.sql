create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  full_name text,
  whatsapp text,
  birth_date date,
  birth_time time,
  birth_city text,
  birth_state text,
  birth_country text default 'Brasil',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists profiles_email_unique
  on public.profiles (lower(email));

create table if not exists public.consents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  purpose text not null check (
    purpose in (
      'account',
      'personalized_services',
      'marketing_email',
      'marketing_whatsapp'
    )
  ),
  policy_version text not null,
  granted_at timestamptz not null default now(),
  revoked_at timestamptz,
  source text not null default 'website',
  unique (user_id, purpose, policy_version)
);

create table if not exists public.free_readings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  reading_version text not null,
  results jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.study_orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete set null,
  study_id text not null,
  study_name text not null,
  amount_in_cents integer not null check (amount_in_cents >= 0),
  currency text not null default 'brl',
  status text not null default 'pending' check (
    status in ('pending', 'paid', 'in_production', 'ready', 'delivered', 'cancelled')
  ),
  stripe_session_id text unique,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.library_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  order_id uuid references public.study_orders (id) on delete set null,
  item_type text not null check (item_type in ('free_reading', 'study', 'ebook')),
  title text not null,
  description text,
  storage_path text,
  status text not null default 'available' check (status in ('preparing', 'available', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Pedidos enviados antes do cadastro ficam privados e so podem ser acessados no servidor.
create table if not exists public.customer_requests (
  id uuid primary key default gen_random_uuid(),
  request_type text not null default 'personalized_study',
  study_id text not null,
  study_name text not null,
  amount_in_cents integer not null check (amount_in_cents >= 0),
  full_name text not null,
  email text not null,
  whatsapp text not null,
  birth_date date,
  birth_time time,
  birth_city text,
  birth_state text,
  birth_country text,
  main_question text,
  consent_version text not null,
  status text not null default 'received' check (
    status in ('received', 'contacted', 'converted', 'cancelled')
  ),
  stripe_session_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

drop trigger if exists study_orders_set_updated_at on public.study_orders;
create trigger study_orders_set_updated_at
  before update on public.study_orders
  for each row execute procedure public.set_updated_at();

drop trigger if exists library_items_set_updated_at on public.library_items;
create trigger library_items_set_updated_at
  before update on public.library_items
  for each row execute procedure public.set_updated_at();

drop trigger if exists customer_requests_set_updated_at on public.customer_requests;
create trigger customer_requests_set_updated_at
  before update on public.customer_requests
  for each row execute procedure public.set_updated_at();

create or replace function public.handle_auth_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    coalesce(new.email, ''),
    nullif(trim(new.raw_user_meta_data ->> 'full_name'), '')
  )
  on conflict (id) do update set
    email = excluded.email,
    full_name = coalesce(excluded.full_name, public.profiles.full_name),
    updated_at = now();

  if coalesce((new.raw_user_meta_data ->> 'privacy_accepted')::boolean, false) then
    insert into public.consents (user_id, purpose, policy_version, source)
    values (
      new.id,
      'account',
      coalesce(nullif(new.raw_user_meta_data ->> 'privacy_version', ''), '2026-07-14'),
      'website-login'
    )
    on conflict (user_id, purpose, policy_version) do nothing;
  end if;

  if coalesce((new.raw_user_meta_data ->> 'marketing_email')::boolean, false) then
    insert into public.consents (user_id, purpose, policy_version, source)
    values (
      new.id,
      'marketing_email',
      coalesce(nullif(new.raw_user_meta_data ->> 'privacy_version', ''), '2026-07-14'),
      'website-login'
    )
    on conflict (user_id, purpose, policy_version) do nothing;
  end if;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert or update of email, raw_user_meta_data on auth.users
  for each row execute procedure public.handle_auth_user();

alter table public.profiles enable row level security;
alter table public.consents enable row level security;
alter table public.free_readings enable row level security;
alter table public.study_orders enable row level security;
alter table public.library_items enable row level security;
alter table public.customer_requests enable row level security;

revoke all on public.profiles from anon, authenticated;
revoke all on public.consents from anon, authenticated;
revoke all on public.free_readings from anon, authenticated;
revoke all on public.study_orders from anon, authenticated;
revoke all on public.library_items from anon, authenticated;
revoke all on public.customer_requests from anon, authenticated;

grant select on public.profiles to authenticated;
grant update (full_name, whatsapp, birth_date, birth_time, birth_city, birth_state, birth_country)
  on public.profiles to authenticated;
grant select, insert on public.consents to authenticated;
grant update (revoked_at) on public.consents to authenticated;
grant select, insert, delete on public.free_readings to authenticated;
grant select on public.study_orders to authenticated;
grant select on public.library_items to authenticated;

drop policy if exists "Clients can read their profile" on public.profiles;
create policy "Clients can read their profile"
  on public.profiles for select
  to authenticated
  using ((select auth.uid()) = id);

drop policy if exists "Clients can update their profile" on public.profiles;
create policy "Clients can update their profile"
  on public.profiles for update
  to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

drop policy if exists "Clients can read their consents" on public.consents;
create policy "Clients can read their consents"
  on public.consents for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Clients can create their consents" on public.consents;
create policy "Clients can create their consents"
  on public.consents for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Clients can revoke their consents" on public.consents;
create policy "Clients can revoke their consents"
  on public.consents for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Clients can read their free readings" on public.free_readings;
create policy "Clients can read their free readings"
  on public.free_readings for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Clients can save their free readings" on public.free_readings;
create policy "Clients can save their free readings"
  on public.free_readings for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Clients can delete their free readings" on public.free_readings;
create policy "Clients can delete their free readings"
  on public.free_readings for delete
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Clients can read their orders" on public.study_orders;
create policy "Clients can read their orders"
  on public.study_orders for select
  to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Clients can read their library" on public.library_items;
create policy "Clients can read their library"
  on public.library_items for select
  to authenticated
  using ((select auth.uid()) = user_id);

insert into storage.buckets (id, name, public)
values ('client-library', 'client-library', false)
on conflict (id) do update set public = false;

drop policy if exists "Clients can read their library files" on storage.objects;
create policy "Clients can read their library files"
  on storage.objects for select
  to authenticated
  using (
    bucket_id = 'client-library'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );
