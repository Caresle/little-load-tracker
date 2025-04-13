import { NextRequest } from "next/server"
import { GET as getLoads, POST as createLoad } from "./controller"
import { hasAccess } from "@/helpers/has-access"
import { PERMISSIONS } from "@/constants/permissions"

const GET = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.loads.getLoads, req, params, getLoads)

const POST = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.loads.createLoad, req, params, createLoad)

export { GET, POST }
