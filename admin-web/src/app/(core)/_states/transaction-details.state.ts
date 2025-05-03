import { Item } from "@/entities/item.entity"
import { create } from "zustand"

interface TransactionDetailsState {
	item?: Item
	show: boolean
	update: (data: Partial<TransactionDetailsState>) => void
}

export const useTransactionDetailsStore = create<TransactionDetailsState>(
	set => ({
		show: false,
		item: {} as Item,
		update: data => set({ ...data }),
	}),
)
