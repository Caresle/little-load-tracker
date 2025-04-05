insert into items (id, name, description) 
values (1, 'Item 1', 'Item 1 description'),
(2, 'Item 2', 'Item 2 description'),
(3, 'Item 3', 'Item 3 description'),
(4, 'Item 4', 'Item 4 description'),
(5, 'Item 5', 'Item 5 description');

-- Simple load
insert into loads (name, description, load_type, load_status)
values ('Load 1', 'Load 1 description', 'SIMPLE', 'PENDING');

insert into loads_det(load_id, item_id, quantity)
values (1, 1, 10),
(1, 2, 20),
(1, 3, 30);

insert into loads (name, description, load_type, load_status)
values ('Load 2', 'Load 2 description', 'SIMPLE', 'IN_PROGRESS');

insert into loads_det(load_id, item_id, quantity)
values (2, 1, 10),
(2, 2, 20),
(2, 3, 30);

insert into loads (name, description, load_type, load_status)
values ('Load 2', 'Load 2 description', 'SIMPLE', 'COMPLETED');

insert into loads_det(load_id, item_id, quantity)
values (3, 1, 10),
(3, 2, 20),
(3, 3, 30);

insert into loads (name, description, load_type, load_status)
values ('Load 2', 'Load 2 description', 'SIMPLE', 'FAILED');

insert into loads_det(load_id, item_id, quantity)
values (4, 1, 10),
(4, 2, 20),
(4, 3, 30);