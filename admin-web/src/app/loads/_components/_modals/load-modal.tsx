import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import React, { useMemo } from "react"
import Icons from "@/components/shared/icons"
import { Input } from "@/components/ui/input"
import { useLoadStore } from "../../_states/load.state"
import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "@/constants/queryKeys"
import ItemService from "@/service/item.service"
import { Item } from "@/entities/item.entity"

const ListItem = ({ item }: { item: Item }) => {
	return (
		<div
			className="p-2 border-l-2 border-l-blue-300/0 hover:border-l-blue-500 transition-all hover:border-l-2 cursor-pointer
				hover:bg-blue-50 hover:text-blue-500 select-none
			"
		>
			{item.name}
		</div>
	)
}

const ListItemContainer = () => {
	const QItems = useQuery<Item[]>({
		queryKey: [queryKeys.items],
		queryFn: () => ItemService.getAll(),
	})

	const items = useMemo(() => QItems?.data ?? [], [QItems])

	return (
		<div className="w-1/3 bg-white rounded-lg p-2 border border-slate-300">
			<div className="font-semibold text-slate-500 border-b">Items</div>
			<div className="flex flex-col flex-1 overflow-y-auto divide-y">
				{items.map(item => (
					<ListItem key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

const ContainerListItem = () => {
	return (
		<div className="w-2/3 bg-white rounded-lg p-2">
			<div className="font-semibold text-slate-500 border-b">
				Items Container
			</div>
		</div>
	)
}

export default function LoadModal() {
	const { show, update, isEdit, load } = useLoadStore(state => state)

	const onSubmit = () => {}

	return (
		<Dialog open={show} onOpenChange={value => update({ show: value })}>
			<DialogContent className="min-w-[70%] h-[80vh] flex flex-col">
				<DialogHeader>
					<DialogTitle className="flex gap-2 items-center">
						<Icons.Navbar.Load />
						{isEdit ? "Edit Load" : "Create Load"}
					</DialogTitle>
					<DialogDescription>Manage the data of the load</DialogDescription>
				</DialogHeader>
				<div className="flex-1 flex">
					<form className="flex flex-col gap-2 w-full">
						<Input placeholder="Name" />
						<div className="bg-slate-200 flex p-2 flex-1 gap-2 rounded-lg">
							<ListItemContainer />
							<ContainerListItem />
						</div>
					</form>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant={"secondary"}>Cancel</Button>
					</DialogClose>
					<Button onClick={onSubmit}>{isEdit ? "Save" : "Create"}</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
