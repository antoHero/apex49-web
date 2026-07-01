create table if not exists email_log (
  id uuid primary key,
  status text not null,
  error text,
  updated_at timestamptz not null default now()
);

-- Lock this down: only the service role should touch this table.
-- No RLS policies granting anon/authenticated access — this is a backend-only log.
alter table email_log enable row level security;