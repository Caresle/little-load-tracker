import {
	LuCirclePlus,
	LuCircleX,
	LuLayoutDashboard,
	LuLoaderCircle,
	LuPencil,
	LuSearch,
	LuTrash2,
	LuTruck,
	LuUsersRound,
} from "react-icons/lu"

const Icons = {
	Misc: {
		Error: LuCircleX,
	},
	Navbar: {
		Home: LuLayoutDashboard,
		Load: LuTruck,
		Users: LuUsersRound,
	},
	Actions: {
		Add: LuCirclePlus,
		Edit: LuPencil,
		Loading: LuLoaderCircle,
		Delete: LuTrash2,
		Search: LuSearch,
	},
}

export default Icons
