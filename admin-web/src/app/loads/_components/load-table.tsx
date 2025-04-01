import React from "react"
import { DataTable } from "@/components/shared/data-table"
import { useColumns } from "../columns"

export default function LoadTable() {
	const columns = useColumns()

	return (
		<div className="flex-1 flex flex-col overflow-y-auto">
			<DataTable columns={columns} data={[]} />
		</div>
	)
}
