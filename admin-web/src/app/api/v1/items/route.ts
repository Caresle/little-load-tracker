import { NextRequest } from "next/server"
import { itemSchema } from "./schema"
import { pgQuery } from "@/lib/pg"
import { itemsQuery } from "./queries"
import getItems from "@/actions/items/get-items"

export async function GET() {
	try {
		const items = await getItems()
		return Response.json(items)
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}

export async function POST(req: NextRequest) {
	try {
		const json = await req.json()
		const validated = itemSchema.parse(json)

		await pgQuery(itemsQuery.createOne, [validated.name, validated.description])

		return Response.json({ success: "Item created" }, { status: 201 })
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}
