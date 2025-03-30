import { Item } from "@/entities/item.entity"
import { create } from "zustand"

interface ItemState {
	item?: Item
	show: boolean
	update: (data: Partial<ItemState>) => void
}

export const useItemDeleteStore = create<ItemState>(set => ({
	show: false,
	item: {} as Item,
	update: data => set({ ...data }),
}))
