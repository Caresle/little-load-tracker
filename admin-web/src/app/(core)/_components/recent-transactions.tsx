import Icons from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import React from "react"
import { useDashboard } from "../_hooks/use-dashboard"

const RecentTransactionItem = () => {
	return (
		<div
			className="p-2 border rounded-lg dark:border-slate-600 dark:bg-slate-700 flex gap-2 transition-all
            hover:bg-blue-200/30 cursor-pointer ring-0 hover:ring-2 hover:ring-blue-500
            dark:hover:bg-blue-800/20 flex-col
        "
		>
			<div className="flex items-center gap-2">
				<div className="dark:bg-slate-700 dark:border-slate-600 border rounded-lg size-8 flex items-center justify-center bg-white">
					I
				</div>
				<div className="font-semibold">Load Name</div>
			</div>
			<p>Load Description</p>
			<div className="w-full flex justify-end items-center">
				<Button>
					<Icons.Actions.Show />
					See Details
				</Button>
			</div>
		</div>
	)
}

const NoRecentTransactions = () => {
	return (
		<div className="flex-1 flex flex-col gap-2 overflow-y-auto p-1 uppercase text-slate-400 font-semibold transition-all animate-pulse">
			<Icons.Actions.Show className="size-20" />
			<div>No Recent Transactions</div>
		</div>
	)
}

const RecentTransactionsList = () => {
	const { dashboardData } = useDashboard()

	const data = dashboardData.recent_transactions ?? []

	if (!data || data?.length === 0) return <NoRecentTransactions />

	return (
		<div className="flex-1 flex flex-col gap-2 overflow-y-auto p-1">
			{data.map((_, i) => (
				<RecentTransactionItem key={i} />
			))}
		</div>
	)
}

export default function RecentTransactions() {
	return (
		<div className="bg-slate-100 rounded-lg p-2 row-span-8 flex dark:bg-slate-700 dark:border-slate-700 overflow-y-auto">
			<div className="bg-white flex-1 p-2 rounded-lg border border-slate-300 dark:bg-slate-800 dark:border-slate-700 overflow-y-auto">
				<h2>Recent Transactions</h2>
				<RecentTransactionsList />
			</div>
		</div>
	)
}
