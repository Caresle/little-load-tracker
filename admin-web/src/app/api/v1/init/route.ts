import { encrypt } from "@/lib/encrypt"
import { pgQuery } from "@/lib/pg"

const initalUser = {
	username: "admin",
	password: "1234",
}

const query = {
	initial: `call p_init_users($1)`,
	postInitial: `REVOKE EXECUTE ON PROCEDURE p_init_users(varchar) FROM PUBLIC;`,
}

export async function GET() {
	try {
		const password = encrypt(initalUser.password)

		await pgQuery(query.initial, [password])
		await pgQuery(query.postInitial)

		return Response.json("Initial user created", { status: 200 })
	} catch (error) {
		console.error(error)
		return Response.json({ message: "Something went wrong" }, { status: 500 })
	}
}
