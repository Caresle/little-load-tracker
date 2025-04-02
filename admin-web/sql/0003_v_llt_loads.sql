create view v_llt_loads as (
	with load_header as (
		select * from loads
	), load_details_raw as (
		select
			ld.load_id,
			json_build_object(
				'load_det_id', ld.id,
				'item_id', ld.item_id,
				'quantity', ld.quantity,
				'item_name', i."name",
				'item_description', i.description
			) det
		from loads_det ld
		left join items i on i.id = ld.item_id
	), load_details as (
		select load_id, jsonb_agg(det) details from load_details_raw 
		group by load_id
	)
	select
		lh.*,
		ld.details 
	from load_header lh
	left join load_details ld on ld.load_id = lh.id
);