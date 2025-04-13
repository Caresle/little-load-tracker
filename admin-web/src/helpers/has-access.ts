import { NextRequest } from "next/server"
import { getToken } from "./get-token"

/**
 * Helper function to wrap the route handler methods to allow to check if the user
 * has the permission to access the endpoint.
 */
export const hasAccess = async (
	permission: string,
	req: NextRequest,
	params: any,
	method: Function
) => {
	const token = await getToken(req)

	if (!token) return Response.json({ message: "Unauthorized" }, { status: 401 })

	if (!token.permissions?.includes(permission))
		return Response.json({ message: "Forbidden" }, { status: 403 })

	return method(req, params)
}
