import getLoads from "@/actions/load/get-loads"
import { NextRequest } from "next/server"
import { loadsSchema } from "./schema"
import { pgQuery } from "@/lib/pg"
import { QueriesLoads } from "./queries"

export async function GET() {
	try {
		const loads = await getLoads()
		return Response.json(loads)
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}

export async function POST(req: NextRequest) {
	try {
		const validate = loadsSchema.parse(await req.json())
		const id = (
			await pgQuery(QueriesLoads.createHeader, [
				validate.name,
				validate.description,
				validate.loadType,
				validate.loadStatus,
			])
		)?.[0].id

		await pgQuery(QueriesLoads.createDetails, [id, { items: validate.details }])

		return Response.json("ok", { status: 200 })
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}
