begin;

grant select on table public.categories to anon;

create policy "Allow anoymous category reads"
on public.categories
for select
to anon
using (true);

commit;
