import Icons from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import { User } from "@/entities/user.entity"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"

const columnsHelper = createColumnHelper<User & { actions: Object }>()

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
		columnsHelper.accessor("actions", {
			header: () => <></>,
			cell: () => {
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
	] as ColumnDef<User>[]
}
