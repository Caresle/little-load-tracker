"use server"

import { Load, LoadMapper } from "@/entities/load.entity"
import { pgQuery } from "@/lib/pg"

const query = `
    SELECT * FROM v_llt_loads
    order by id desc
`
export default async function getLoads(): Promise<Load[] | Error> {
	try {
		const loadsRaw = await pgQuery(query)
		const loads = LoadMapper.toCollection(loadsRaw ?? [])
		return loads
	} catch (error) {
		console.error(error)
		return []
	}
}
