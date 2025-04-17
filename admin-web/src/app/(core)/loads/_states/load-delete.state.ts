import { Load } from "@/entities/load.entity"
import { create } from "zustand"

interface LoadDeleteState {
	load?: Load
	show: boolean
	update: (data: Partial<LoadDeleteState>) => void
}

export const useLoadDeleteStore = create<LoadDeleteState>(set => ({
	show: false,
	load: {} as Load,
	update: data => set({ ...data }),
}))
