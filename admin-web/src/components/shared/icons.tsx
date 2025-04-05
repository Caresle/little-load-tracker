import {
	LuBox,
	LuBoxes,
	LuChevronDown,
	LuChevronUp,
	LuCirclePlus,
	LuCircleX,
	LuComponent,
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
		Box: LuBox,
		Boxes: LuBoxes,
		Component: LuComponent,
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
		DropdownOpen: LuChevronDown,
		DropdownClosed: LuChevronUp,
	},
}

export default Icons
