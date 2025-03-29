import Icons from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import { User } from "@/entities/user.entity"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { useUserStore } from "./_states/user.state"
import { useUserDeleteStore } from "./_states/user-delete.state"

const columnsHelper = createColumnHelper<User & { actions: Object }>()

export const useColumns = () => {
	const { update } = useUserStore(state => state)
	const { update: updateDelete } = useUserDeleteStore(state => state)

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
			cell: ({ row }) => {
				return (
					<div className="flex justify-end w-fit gap-2">
						<Button
							size={"icon"}
							onClick={() =>
								update({ isEdit: true, user: row.original, show: true })
							}
						>
							<Icons.Actions.Edit />
						</Button>
						<Button
							size={"icon"}
							variant={"destructive"}
							onClick={() => updateDelete({ user: row.original, show: true })}
						>
							<Icons.Actions.Delete />
						</Button>
					</div>
				)
			},
			size: 15,
		}),
	] as ColumnDef<User>[]
}
