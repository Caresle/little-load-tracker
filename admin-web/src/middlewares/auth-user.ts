import { verify } from "@/lib/jwt"
import { NextRequest, NextResponse } from "next/server"

export const authUser = (next: Function) => {
	return async (req: NextRequest, _next: Function) => {
		const path = req.nextUrl.pathname

		const whiteListApi = ["/api/v1/auth"]
		const whiteListRoutes = ["/login"]

		if (whiteListApi.some(route => path.startsWith(route)))
			return next(req, _next)

		if (whiteListRoutes.some(route => path.startsWith(route)))
			return next(req, _next)

		const authHeader = req.headers.get("Authorization")

		if (path.startsWith("/api/v1/")) {
			if (!authHeader)
				return NextResponse.json({ message: "Unauthorized" }, { status: 401 })

			const token = authHeader.split(" ")[1]
			const tokenPayload = await verify(token)

			if (!tokenPayload)
				return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
		}

		return next(req, _next)
	}
}
