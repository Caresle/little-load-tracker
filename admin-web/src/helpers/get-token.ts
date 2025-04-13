import { TokenPayload, verify } from "@/lib/jwt"
import { NextRequest } from "next/server"

/**
 * Helper function to get the token in the `hasAccess` function and every other api
 * endpoint that needs to get the `TokenPayload` of the user.
 */
export const getToken = async (
	req: NextRequest
): Promise<TokenPayload | null> => {
	try {
		const authorization = req.headers.get("Authorization")

		const token = authorization?.split(" ")[1]

		if (!token) return null
		const tokenPayload = await verify(token)

		return tokenPayload
	} catch (error) {
		console.error(error)
		return null
	}
}
