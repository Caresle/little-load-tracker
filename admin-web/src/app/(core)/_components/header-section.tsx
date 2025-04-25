import React from "react"

const HeaderSectionItem = () => {
	return (
		<div className="border dark:border-slate-700 dark:bg-slate-700 rounded-lg p-2 shadow"></div>
	)
}

export default function HeaderSection() {
	return (
		<div className="bg-slate-100 col-span-2 p-2 rounded-lg row-span-4 flex dark:bg-slate-700">
			<div className="bg-white flex-1 p-2 rounded-lg border border-slate-300 dark:bg-slate-800 dark:border-slate-700 flex flex-col">
				<h2>Header section</h2>
				<div className="flex-1 grid grid-cols-3 gap-2">
					<HeaderSectionItem />
					<HeaderSectionItem />
					<HeaderSectionItem />
				</div>
			</div>
		</div>
	)
}
