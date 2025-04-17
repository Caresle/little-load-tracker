import AppSidebar from "@/components/shared/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import React from "react"

export default function LayoutCore({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<main className="bg-slate-100 w-full h-screen flex flex-col overflow-y-auto dark:bg-slate-900">
					<SidebarTrigger />
					{children}
				</main>
			</SidebarProvider>
		</>
	)
}
