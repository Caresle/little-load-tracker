import { createContext, useContext, useMemo } from "react"
import { Load } from "@/entities/load.entity"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { queryKeys } from "@/constants/queryKeys"
import LoadService from "@/service/load.service"

interface LoadContextI {
	loads: Load[]
	QLoads: UseQueryResult<Load[]>
}

const LoadContext = createContext<LoadContextI>({
	loads: [],
	QLoads: {} as UseQueryResult<Load[]>,
})

export const useLoads = () => useContext(LoadContext)

export default function LoadProvider({
	children,
	initialLoads,
}: {
	children: React.ReactNode
	initialLoads: Load[]
}) {
	const QLoads = useQuery<Load[]>({
		queryKey: [queryKeys.loads],
		queryFn: () => LoadService.getAll(),
		initialData: initialLoads,
	})

	const loads = useMemo(() => QLoads?.data ?? [], [QLoads])

	const value: LoadContextI = {
		loads,
		QLoads,
	}

	return <LoadContext value={value}>{children}</LoadContext>
}
