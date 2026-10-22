begin;

grant select on table
    public.recipes,
    public.recipe_ingredients,
    public.recipe_steps
to anon;

create policy "Allow annoymous recipe reads"
on public.recipes
for select
to anon
using (true);

create policy "Allow anonymous ingredient reads"
on public.recipe_ingredients
for select
to anon
using (true);

create policy "Allow anonymous step reads"
on public.recipe_steps
for select
to anon
using (true);

commit;