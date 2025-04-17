"use client"
import Icons from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import React from "react"
import UsersTable from "./_components/users-table"
import UserFilterActions from "./_components/user-filter-actions"
import NoUsers from "./_components/no-users"
import UserModal from "./_components/_modals/user-modal"
import { useUserStore } from "./_states/user.state"
import { User } from "@/entities/user.entity"
import UserDeleteModal from "./_components/_modals/user-delete-modal"
import { UsersProvider, useUsers } from "./_hooks/use-users"
import Loading from "./loading"

const UserActions = () => {
	const { update } = useUserStore(state => state)
	return (
		<div className="flex items-end w-full bg-white rounded-lg p-2 border dark:bg-slate-800 dark:border-slate-700">
			<Button
				onClick={() => update({ show: true, isEdit: false, user: {} as User })}
			>
				<Icons.Actions.Add />
				Add User
			</Button>
			<UserFilterActions />
		</div>
	)
}

const UserContent = () => {
	const { users, QUsers } = useUsers()

	return (
		<div className="bg-white rounded-lg flex-1 border flex flex-col p-2 gap-1 overflow-y-auto dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400">
			{QUsers?.isLoading && <Loading />}
			{!QUsers?.isLoading && users?.length <= 0 && <NoUsers />}
			{!QUsers?.isLoading && users?.length > 0 && <UsersTable />}
		</div>
	)
}

export default function UsersClient({
	initialUsers = [],
}: {
	initialUsers: User[]
}) {
	return (
		<UsersProvider initialUsers={initialUsers}>
			<div className="w-full flex flex-col gap-2 p-2 overflow-y-auto">
				{/* Modals */}
				<UserModal />
				<UserDeleteModal />
				{/* Content */}
				<UserActions />
				<UserContent />
			</div>
		</UsersProvider>
	)
}
