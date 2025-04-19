create or replace procedure p_init_users (
	user_password varchar(255)
)
language plpgsql
as $$
declare
	users integer = 0;
	user_id integer = 0;
begin
	users := (select count(id) from users where username = 'admin');

	if users <= 0 then
		-- CREATING THE USER
		INSERT INTO users (username, password, role)
		values ('admin', user_password, 'ADMIN');
		
		select id into user_id from users where username = 'admin';

		-- GRANT ALL THE PERMISSION TO THE USER
		insert into user_access(permission_id, user_id, allow)
		select id, user_id, 1 from permissions;

	end if;
end;
$$