"use client"

import Icons from "@/components/shared/icons"
import { Button } from "@/components/ui/button"

export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	return (
		<div className="flex-1 flex flex-col items-center justify-center text-slate-500 gap-2">
			<Icons.Misc.Error className="size-28" />
			<h2 className="text-2xl">Error Loading Users</h2>
			<Button onClick={() => reset()}>Try Again</Button>
		</div>
	)
}
