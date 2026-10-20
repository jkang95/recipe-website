begin;

create table public.categories (
    id bigint generated always as identity primary key,
    name text not null unique
);

alter table public.categories enable row level security;

insert into public.categories (name)
values
    ('소스'),
    ('메인 요리'),
    ('디저트'),
    ('밀프렙');

commit;