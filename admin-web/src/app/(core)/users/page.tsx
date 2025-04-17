import React from "react"
import UsersClient from "./client"
import getUsers from "@/actions/users/get-users"

export default async function UsersPage() {
	const data = await getUsers()

	if (data instanceof Error) {
		throw data
	}

	return <UsersClient initialUsers={data} />
}
