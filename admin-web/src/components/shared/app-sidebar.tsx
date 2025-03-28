import React from "react"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../ui/sidebar"
import Link from "next/link"
import Icons from "./icons"

const routes = [
	{
		title: "Home",
		url: "/",
		icon: Icons.Navbar.Home,
	},
	{
		title: "Loads",
		url: "/loads",
		icon: Icons.Navbar.Load,
	},
]

export default function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader />
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{routes.map(route => (
								<SidebarMenuItem key={route.title}>
									<SidebarMenuButton asChild>
										<Link href={route.url}>
											<route.icon />
											{route.title}
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	)
}
