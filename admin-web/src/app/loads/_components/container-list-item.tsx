import { LoadDetail } from "@/entities/load.entity"
import { useLoadStore } from "../_states/load.state"
import { Button } from "@/components/ui/button"
import Icons from "@/components/shared/icons"
import { Input } from "@/components/ui/input"

export default function ContainerListItem() {
	const { load, updateDetails } = useLoadStore(state => state)
	const details = load?.details ?? []

	const onRemoveItem = (item: LoadDetail) => {
		updateDetails(details.filter(det => det.itemId !== item.itemId))
	}

	const onChangeQuantity = (item: LoadDetail, quantity: number) => {
		updateDetails([
			...details.map(det =>
				det.itemId === item.itemId ? { ...det, quantity } : det
			),
		])
	}

	return (
		<div className="w-2/3 bg-white rounded-lg p-2 flex flex-col overflow-y-auto">
			<div className="font-semibold text-slate-500 border-b">
				Items Container
			</div>
			<div className="flex-1 overflow-y-auto divide-y flex flex-col">
				{details.map((detail, i) => (
					<div className="p-1 transition-all hover:bg-slate-50" key={i}>
						<div className="font-semibold flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Icons.Misc.Box />
								<h3>{detail.itemName}</h3>
							</div>
							<Button
								size={"icon"}
								variant={"destructive"}
								type="button"
								onClick={() => onRemoveItem(detail)}
							>
								<Icons.Actions.Delete />
							</Button>
						</div>
						<p className="text-slate-500">{detail.itemDescription}</p>
						<div className="flex w-full items-center justify-end gap-2">
							Quantity
							<Input
								className="w-fit bg-white"
								type="number"
								placeholder="Quantity"
								min={0}
								step={1}
								value={detail.quantity.toString()}
								onChange={e => {
									onChangeQuantity(detail, Number(e.target.value))
								}}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
