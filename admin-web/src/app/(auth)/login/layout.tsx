import React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className="h-screen w-full flex-1 flex overflow-y-auto
    bg-slate-100 dark:bg-slate-900 items-center justify-center"
		>
			{children}
		</div>
	)
}
