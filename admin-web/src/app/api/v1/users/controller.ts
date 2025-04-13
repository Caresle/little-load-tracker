import { NextRequest } from "next/server"
import { userSchema } from "./schema"
import getUsers from "@/actions/users/get-users"
import { encrypt } from "@/lib/encrypt"
import { pgQuery } from "@/lib/pg"
import { queriesUser } from "./queries"

export async function GET() {
	try {
		const dbResult = await getUsers()

		if (dbResult instanceof Error) {
			return Response.json({ error: "Something went wrong" }, { status: 500 })
		}

		return Response.json(dbResult)
	} catch (error) {
		console.error(error)

		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}

export async function POST(req: NextRequest) {
	try {
		const json = await req.json()
		const validated = userSchema.parse(json)

		const hashPassword = encrypt(validated.password)

		await pgQuery(queriesUser.createOne, [validated.name, hashPassword])

		return Response.json("user created")
	} catch (error) {
		console.error(error)

		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}
