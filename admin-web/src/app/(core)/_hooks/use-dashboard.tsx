"use client"

import { DashboardData } from "@/helpers/queries/get-dashboard-data"
import { createContext, useContext } from "react"

interface DashboardContextProps {
	dashboardData: DashboardData
}

const DashboardContext = createContext<DashboardContextProps>(
	{} as DashboardContextProps,
)

export const useDashboard = () => useContext(DashboardContext)

export const DashboardProvider = ({
	children,
	initialData,
}: {
	initialData: DashboardData
	children: React.ReactNode
}) => {
	const value = {
		dashboardData: initialData,
	}

	return <DashboardContext value={value}>{children}</DashboardContext>
}
