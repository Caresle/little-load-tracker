import { pgQuery } from "@/lib/pg"
import { NextRequest } from "next/server"
import { QueriesLoads } from "../queries"
import { loadsUpdateSchema } from "../schema"
import getLoadById from "@/actions/load/get-load-by-id"

export async function GET(
	_: NextRequest,
	{ params }: { params: Promise<{ load: string }> }
) {
	try {
		const id = (await params).load
		const load = await getLoadById(+id)
		return Response.json(load, { status: 200 })
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: Promise<{ load: string }> }
) {
	try {
		const load = (await params).load
		const json = await req.json()
		const validate = loadsUpdateSchema.parse({ ...json, id: load })

		await pgQuery(QueriesLoads.updateHeader, [
			validate.name,
			validate.description,
			validate.loadType,
			validate.loadStatus,
			load,
		])

		await pgQuery(QueriesLoads.createDetails, [
			load,
			{ items: validate.details },
		])

		return Response.json("updated", { status: 200 })
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}

export async function DELETE(
	_: NextRequest,
	{ params }: { params: Promise<{ load: string }> }
) {
	try {
		const load = (await params).load
		await pgQuery(QueriesLoads.deleteLoad, [load])
		return Response.json("ok", { status: 200 })
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}
