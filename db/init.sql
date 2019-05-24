drop table if exists items;

create table if not exists items(
    item_id serial primary key not null,
    name text not null,
    price integer not null,
    image text not null
);
