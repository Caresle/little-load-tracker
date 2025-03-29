import { User } from "@/entities/user.entity"
import { create } from "zustand"

interface UserState {
	isEdit: boolean
	user?: User
	show: boolean
	update: (data: Partial<UserState>) => void
}

export const useUserStore = create<UserState>(set => ({
	show: false,
	isEdit: false,
	user: {} as User,
	update: data => set({ ...data }),
}))
