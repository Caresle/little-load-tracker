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
import { useLoadStore } from "../../_states/load.state"

export default function LoadModal() {
	const { show, update, isEdit, load } = useLoadStore(state => state)

	const onSubmit = () => {}

	return (
		<Dialog open={show} onOpenChange={value => update({ show: value })}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="flex gap-2 items-center">
						<Icons.Navbar.Load />
						{isEdit ? "Edit Load" : "Create Load"}
					</DialogTitle>
					<DialogDescription>Manage the data of the load</DialogDescription>
				</DialogHeader>
				<form className="flex flex-col gap-2">
					<Input placeholder="Name" />
				</form>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant={"secondary"}>Cancel</Button>
					</DialogClose>
					<Button onClick={onSubmit}>{isEdit ? "Save" : "Create"}</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
