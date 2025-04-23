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
import { useLoadDeleteStore } from "../../_states/load-delete.state"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import LoadService from "@/service/load.service"
import { Load } from "@/entities/load.entity"
import { queryKeys } from "@/constants/queryKeys"
import { useSocket } from "@/hooks/use-socket"
import { SOCKET_EVENTS } from "@/constants/socket-events"

export default function LoadDeleteModal() {
	const { show, update, load } = useLoadDeleteStore(state => state)
	const queryClient = useQueryClient()

	const { emit } = useSocket({
		[SOCKET_EVENTS.LOADS.DELETE_LOAD]: data => {
			console.log("DELETE LOAD CALLBACK SOCKET")
			console.log(data)
		},
	})

	const mut = useMutation({
		mutationFn: () => LoadService.deleteOne(load!),
		onSuccess: () => {
			emit(SOCKET_EVENTS.LOADS.DELETE_LOAD, load)
			update({ show: false, load: {} as Load })
			queryClient.invalidateQueries({
				queryKey: [queryKeys.loads],
			})
		},
	})

	const onSubmit = () => {
		mut.mutate()
	}

	return (
		<Dialog open={show} onOpenChange={value => update({ show: value })}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="flex gap-2 items-center">
						<Icons.Navbar.Load />
						Delete Load
					</DialogTitle>
					<DialogDescription>Manage the data of the load</DialogDescription>
				</DialogHeader>
				<p>
					Are you sure you want to delete the load <strong>{load?.name}</strong>
					?
				</p>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant={"secondary"}>Cancel</Button>
					</DialogClose>
					<Button
						onClick={onSubmit}
						variant={"destructive"}
						disabled={mut.isPending}
					>
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
