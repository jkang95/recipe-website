begin;

create table public.recipe_ingredients (
    id bigint generated always as identity primary key,
    recipe_id bigint not null references public.recipes(id) on delete cascade,
    name text not null,
    quantity numeric check (quantity > 0),
    unit text not null,
    note text,
    sort_order integer not null check (sort_order > 0),
    unique (recipe_id, sort_order)
);

alter table public.recipe_ingredients enable row level security;

commit;