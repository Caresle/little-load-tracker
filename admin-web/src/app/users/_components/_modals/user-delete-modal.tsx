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
import { useUserDeleteStore } from "../../_states/user-delete.state"

export default function UserDeleteModal() {
	const { show, update } = useUserDeleteStore(state => state)

	return (
		<Dialog open={show} onOpenChange={value => update({ show: value })}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="flex gap-2 items-center">
						<Icons.Navbar.Users />
						Delete User
					</DialogTitle>
					<DialogDescription>Manage the data of the user</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant={"secondary"}>Cancel</Button>
					</DialogClose>
					<Button variant={"destructive"}>Confirm</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
