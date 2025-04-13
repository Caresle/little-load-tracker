import {
	GET as getLoad,
	PUT as updateLoad,
	DELETE as deleteLoad,
} from "./controller"

import { hasAccess } from "@/helpers/has-access"
import { PERMISSIONS } from "@/constants/permissions"
import { NextRequest } from "next/server"

const GET = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.loads.getLoads, req, params, getLoad)

const PUT = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.loads.updateLoad, req, params, updateLoad)

const DELETE = (req: NextRequest, params: any) =>
	hasAccess(PERMISSIONS.loads.deleteLoad, req, params, deleteLoad)

export { GET, PUT, DELETE }
