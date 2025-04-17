import Icons from "@/components/shared/icons"
import { Input } from "@/components/ui/input"
import React from "react"

export default function UserFilterActions() {
	return (
		<div className="flex items-center justify-end w-full">
			<div className="flex items-center gap-2 w-1/3">
				<Icons.Actions.Search />
				<Input placeholder="Search..." />
			</div>
		</div>
	)
}
