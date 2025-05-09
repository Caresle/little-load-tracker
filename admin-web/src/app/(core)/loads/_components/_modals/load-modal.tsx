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
import React, { useEffect } from "react"
import Icons from "@/components/shared/icons"
import { Input } from "@/components/ui/input"
import { useLoadStore } from "../../_states/load.state"
import {
	useMutation,
	useQueryClient,
	UseQueryResult,
} from "@tanstack/react-query"
import Combobox from "@/components/shared/combobox"
import { useCombobox } from "@/hooks/use-combobox"
import ListItemContainer from "../list-item-container"
import ContainerListItem from "../container-list-item"
import { LOAD_STATUS_LIST, LOAD_TYPES_LIST } from "@/constants/load-types"
import FormItem from "@/components/shared/form-item"
import LoadService from "@/service/load.service"
import { Load } from "@/entities/load.entity"
import { queryKeys } from "@/constants/queryKeys"
import { useSocket } from "@/hooks/use-socket"
import { SOCKET_EVENTS } from "@/constants/socket-events"

interface ComboboxOption {
	name: string
}

export default function LoadModal() {
	const { show, update, isEdit, load } = useLoadStore(state => state)

	const comboboxType = useCombobox<ComboboxOption>()
	const comboboxStatus = useCombobox<ComboboxOption>()
	const queryClient = useQueryClient()

	const { emit } = useSocket({
		[SOCKET_EVENTS.LOADS.CREATE_LOAD]: (data: Load) => {
			console.log("CREATE LOAD CALLBACK SOCKET")
			console.log(data)
		},
		[SOCKET_EVENTS.LOADS.UPDATE_LOAD]: (data: Load) => {
			console.log("UPDATE LOAD CALLBACK SOCKET")
			console.log(data)
		},
	})

	const mut = useMutation({
		mutationFn: (body: Load) => {
			if (isEdit) {
				return LoadService.update(body)
			}

			return LoadService.create(body)
		},
		onSuccess: () => {
			update({ show: false, isEdit: false, load: {} as Load })
			queryClient.invalidateQueries({
				queryKey: [queryKeys.loads],
			})

			if (isEdit) {
				emit(SOCKET_EVENTS.LOADS.UPDATE_LOAD, load)
				return
			}

			emit(SOCKET_EVENTS.LOADS.CREATE_LOAD, load)
		},
	})

	const onSubmit = () => {
		load!.loadStatus = comboboxStatus.value?.name ?? ""
		load!.loadType = comboboxType.value?.name ?? ""
		load!.description = ""

		mut.mutate(load!)
	}

	useEffect(() => {
		if (!show) {
			comboboxStatus.clear()
			comboboxType.clear()
		}

		if (show && isEdit) {
			comboboxStatus.set({ name: load?.loadStatus ?? "" })
			comboboxType.set({ name: load?.loadType ?? "" })
		}
	}, [show, isEdit])

	return (
		<Dialog open={show} onOpenChange={value => update({ show: value })}>
			<DialogContent className="min-w-[70%] h-[80vh] flex flex-col">
				<DialogHeader>
					<DialogTitle className="flex gap-2 items-center">
						<Icons.Navbar.Load />
						{isEdit ? "Edit Load" : "Create Load"}
					</DialogTitle>
					<DialogDescription>Manage the data of the load</DialogDescription>
				</DialogHeader>
				<div className="flex-1 flex overflow-y-auto">
					<form className="flex flex-col gap-2 w-full overflow-y-auto p-1">
						<div className="flex gap-2 w-full items-end">
							<FormItem title="Name">
								<Input
									placeholder="Name"
									value={load?.name ?? ""}
									onChange={e =>
										update({ load: { ...load!, name: e.target.value } })
									}
								/>
							</FormItem>

							<FormItem title="Type">
								<Combobox<ComboboxOption>
									combobox={comboboxType}
									Query={
										{
											data: LOAD_TYPES_LIST,
										} as UseQueryResult<ComboboxOption[]>
									}
									label={"name"}
								/>
							</FormItem>
							<FormItem title="Status">
								<Combobox<ComboboxOption>
									combobox={comboboxStatus}
									Query={
										{
											data: LOAD_STATUS_LIST,
										} as UseQueryResult<ComboboxOption[]>
									}
									label={"name"}
								/>
							</FormItem>
						</div>
						<div className="bg-slate-200 flex p-2 flex-1 gap-2 rounded-lg overflow-y-auto dark:bg-slate-800">
							<ListItemContainer />
							<ContainerListItem />
						</div>
					</form>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant={"secondary"}>Cancel</Button>
					</DialogClose>
					<Button onClick={onSubmit} disabled={mut.isPending}>
						{isEdit ? "Save" : "Create"}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
