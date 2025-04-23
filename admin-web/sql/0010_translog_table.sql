create table translog (
	id serial primary key,
	load_name varchar(255),
	load_type varchar(255),
	load_status varchar(255),
	stamp varchar(255),
	total_items int
);
