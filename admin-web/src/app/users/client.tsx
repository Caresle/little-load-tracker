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

const UserActions = () => {
	const { update } = useUserStore(state => state)
	return (
		<div className="flex items-end w-full bg-white rounded-lg p-2 border">
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

export default function UsersClient() {
	return (
		<div className="w-full flex flex-col gap-2 p-2 overflow-y-auto">
			{/* Modals */}
			<UserModal />
			<UserDeleteModal />
			{/* Content */}
			<UserActions />
			<div className="bg-white rounded-lg flex-1 border flex flex-col p-2 gap-1 overflow-y-auto">
				<UsersTable />
			</div>
		</div>
	)
}
