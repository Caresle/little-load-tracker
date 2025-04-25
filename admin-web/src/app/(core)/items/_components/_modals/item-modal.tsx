import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import React from "react"
import Icons from "@/components/shared/icons"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import { useItemStore } from "../../_states/item.state"
import { Item } from "@/entities/item.entity"
import ItemService from "@/service/item.service"
import { Textarea } from "@/components/ui/textarea"
import { useItems } from "../../_hooks/use-items"
import { SOCKET_EVENTS } from "@/constants/socket-events"
import { useSocket } from "@/hooks/use-socket"

export default function ItemModal() {
	const { show, update, isEdit, item } = useItemStore(state => state)
	const { QItems } = useItems()
	const { emit } = useSocket({
		[SOCKET_EVENTS.ITEMS.CREATE_ITEM]: (data: Item) => {
			console.log(`CREATE ITEM CALLBACK`)
			console.log(data)
		},
		[SOCKET_EVENTS.ITEMS.UPDATE_ITEM]: (data: Item) => {
			console.log(`UPDATE ITEM CALLBACK`)
			console.log(data)
		},
	})

	const mut = useMutation({
		mutationFn: (body: Item) => {
			if (isEdit) {
				return ItemService.update(body)
			}

			return ItemService.create(body)
		},
		onSuccess: () => {
			update({ show: false, item: {} as Item, isEdit: false })
			QItems.refetch()
			if (isEdit) {
				emit(SOCKET_EVENTS.ITEMS.UPDATE_ITEM, item)
				toast.success("Item updated")
				return
			}
			emit(SOCKET_EVENTS.ITEMS.CREATE_ITEM, item)
			toast.success("Item created")
		},
	})

	const onSubmit = () => {
		mut.mutate(item!)
	}

	return (
		<Dialog open={show} onOpenChange={value => update({ show: value })}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="flex gap-2 items-center">
						<Icons.Misc.Box />
						{isEdit ? "Edit Item" : "Create Item"}
					</DialogTitle>
					<DialogDescription>Manage the data of the item</DialogDescription>
				</DialogHeader>
				<form className="flex flex-col gap-2">
					<Input
						disabled={mut.isPending}
						placeholder="Name"
						value={item?.name ?? ""}
						onChange={e => update({ item: { ...item, name: e.target.value } })}
					/>
					<Textarea
						disabled={mut.isPending}
						placeholder="Description"
						value={item?.description ?? ""}
						onChange={e =>
							update({ item: { ...item!, description: e.target.value } })
						}
					/>
				</form>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant={"secondary"} disabled={mut.isPending}>
							Cancel
						</Button>
					</DialogClose>
					<Button onClick={onSubmit} disabled={mut.isPending}>
						{isEdit ? "Save" : "Create"}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
