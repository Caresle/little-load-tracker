"use server"

import { Load, LoadMapper } from "@/entities/load.entity"
import { pgQuery } from "@/lib/pg"

const query = `
    SELECT * FROM v_llt_loads
	where id = $1
    order by id desc
`
export default async function getLoads(id: number): Promise<Load | Error> {
	try {
		const loadRaw = (await pgQuery(query, [id]))?.[0]
		const load = LoadMapper.toEntity(loadRaw ?? {})
		return load
	} catch (error) {
		console.error(error)
		return error as Error
	}
}
