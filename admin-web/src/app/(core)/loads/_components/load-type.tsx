import Icons from "@/components/shared/icons"
import { LOAD_TYPES } from "@/constants/load-types"
import { Load } from "@/entities/load.entity"
import React from "react"

export default function LoadType({ load }: { load: Load }) {
	const Icon = () => {
		if (load.loadType === LOAD_TYPES.SIMPLE) {
			return <Icons.Misc.Box />
		}

		if (load.loadType === LOAD_TYPES.COMPLEX) {
			return <Icons.Misc.Boxes />
		}

		return <Icons.Misc.Component />
	}
	return (
		<div className="flex gap-2 justify-center items-center bg-slate-100 px-2 py-1 rounded-lg border border-slate-300">
			<Icon />
			{load.loadType}
		</div>
	)
}
