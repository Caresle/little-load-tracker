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
import { useItemDeleteStore } from "../../_states/item-delete.state"

export default function ItemDeleteModal() {
	const { show, update, item } = useItemDeleteStore(state => state)
	// const { QUsers } = useUsers()

	const mut = useMutation({
		mutationFn: (body: Item) => ItemService.deleteOne(body),
		onSuccess: () => {
			update({ show: false, item: {} as Item })
			// QUsers.refetch()
			toast.success("User deleted")
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
						<Icons.Misc.Box className="text-red-500" />
						Delete item
					</DialogTitle>
					<DialogDescription>Manage the data of the item</DialogDescription>
				</DialogHeader>
				<form className="flex flex-col gap-2">
					<div>Are you sure you want to delete this item?</div>
					<div className=" bg-slate-100 p-2 rounded-lg">
						<div className="flex flex-col gap-2 bg-white rounded-lg p-2">
							<Input
								disabled
								placeholder="Name"
								value={item?.name ?? ""}
								onChange={e =>
									update({ item: { ...item, name: e.target.value } })
								}
							/>
							<Textarea
								disabled
								placeholder="Description"
								value={item?.description ?? ""}
								onChange={e =>
									update({ item: { ...item!, description: e.target.value } })
								}
							/>
						</div>
					</div>
				</form>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant={"secondary"} disabled={mut.isPending}>
							Cancel
						</Button>
					</DialogClose>
					<Button
						onClick={onSubmit}
						disabled={mut.isPending}
						variant={"destructive"}
					>
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
