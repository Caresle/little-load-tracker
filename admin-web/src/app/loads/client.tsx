"use client"
import Icons from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import React from "react"
import LoadTable from "./_components/load-table"
import { useLoadStore } from "./_states/load.state"
import { Load } from "@/entities/load.entity"
import LoadModal from "./_components/_modals/load-modal"
import LoadDeleteModal from "./_components/_modals/load-delete-modal"
import LoadProvider from "./_hook/use-loads"

const LoadActions = () => {
	const { show, update } = useLoadStore(state => state)

	return (
		<div className="flex items-end w-full bg-white rounded-lg p-2 border">
			<Button
				onClick={() => update({ show: true, isEdit: false, load: {} as Load })}
			>
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

export default function LoadsClient({
	initialLoads = [],
}: {
	initialLoads: Load[]
}) {
	return (
		<LoadProvider initialLoads={initialLoads}>
			<div className="w-full flex flex-col gap-2 p-2 overflow-y-auto">
				<LoadModal />
				<LoadDeleteModal />

				<LoadActions />
				<LoadContent />
			</div>
		</LoadProvider>
	)
}
