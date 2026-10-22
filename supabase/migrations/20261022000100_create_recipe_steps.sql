begin;

create table public.recipe_steps (
    id bigint generated always as identity primary key,
    recipe_id bigint not null references public.recipes(id) on delete cascade,
    title text not null,
    description text not null,
    sort_order integer not null check (sort_order > 0),
    unique (recipe_id, sort_order)
);

alter table public.recipe_steps enable row level security;

commit;