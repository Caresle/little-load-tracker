import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/shared/app-sidebar"
import Providers from "@/providers/providers"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: "Little Load Tracker",
	description: "Simple load tracker",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					<SidebarProvider>
						<AppSidebar />
						<main className="bg-slate-100 w-full h-screen flex flex-col overflow-y-auto">
							<SidebarTrigger />
							{children}
						</main>
					</SidebarProvider>
				</Providers>
			</body>
		</html>
	)
}
