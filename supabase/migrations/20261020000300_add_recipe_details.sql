alter table public.recipes
    add column description text not null,
    add column serving integer not null check (serving > 0),
    add column prep_minutes integer not null check (prep_minutes >= 0),
    add column cook_minutes integer not null check (cook_minutes >= 0),
    add column difficulty text not null check (difficulty in ('쉬움', '보통', '어려움')),
    add column chef_note text;