import Icons from "@/components/shared/icons"
import React from "react"

export default function NoUsers() {
	return (
		<div className="flex-1 bg-slate-100 rounded-lg text-slate-500 border flex items-center justify-center gap-2 flex-col">
			<Icons.Navbar.Users className="size-28" />
			<div>No users found</div>
		</div>
	)
}
