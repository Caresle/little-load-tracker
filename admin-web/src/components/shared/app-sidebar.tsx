"use client"
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
import { useTheme } from "next-themes"

const routes = [
	{
		title: "Home",
		url: "/",
		icon: Icons.Navbar.Home,
	},
	{
		title: "Items",
		url: "/items",
		icon: Icons.Misc.Box,
	},
	{
		title: "Loads",
		url: "/loads",
		icon: Icons.Navbar.Load,
	},
	{
		title: "Users",
		url: "/users",
		icon: Icons.Navbar.Users,
	},
]

export default function AppSidebar() {
	const { setTheme, theme } = useTheme()

	const onChangeTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark")
	}
	return (
		<Sidebar>
			<SidebarHeader className="select-none">Little Load Tracker</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel className="select-none">
						Application
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{routes.map(route => (
								<SidebarMenuItem key={route.title}>
									<SidebarMenuButton asChild>
										<Link href={route.url} className="select-none">
											<route.icon />
											{route.title}
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<div onClick={onChangeTheme}>
										{theme === "dark" ? (
											<Icons.Misc.Moon />
										) : (
											<Icons.Misc.Sun />
										)}
										Theme {theme === "dark" ? "Light" : "Dark"}
									</div>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	)
}
