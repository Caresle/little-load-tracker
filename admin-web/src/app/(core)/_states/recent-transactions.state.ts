import { Item } from "@/entities/item.entity"
import { create } from "zustand"

interface RecentTransactionState {
	isEdit: boolean
	item?: Item
	show: boolean
	update: (data: Partial<RecentTransactionState>) => void
}

export const useRecentTransactionStore = create<RecentTransactionState>(
	set => ({
		show: false,
		isEdit: false,
		item: {} as Item,
		update: data => set({ ...data }),
	}),
)
