import type { Metadata } from "next"
import "./globals.css"
import Providers from "@/providers/providers"

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
		<html lang="en" suppressHydrationWarning>
			<body className="transition-all">
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
