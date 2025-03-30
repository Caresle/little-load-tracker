"use server"

import { Item, ItemMapper } from "@/entities/item.entity"
import { pgQuery } from "@/lib/pg"

const query = `
    SELECT * FROM items WHERE id = $1
`

export default async function getItemById(id: number): Promise<Item | Error> {
	try {
		const itemRaw = (await pgQuery(query, [id]))?.[0] ?? {}

		return ItemMapper.toEntity(itemRaw)
	} catch (error) {
		console.error(error)
		return error as Error
	}
}
