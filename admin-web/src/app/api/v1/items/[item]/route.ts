import getItemById from "@/actions/items/get-item-by-id"
import { NextRequest } from "next/server"
import { itemSchemaUpdate } from "../schema"
import { itemsQuery } from "../queries"
import { pgQuery } from "@/lib/pg"

export async function GET(
	_: NextRequest,
	{ params }: { params: { item: string } }
) {
	try {
		const itemId = (await params).item
		const item = await getItemById(+itemId)
		return Response.json(item)
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: { item: string } }
) {
	try {
		const id = (await params).item
		const json = await req.json()
		const validated = itemSchemaUpdate.parse({ ...json, id })

		await pgQuery(itemsQuery.updateOne, [
			validated.name,
			validated.description,
			id,
		])

		return Response.json({ success: "Item updated" }, { status: 200 })
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}

export async function DELETE(
	_: NextRequest,
	{ params }: { params: { item: string } }
) {
	try {
		const id = (await params).item
		await pgQuery(itemsQuery.deleteOne, [id])
		return Response.json({ success: "Item deleted" }, { status: 200 })
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}
