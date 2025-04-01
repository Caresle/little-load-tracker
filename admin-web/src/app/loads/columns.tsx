import Icons from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import { Load } from "@/entities/load.entity"
import { User } from "@/entities/user.entity"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"

const columnsHelper = createColumnHelper<Load & { actions: Object }>()

export const useColumns = () => {
	return [
		columnsHelper.accessor("name", {
			header: () => (
				<div>
					<Button variant={"secondary"} className="w-full">
						Name
					</Button>
				</div>
			),
		}),
		columnsHelper.accessor("loadType", {
			header: () => (
				<div>
					<Button variant={"secondary"} className="w-full">
						Type
					</Button>
				</div>
			),
		}),
		columnsHelper.accessor("loadStatus", {
			header: () => (
				<div>
					<Button variant={"secondary"} className="w-full">
						Status
					</Button>
				</div>
			),
		}),
		columnsHelper.accessor("actions", {
			header: () => <></>,
			cell: ({ row }) => {
				return (
					<div className="flex justify-end w-fit gap-2">
						<Button size={"icon"}>
							<Icons.Actions.Edit />
						</Button>
						<Button size={"icon"} variant={"destructive"}>
							<Icons.Actions.Delete />
						</Button>
					</div>
				)
			},
			size: 15,
		}),
	] as ColumnDef<Load>[]
}
