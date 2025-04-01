"use client"
import Icons from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import React from "react"
import LoadTable from "./_components/load-table"

const LoadActions = () => {
	return (
		<div className="flex items-end w-full bg-white rounded-lg p-2 border">
			<Button>
				<Icons.Actions.Add />
				Add Load
			</Button>
		</div>
	)
}

const LoadContent = () => {
	return (
		<div className="bg-white rounded-lg flex-1 border flex flex-col p-2 gap-1 overflow-y-auto">
			<LoadTable />
		</div>
	)
}

export default function LoadsClient() {
	return (
		<div className="w-full flex flex-col gap-2 p-2 overflow-y-auto">
			<LoadActions />
			<LoadContent />
		</div>
	)
}
