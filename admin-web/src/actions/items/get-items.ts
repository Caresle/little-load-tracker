"use server"

import { Item, ItemMapper } from "@/entities/item.entity"
import { pgQuery } from "@/lib/pg"

const query = `
    SELECT * FROM items
    order by name desc
`

export default async function getItems(): Promise<Item[]> {
	try {
		const itemsRaw = await pgQuery(query)
		const items = ItemMapper.toCollection(itemsRaw ?? [])
		return items
	} catch (error) {
		console.error(error)
		return []
	}
}
