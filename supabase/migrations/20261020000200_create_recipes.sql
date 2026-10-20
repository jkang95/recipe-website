begin;

create table public.recipes (
    id bigint generated always as identity primary key,
    name text not null,
    category_id bigint not null references public.categories(id)
);

alter table public.recipes enable row level security;

commit;