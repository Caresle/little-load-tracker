import { User } from "@/entities/user.entity"
import { create } from "zustand"

interface UserDeleteState {
	user?: User
	show: boolean
	update: (data: Partial<UserDeleteState>) => void
}

export const useUserDeleteStore = create<UserDeleteState>(set => ({
	show: false,
	user: {} as User,
	update: data => set({ ...data }),
}))
