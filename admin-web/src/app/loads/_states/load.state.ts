import { Load } from "@/entities/load.entity"
import { create } from "zustand"

interface LoadState {
	isEdit: boolean
	load?: Load
	show: boolean
	update: (data: Partial<LoadState>) => void
}

export const useLoadStore = create<LoadState>(set => ({
	show: false,
	isEdit: false,
	load: {} as Load,
	update: data => set({ ...data }),
}))
