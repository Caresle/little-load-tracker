"use server"

import { User, UserMapper } from "@/entities/user.entity"
import { pgQuery } from "@/lib/pg"

const query = `
    SELECT * FROM users WHERE id = $1
`

export default async function getUserById(id: number): Promise<User | Error> {
	try {
		const userRaw = (await pgQuery(query, [id]))?.[0] ?? {}

		return UserMapper.toEntity(userRaw)
	} catch (error) {
		console.error(error)
		return error as Error
	}
}
