import { useQuery } from "@tanstack/react-query"
import { useLoadStore } from "../_states/load.state"
import { Item } from "@/entities/item.entity"
import { queryKeys } from "@/constants/queryKeys"
import ItemService from "@/service/item.service"
import { useMemo, useState } from "react"
import ListItem from "./list-item"
import { Input } from "@/components/ui/input"

const NoItems = () => {
	return (
		<div className="bg-slate-100 flex-1 flex items-center justify-center rounded-lg">
			NO ITEMS
		</div>
	)
}

export default function ListItemContainer() {
	const { load } = useLoadStore(state => state)
	const [name, setName] = useState("")

	const QItems = useQuery<Item[]>({
		queryKey: [queryKeys.items],
		queryFn: () => ItemService.getAll(),
	})

	const items = useMemo(() => {
		const queryItems = QItems?.data ?? []
		const details = load?.details ?? []

		const noAssigned = queryItems.filter(
			item => !details.some(det => det.itemId === item.id)
		)
		return noAssigned.filter(item =>
			item.name.toLowerCase().includes(name.toLowerCase())
		)
	}, [QItems, name])

	return (
		<div className="w-1/3 bg-white rounded-lg p-2 border border-slate-300 flex flex-col overflow-y-auto gap-2">
			<div className="font-semibold text-slate-500">Items</div>
			<Input
				placeholder="Search"
				className="w-full"
				onChange={e => setName(e.target.value)}
				value={name}
			/>
			<div className="size-1 border-b w-full"></div>
			<div className="flex flex-col flex-1 overflow-y-auto divide-y">
				{!QItems.isLoading && items?.length <= 0 && <NoItems />}
				{!QItems.isLoading &&
					items?.length > 0 &&
					items.map(item => <ListItem key={item.id} item={item} />)}
			</div>
		</div>
	)
}
