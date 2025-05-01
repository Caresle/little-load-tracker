import { compare, encrypt } from "@/lib/encrypt"
import { sign, TokenPayload } from "@/lib/jwt"
import { pgQuery } from "@/lib/pg"
import { NextRequest } from "next/server"
import { z } from "zod"

const schema = z.object({
	username: z.string(),
	password: z.string(),
})

const query = `
	SELECT
		u.username,
		u.password,
		u.role,
		json_agg(p."name") permissions
	FROM users u
	LEFT JOIN user_access ua ON ua.user_id = u.id
	LEFT JOIN permissions p ON p.id = ua.permission_id
	WHERE username = $1
	GROUP BY username, password, role
`

export async function POST(req: NextRequest) {
	try {
		const json = await req.json()

		const validated = schema.safeParse(json)

		if (!validated.success) {
			return Response.json(validated.error, { status: 400 })
		}

		const { username, password } = validated.data

		const user = (await pgQuery(query, [username]))?.[0] ?? null

		if (!user)
			return Response.json("Invalid username or password", { status: 401 })

		if (!compare(password, user.password))
			return Response.json("Invalid username or password", { status: 401 })

		delete user.password

		const token = await sign(user)

		return Response.json(token, { status: 200 })
	} catch (error) {
		return Response.json({ message: "Auth endpoint" }, { status: 401 })
	}
}
