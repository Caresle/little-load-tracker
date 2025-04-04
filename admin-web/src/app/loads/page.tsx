import React from "react"
import LoadsClient from "./client"
import getLoads from "@/actions/load/get-loads"

export default async function PageLoad() {
	const loads = await getLoads()

	if (!Array.isArray(loads)) {
		throw new Error("Error loading loads")
	}
	return <LoadsClient initialLoads={loads} />
}
