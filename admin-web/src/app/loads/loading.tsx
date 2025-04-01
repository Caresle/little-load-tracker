import Icons from "@/components/shared/icons"
import React from "react"

export default function Loading() {
	return (
		<div className="flex-1 w-full flex flex-col items-center justify-center text-slate-500 gap-2 transition-all animate-pulse">
			<Icons.Navbar.Load className="size-32" />
			Loading Loads tab
		</div>
	)
}
