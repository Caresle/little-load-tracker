import getLoads from "@/actions/load/get-loads"

export async function GET() {
	try {
		const loads = await getLoads()
		return Response.json(loads)
	} catch (error) {
		console.error(error)
		return Response.json({ error: "Something went wrong" }, { status: 500 })
	}
}
