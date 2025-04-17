import Icons from "@/components/shared/icons"
import React from "react"

export default function NoItems() {
	return (
		<div className="flex-1 bg-slate-100 rounded-lg text-slate-500 border flex items-center justify-center gap-2 flex-col dark:bg-slate-700 dark:border-slate-700 dark:text-slate-400">
			<Icons.Misc.Box className="size-28" />
			<div>No items found</div>
		</div>
	)
}
