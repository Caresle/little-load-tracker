insert into items (id, name, description) 
values (1, 'Item 1', 'Item 1 description'),
(2, 'Item 2', 'Item 2 description'),
(3, 'Item 3', 'Item 3 description'),
(4, 'Item 4', 'Item 4 description'),
(5, 'Item 5', 'Item 5 description');

insert into loads (name, description, load_type, load_status)
values ('Load 1', 'Load 1 description', 'SIMPLE', 'PENDING');

insert into loads_det(load_id, item_id, quantity)
values (1, 1, 10),
(1, 2, 20),
(1, 3, 30);