create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  purpose text not null
    check (
      purpose in (
        'Schedule a Call',
        'Collaboration',
        'Feedback'
      )
    ),
  email text,
  username text,
  message text,
  preferred_date date,
  preferred_time time,
  additional_notes text,
  is_anonymous boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.contacts enable row level security;

revoke all on table public.contacts from anon, authenticated;
grant insert, select on table public.contacts to service_role;
