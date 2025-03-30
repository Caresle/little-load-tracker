import { Item } from "@/entities/item.entity"
import { create } from "zustand"

interface ItemState {
	isEdit: boolean
	item?: Item
	show: boolean
	update: (data: Partial<ItemState>) => void
}

export const useItemStore = create<ItemState>(set => ({
	show: false,
	isEdit: false,
	item: {} as Item,
	update: data => set({ ...data }),
}))
