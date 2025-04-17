import React from "react"
import { useColumns } from "../columns"
import { DataTable } from "@/components/shared/data-table"
import { useUsers } from "../_hooks/use-users"

export default function UsersTable() {
	const columns = useColumns()
	const { users } = useUsers()

	return (
		<div className="flex-1 flex flex-col overflow-y-auto">
			<DataTable columns={columns} data={users} />
		</div>
	)
}
