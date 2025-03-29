import React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
	return <div className="flex-1 flex">{children}</div>
}
