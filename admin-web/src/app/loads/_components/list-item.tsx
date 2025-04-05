import { Item } from "@/entities/item.entity"
import { useLoadStore } from "../_states/load.state"
import Icons from "@/components/shared/icons"

export default function ListItem({ item }: { item: Item }) {
	const { updateDetails, load } = useLoadStore(state => state)

	const onClickItem = () => {
		updateDetails([
			...(load?.details ?? []),
			{
				loadDetId: 0,
				itemId: item.id!,
				quantity: 0,
				itemName: item.name,
				itemDescription: item.description ?? "",
			},
		])
	}

	return (
		<div
			className="p-2 border-l-2 border-l-blue-300/0 hover:border-l-blue-500 transition-all hover:border-l-2 cursor-pointer
				hover:bg-blue-50 hover:text-blue-500 select-none flex items-center gap-2
			"
			onClick={onClickItem}
		>
			<Icons.Misc.Box />
			{item.name}
		</div>
	)
}
