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
import { useMutation } from "@tanstack/react-query"
import UserService from "@/service/users.service"
import { User } from "@/entities/user.entity"
import { toast } from "sonner"
import { useUsers } from "../../_hooks/use-users"

export default function UserDeleteModal() {
	const { show, update, user } = useUserDeleteStore(state => state)
	const { QUsers } = useUsers()

	const mut = useMutation({
		mutationFn: () => UserService.deleteOne(user as User),
		onSuccess: () => {
			update({ show: false, user: {} as User })
			QUsers.refetch()
			toast.success("User deleted")
		},
	})

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
				<div>Are you sure you want to delete this user?</div>
				<div className="bg-slate-100 rounded-lg p-2 select-none dark:bg-slate-800">
					<div className="bg-white rounded-lg p-2 dark:bg-slate-900">
						{user?.name}
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button
							variant={"secondary"}
							disabled={mut.isPending}
							onClick={() => update({ show: false, user: {} as User })}
						>
							Cancel
						</Button>
					</DialogClose>
					<Button
						variant={"destructive"}
						onClick={() => mut.mutate()}
						disabled={mut.isPending}
					>
						Confirm
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
