"use client"

import { useTheme } from "next-themes"
import React from "react"

import { cn } from "@/lib/utils"
import Icons from "./icons"
import CustomSwitch from "./custom-switch"

export default function ThemeSwitcher({ isOpen = true }) {
	const { theme, setTheme, resolvedTheme } = useTheme()

	const onToggle = () => {
		const currentTheme = theme === "system" ? resolvedTheme : theme
		setTheme(currentTheme === "dark" ? "light" : "dark")
	}

	const CollapsedButton = () => {
		return (
			<div className="flex items-center justify-center rounded-full border border-slate-300 p-2 dark:border-slate-700">
				{theme === "dark" ? (
					<Icons.Misc.Sun className="size-5" />
				) : (
					<Icons.Misc.Moon className="size-5" />
				)}
			</div>
		)
	}

	const ExpandedButton = () => {
		return (
			<>
				<div className="font-semibold">Dark Mode</div>
				<CustomSwitch checked={theme === "dark" ? true : false} />
			</>
		)
	}

	return (
		<li
			className={cn(
				"mb-2 flex w-full cursor-pointer select-none items-end justify-between p-2",
				{
					"items-center justify-center p-0": !isOpen,
				},
			)}
			onClick={onToggle}
		>
			{isOpen && <ExpandedButton />}
			{!isOpen && <CollapsedButton />}
		</li>
	)
}
