import Icons from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { useItemStore } from "./_states/item.state"
import { useItemDeleteStore } from "./_states/item-delete.state"
import { Item } from "@/entities/item.entity"

const columnsHelper = createColumnHelper<Item & { actions: Object }>()

export const useColumns = () => {
	const { update } = useItemStore(state => state)
	const { update: updateDelete } = useItemDeleteStore(state => state)

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
								update({ isEdit: true, item: row.original, show: true })
							}
						>
							<Icons.Actions.Edit />
						</Button>
						<Button
							size={"icon"}
							variant={"destructive"}
							onClick={() => updateDelete({ item: row.original, show: true })}
						>
							<Icons.Actions.Delete />
						</Button>
					</div>
				)
			},
			size: 15,
		}),
	] as ColumnDef<Item>[]
}
