import Icons from "@/components/shared/icons"
import React from "react"

export default function NoUsers() {
	return (
		<div className="flex-1 bg-slate-100 rounded-lg text-slate-500 border flex items-center justify-center gap-2 flex-col dark:bg-slate-900 dark:border-slate-700 dark:text-slate-400">
			<Icons.Navbar.Users className="size-28" />
			<div>No users found</div>
		</div>
	)
}
