import React from "react"
import { useColumns } from "../columns"
import { DataTable } from "@/components/shared/data-table"

export default function ItemsTable() {
	const columns = useColumns()

	return (
		<div className="flex-1 flex flex-col overflow-y-auto">
			<DataTable columns={columns} data={[{ name: "test" }]} />
		</div>
	)
}
