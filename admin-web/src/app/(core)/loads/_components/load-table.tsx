import React from "react"
import { DataTable } from "@/components/shared/data-table"
import { useColumns } from "../columns"
import { useLoads } from "../_hook/use-loads"

export default function LoadTable() {
	const columns = useColumns()
	const { loads } = useLoads()

	return (
		<div className="flex-1 flex flex-col overflow-y-auto">
			<DataTable columns={columns} data={loads} />
		</div>
	)
}
