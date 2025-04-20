import React from "react"

const LoadTrackerItem = () => {
	return (
		<div
			className="p-2 border rounded-lg dark:border-slate-600 dark:bg-slate-700 flex items-center gap-2 transition-all
            hover:bg-blue-200/30 cursor-pointer ring-0 hover:ring-2 hover:ring-blue-500
            dark:hover:bg-blue-800/20
        "
		>
			<div
				className="dark:bg-slate-700 dark:border-slate-600 border rounded-lg size-8 flex items-center justify-center
                bg-white
            "
			>
				I
			</div>
			<div>Load Name</div>
		</div>
	)
}

const LoadsTrackerList = () => {
	return (
		<div className="flex-1 flex flex-col gap-2 overflow-y-auto p-1">
			{Array.from({ length: 10 }).map((_, i) => (
				<LoadTrackerItem key={i} />
			))}
		</div>
	)
}

export default function LoadsTracker() {
	return (
		<div className="bg-slate-100 rounded-lg p-2 row-span-8 flex dark:bg-slate-700 dark:border-slate-700 overflow-y-auto">
			<div className="bg-white flex-1 p-2 rounded-lg border border-slate-300 dark:bg-slate-800 dark:border-slate-700 flex flex-col overflow-y-auto">
				<h2>Loads Tracker</h2>
				<LoadsTrackerList />
			</div>
		</div>
	)
}
