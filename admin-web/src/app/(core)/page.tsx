import getDashboardData from "@/helpers/queries/get-dashboard-data"
import Client from "./client"

export default async function Home() {
	const dashboardData = await getDashboardData()

	if (!dashboardData) {
		throw new Error("Failed to fetch dashboard data")
	}

	return <Client dashboardData={dashboardData} />
}
