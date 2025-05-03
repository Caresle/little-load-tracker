import { Button } from "@/components/ui/button"
import Icons from "@/components/shared/icons"
import { useTransactionDetailsStore } from "../_states/transaction-details.state"

export default function RecentTransactionItem({ item }) {
	const { update } = useTransactionDetailsStore(state => state)

	const onOpenTransaction = () => update({ show: true, item })

	return (
		<div
			className="p-2 border rounded-lg dark:border-slate-600 dark:bg-slate-700 flex gap-2 transition-all
            hover:bg-blue-200/30 cursor-pointer ring-0 hover:ring-2 hover:ring-blue-500
            dark:hover:bg-blue-800/20 flex-col
        "
		>
			<div className="flex items-center gap-2">
				<div className="dark:bg-slate-700 dark:border-slate-600 border rounded-lg size-8 flex items-center justify-center bg-white">
					{item.name?.[0]}
				</div>
				<div className="font-semibold">{item.name}</div>
			</div>
			<p>{item.description}</p>
			<div className="w-full flex justify-end items-center">
				<Button onClick={onOpenTransaction}>
					<Icons.Actions.Show />
					See Details
				</Button>
			</div>
		</div>
	)
}
