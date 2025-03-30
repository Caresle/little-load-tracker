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
import React, { useEffect, useState } from "react"
import { useUserStore } from "../../_states/user.state"
import Icons from "@/components/shared/icons"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import UserService from "@/service/users.service"
import { UserForm } from "@/entities/user.entity"
import { useUsers } from "../../_hooks/use-users"

export default function UserModal() {
	const { show, update, isEdit, user } = useUserStore(state => state)
	const { QUsers } = useUsers()
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	const mut = useMutation({
		mutationFn: (body: UserForm) => {
			if (isEdit) {
				return UserService.update(body)
			}

			return UserService.create(body)
		},
		onSuccess: () => {
			update({ show: false, user: {} as UserForm, isEdit: false })
			setConfirmPassword("")
			setPassword("")
			QUsers.refetch()
			if (isEdit) {
				toast.success("User updated")
				return
			}
			toast.success("User created")
		},
	})

	const onSubmit = () => {
		if (user?.name?.trim() === "" || !user?.name) {
			toast.error("Name cannot be empty")
			return
		}

		if (
			(!isEdit && password?.trim() === "") ||
			(!isEdit && confirmPassword?.trim() === "")
		) {
			toast.error("Passwords cannot be empty")
			return
		}

		if (!isEdit && password !== confirmPassword) {
			toast.error("Passwords do not match")
			return
		}

		mut.mutate({ ...user, password } as UserForm)
	}

	useEffect(() => {
		if (!show) {
			setPassword("")
			setConfirmPassword("")
		}
	}, [show])

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
				<form className="flex flex-col gap-2">
					<div>
						<Input
							disabled={mut.isPending}
							placeholder="Name"
							value={user?.name ?? ""}
							onChange={e =>
								update({ user: { ...user, name: e.target.value } })
							}
						/>
					</div>
					<div className="flex gap-2">
						<Input
							disabled={mut.isPending}
							placeholder="Password"
							type="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
						<Input
							disabled={mut.isPending}
							placeholder="Repeat Password"
							type="password"
							value={confirmPassword}
							onChange={e => setConfirmPassword(e.target.value)}
						/>
					</div>
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
