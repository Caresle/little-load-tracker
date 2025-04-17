import { queryKeys } from "@/constants/queryKeys"
import { Item } from "@/entities/item.entity"
import ItemService from "@/service/item.service"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { createContext, useContext, useMemo } from "react"

interface ItemsContextI {
	items: Item[]
	QItems: UseQueryResult<Item[]>
}

const ItemsContext = createContext<ItemsContextI>({
	items: [],
	QItems: {} as UseQueryResult<Item[]>,
})

export const useItems = () => useContext(ItemsContext)

interface ItemsProviderProps {
	children: React.ReactNode
	initialItems: Item[]
}

export const ItemsProvider = ({
	children,
	initialItems,
}: ItemsProviderProps) => {
	const QItems = useQuery<Item[]>({
		queryKey: [queryKeys.items],
		queryFn: () => ItemService.getAll(),
		initialData: initialItems,
	})

	const items = useMemo(() => QItems?.data ?? [], [QItems])

	const value: ItemsContextI = {
		items,
		QItems,
	}

	return <ItemsContext value={value}>{children}</ItemsContext>
}
