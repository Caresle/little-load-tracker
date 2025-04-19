import { LOAD_STATUS } from "@/constants/load-types"
import { Load } from "@/entities/load.entity"
import { cn } from "@/lib/utils"
import React from "react"

export default function LoadStatus({ load }: { load: Load }) {
	return (
		<div
			className={cn(
				"flex items-center justify-center rounded-lg px-2 py-1 font-semibold select-none",
				{
					"bg-emerald-200/50 text-emerald-500 border border-emerald-500 dark:bg-emerald-800/20":
						load.loadStatus === LOAD_STATUS.COMPLETED,

					"bg-red-200/50 text-red-500 border border-red-500 dark:bg-red-800/20":
						load.loadStatus === LOAD_STATUS.FAILED,
					"bg-amber-200/50 text-amber-500 border border-amber-500 dark:bg-amber-800/20":
						load.loadStatus === LOAD_STATUS.IN_PROGRESS,
					"bg-slate-200/50 text-slate-500 border border-slate-500 dark:bg-slate-800/20":
						load.loadStatus === LOAD_STATUS.PENDING,
				}
			)}
		>
			{load.loadStatus}
		</div>
	)
}
