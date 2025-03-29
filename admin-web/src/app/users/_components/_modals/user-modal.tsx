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
import { useUserStore } from "../../_states/user.state"
import Icons from "@/components/shared/icons"
import { Input } from "@/components/ui/input"

const UserForm = () => {
	return (
		<form className="flex flex-col gap-2">
			<div>
				<Input placeholder="Name" />
			</div>
			<div className="flex gap-2">
				<Input placeholder="Password" type="password" />
				<Input placeholder="Repeat Password" type="password" />
			</div>
		</form>
	)
}

export default function UserModal() {
	const { show, update, isEdit } = useUserStore(state => state)

	return (
		<Dialog open={show} onOpenChange={value => update({ show: value })}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="flex gap-2 items-center">
						<Icons.Navbar.Users />
						{isEdit ? "Edit User" : "Create User"}
					</DialogTitle>
					<DialogDescription>Manage the data of the user</DialogDescription>
				</DialogHeader>
				<UserForm />
				<DialogFooter>
					<DialogClose asChild>
						<Button variant={"secondary"}>Cancel</Button>
					</DialogClose>
					<Button>{isEdit ? "Save" : "Create"}</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
