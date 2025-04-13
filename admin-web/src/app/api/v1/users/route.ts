import { GET as getUsers, POST as createUser } from "./controller"
import { hasAccess } from "@/helpers/has-access"
import { PERMISSIONS } from "@/constants/permissions"
import { NextRequest } from "next/server"

const GET = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.users.getUsers, req, params, getUsers)

const POST = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.users.createUser, req, params, createUser)

export { GET, POST }
