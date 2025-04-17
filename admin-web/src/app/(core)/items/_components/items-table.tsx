import React from "react"
import { useColumns } from "../columns"
import { DataTable } from "@/components/shared/data-table"
import { useItems } from "../_hooks/use-items"

export default function ItemsTable() {
	const columns = useColumns()
	const { items } = useItems()

	return (
		<div className="flex-1 flex flex-col overflow-y-auto">
			<DataTable columns={columns} data={items} />
		</div>
	)
}
