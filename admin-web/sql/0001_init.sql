create type LoadType AS ENUM ('SIMPLE', 'COMPLEX', 'MIXED');

create type LoadStatus as ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'FAILED');

create table if not exists items (
    id serial primary key,
    name varchar(255) not null,
    description varchar(255) not null
);

create table if not exists loads (
    id serial primary key,
    name varchar(255) not null,
    description varchar(255) not null,
    load_type LoadType not null,
    load_status LoadStatus not null default 'PENDING'
);

create table if not exists loads_det (
    id serial primary key,
    load_id int not null references loads(id),
    item_id int not null references items(id),
    quantity int not null
);

create table if not exists users (
    id serial primary key,
    username varchar(255) not null,
    password varchar(255) not null
)