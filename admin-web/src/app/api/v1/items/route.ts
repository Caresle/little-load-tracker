import { GET as getItems, POST as createItem } from "./controller"
import { hasAccess } from "@/helpers/has-access"
import { PERMISSIONS } from "@/constants/permissions"
import { NextRequest } from "next/server"

const GET = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.items.getItems, req, params, getItems)

const POST = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.items.createItem, req, params, createItem)

export { GET, POST }
