import {
	GET as getUser,
	PUT as updateUser,
	DELETE as deleteUser,
} from "./controller"
import { hasAccess } from "@/helpers/has-access"
import { PERMISSIONS } from "@/constants/permissions"
import { NextRequest } from "next/server"

const GET = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.users.getUsers, req, params, getUser)

const PUT = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.users.updateUser, req, params, updateUser)

const DELETE = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.users.deleteUser, req, params, deleteUser)

export { GET, PUT, DELETE }
