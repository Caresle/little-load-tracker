import getUserById from "@/actions/users/get-user-by-id"
import { pgQuery } from "@/lib/pg"
import { NextRequest } from "next/server"
import { queriesUser } from "../queries"
import { userUpdateSchema } from "../schema"
import { encrypt } from "@/lib/encrypt"

export async function GET(
	_: NextRequest,
	{ params }: { params: { user: string } }
) {
	try {
		const user = (await params).user

		const dbResult = await getUserById(+user)

		if (dbResult instanceof Error) {
			return Response.json({ error: "Something went wrong" }, { status: 500 })
		}

		return Response.json(dbResult)
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: { user: string } }
) {
	try {
		const { user } = await params
		const json = await req.json()
		const validated = userUpdateSchema.parse({ ...json, id: +user })

		if (validated.password) {
			const hashPassword = encrypt(validated.password)
			await pgQuery(queriesUser.updateOne, [
				validated.name,
				hashPassword,
				+user,
			])
			return Response.json("user updated")
		}

		await pgQuery(queriesUser.updateOne, [validated.name, null, +user])
		return Response.json("user updated")
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}

export async function DELETE(
	_: NextRequest,
	{ params }: { params: { user: string } }
) {
	try {
		const { user } = await params

		await pgQuery(queriesUser.deleteOne, [+user])

		return Response.json("user deleted")
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}
