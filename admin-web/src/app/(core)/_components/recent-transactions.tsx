import Icons from "@/components/shared/icons"
import React from "react"
import { useDashboard } from "../_hooks/use-dashboard"
import RecentTransactionItem from "./recent-transaction-item"

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
			{data.map((transaction, i) => (
				<RecentTransactionItem key={i} item={transaction} />
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
