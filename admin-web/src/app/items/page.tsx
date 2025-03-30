import React from "react"
import ItemsClient from "./client"
import getItems from "@/actions/items/get-items"

export default async function ItemsPage() {
	const items = await getItems()

	return <ItemsClient intiialItems={items} />
}
