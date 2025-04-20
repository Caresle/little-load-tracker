"use client"
import React from "react"
import HeaderSection from "./_components/header-section"
import RecentTransactions from "./_components/recent-transactions"
import LoadsTracker from "./_components/loads-tracker"

export default function Client() {
	return (
		<div className="flex flex-1 justify-center overflow-y-auto">
			<div className="flex-1 flex flex-col gap-1 p-2 max-w-7xl overflow-y-auto">
				<h1 className="text-3xl text-center font-semibold uppercase">
					Little Load Tracker APP
				</h1>

				<div
					className="bg-white w-full flex-1 rounded-lg border border-slate-300 grid grid-cols-2 gap-2 p-2 grid-rows-12
            dark:bg-slate-800 dark:border-slate-700 overflow-y-auto"
				>
					<HeaderSection />
					<RecentTransactions />
					<LoadsTracker />
				</div>
			</div>
		</div>
	)
}
