export const QueriesLoads = {
	deleteLoad: `delete from loads where id = $1`,
	createHeader: `insert into loads (name, description, load_type, load_status) values ($1, $2, $3, $4) returning id`,
	updateHeader: `update loads set name = $1, description = $2, load_type = $3, load_status = $4 where id = $5`,
	createDetails: `call p_insert_load_from_json($1, $2)`,
}
