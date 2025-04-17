"use client"
import React from "react"
import ItemsTable from "./_components/items-table"
import { useItemStore } from "./_states/item.state"
import { Button } from "@/components/ui/button"
import Icons from "@/components/shared/icons"
import { Item } from "@/entities/item.entity"
import ItemModal from "./_components/_modals/item-modal"
import ItemDeleteModal from "./_components/_modals/item-delete-modal"
import { ItemsProvider, useItems } from "./_hooks/use-items"
import Loading from "./loading"
import NoItems from "./_components/no-items"

const ItemActions = () => {
	const { update } = useItemStore(state => state)
	return (
		<div className="flex items-end w-full bg-white rounded-lg p-2 border dark:bg-slate-800 dark:border-slate-700">
			<Button
				onClick={() => update({ show: true, isEdit: false, item: {} as Item })}
			>
				<Icons.Actions.Add />
				Add Item
			</Button>
		</div>
	)
}

const ItemsContent = () => {
	const { items, QItems } = useItems()

	return (
		<div className="bg-white rounded-lg flex-1 border flex flex-col p-2 gap-1 overflow-y-auto dark:bg-slate-800 dark:border-slate-700">
			{QItems?.isLoading && <Loading />}
			{!QItems?.isLoading && items?.length <= 0 && <NoItems />}
			{!QItems?.isLoading && items?.length > 0 && <ItemsTable />}
		</div>
	)
}

export default function ItemsClient({
	intiialItems = [],
}: {
	intiialItems: Item[]
}) {
	return (
		<ItemsProvider initialItems={intiialItems}>
			<div className="w-full flex flex-col gap-2 p-2 overflow-y-auto">
				<ItemModal />
				<ItemDeleteModal />
				<ItemActions />
				<ItemsContent />
			</div>
		</ItemsProvider>
	)
}
