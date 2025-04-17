import Icons from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import { Load } from "@/entities/load.entity"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { useLoadStore } from "./_states/load.state"
import { useLoadDeleteStore } from "./_states/load-delete.state"
import LoadStatus from "./_components/load-status"
import LoadType from "./_components/load-type"

const columnsHelper = createColumnHelper<Load & { actions: Object }>()

export const useColumns = () => {
	const { update } = useLoadStore(state => state)
	const { update: updateDelete } = useLoadDeleteStore(state => state)

	return [
		columnsHelper.accessor("name", {
			header: () => (
				<div>
					<Button variant={"secondary"} className="w-full">
						Name
					</Button>
				</div>
			),
			size: 100,
		}),
		columnsHelper.accessor("loadType", {
			header: () => (
				<div>
					<Button variant={"secondary"} className="w-full">
						Type
					</Button>
				</div>
			),
			cell: ({ row }) => {
				return <LoadType load={row.original} />
			},
			size: 30,
		}),
		columnsHelper.accessor("loadStatus", {
			header: () => (
				<div>
					<Button variant={"secondary"} className="w-full">
						Status
					</Button>
				</div>
			),
			cell: ({ row }) => {
				return <LoadStatus load={row.original} />
			},
			size: 30,
		}),
		columnsHelper.accessor("actions", {
			header: () => <></>,
			cell: ({ row }) => {
				return (
					<div className="flex justify-end w-fit gap-2">
						<Button
							size={"icon"}
							onClick={() =>
								update({ isEdit: true, load: row.original, show: true })
							}
						>
							<Icons.Actions.Edit />
						</Button>
						<Button
							size={"icon"}
							variant={"destructive"}
							onClick={() => updateDelete({ load: row.original, show: true })}
						>
							<Icons.Actions.Delete />
						</Button>
					</div>
				)
			},
			size: 15,
		}),
	] as ColumnDef<Load>[]
}
