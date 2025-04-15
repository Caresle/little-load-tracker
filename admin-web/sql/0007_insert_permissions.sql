insert into permissions(id, name)
values
(1,'getLoads'),
(2,'createLoad'),
(3,'updateLoad'),
(4,'deleteLoad'),
(5,'getUsers'),
(6,'createUser'),
(7,'updateUser'),
(8,'deleteUser'),
(9,'getItems'),
(10,'createItem'),
(11,'updateItem'),
(12,'deleteItem');

select setval('permissions_id_seq', 12);
