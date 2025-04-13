import {
	GET as getItem,
	PUT as updateItem,
	DELETE as deleteItem,
} from "./controller"
import { hasAccess } from "@/helpers/has-access"
import { PERMISSIONS } from "@/constants/permissions"
import { NextRequest } from "next/server"

const GET = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.items.getItems, req, params, getItem)

const PUT = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.items.updateItem, req, params, updateItem)

const DELETE = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.items.deleteItem, req, params, deleteItem)

export { GET, PUT, DELETE }
