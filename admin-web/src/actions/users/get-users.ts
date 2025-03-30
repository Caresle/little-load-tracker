"use server"

import { User, UserMapper } from "@/entities/user.entity"
import { pgQuery } from "@/lib/pg"

const query = `
    SELECT * FROM users order by id desc
`

export default async function getUsers(): Promise<User[] | Error> {
	try {
		const usersRaw = await pgQuery(query)
		const users = UserMapper.toCollection(usersRaw ?? [])

		return users
	} catch (error) {
		console.error(error)

		return error as Error
	}
}
