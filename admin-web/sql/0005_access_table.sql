create table permissions(
	id serial primary key,
	name varchar(255) not null
);

create table user_access(
	id serial primary key,
	permission_id int references permissions(id),
	allow int
);