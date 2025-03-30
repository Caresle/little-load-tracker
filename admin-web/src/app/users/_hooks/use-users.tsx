"use client"

import { queryKeys } from "@/constants/queryKeys"
import { User } from "@/entities/user.entity"
import UserService from "@/service/users.service"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { createContext, useContext, useMemo } from "react"

interface UsersContextI {
	users: User[]
	QUsers: UseQueryResult<User[]>
}

const UsersContext = createContext<UsersContextI>({
	users: [],
	QUsers: {} as UseQueryResult<User[]>,
})

export const useUsers = () => useContext(UsersContext)

interface UsersProviderProps {
	children: React.ReactNode
	initialUsers: User[]
}

export const UsersProvider = ({
	children,
	initialUsers,
}: UsersProviderProps) => {
	const QUsers = useQuery<User[]>({
		queryKey: [queryKeys.users],
		queryFn: () => UserService.getAll(),
		initialData: initialUsers,
	})

	const users = useMemo(() => QUsers?.data ?? [], [QUsers])

	const value: UsersContextI = {
		users,
		QUsers,
	}

	return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}
