create or replace procedure p_insert_load_from_json(
	id integer,
	input_json jsonb
)
language plpgsql
as $$
declare
	item jsonb;
begin
	delete from loads_det det where det.load_id = p_insert_load_from_json.id;
	
	for item in select * from jsonb_array_elements(input_json->'items')
	loop
		insert into loads_det (load_id, item_id, quantity)
		values(id, (item->>'id')::integer, (item->>'quantity')::integer);
	end loop;
end;
$$