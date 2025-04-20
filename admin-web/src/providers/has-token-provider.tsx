"use client"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

export default function HasTokenProvider({
	children,
}: {
	children: React.ReactNode
}) {
	const router = useRouter()

	useEffect(() => {
		const token = window.localStorage.getItem("token")
		if (!token) {
			router.push("/login")
		}
	}, [])

	return <>{children}</>
}
