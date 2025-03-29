import React from "react"
import { useColumns } from "../columns"
import { DataTable } from "@/components/shared/data-table"

export default function UsersTable() {
	const columns = useColumns()

	return (
		<div className="flex-1 flex flex-col overflow-y-auto">
			<DataTable
				columns={columns}
				data={Array.from({ length: 10 }, (_, i) => ({
					id: i,
					name: `User ${i}`,
				}))}
			/>
		</div>
	)
}
