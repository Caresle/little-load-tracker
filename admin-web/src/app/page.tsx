export default function Home() {
	return (
		<div className="flex flex-1 justify-center">
			<div className="flex-1 flex flex-col gap-1 p-2 max-w-7xl">
				<h1 className="text-3xl text-center font-semibold uppercase">
					Little Load Tracker APP
				</h1>

				<div className="bg-white w-full flex-1 rounded-lg border border-slate-300 grid grid-cols-2 gap-2 p-2 grid-rows-12">
					<div className="bg-slate-100 col-span-2 p-2 rounded-lg row-span-4 flex">
						<div className="bg-white flex-1 p-2 rounded-lg border border-slate-300">
							<h2>Header section</h2>
						</div>
					</div>
					<div className="bg-slate-100 rounded-lg p-2 row-span-8 flex">
						<div className="bg-white flex-1 p-2 rounded-lg border border-slate-300">
							<h2>Recent Transactions</h2>
						</div>
					</div>
					<div className="bg-slate-100 rounded-lg p-2 row-span-8 flex">
						<div className="bg-white flex-1 p-2 rounded-lg border border-slate-300">
							<h2>Loads Tracker</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
