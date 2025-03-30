import { User, UserForm } from "@/entities/user.entity"
import { axiosInstance } from "@/lib/axios"

class UserServiceDefinition {
	version: string

	constructor(version: string) {
		this.version = version
	}

	setVersion(version: string) {
		this.version = version
	}

	async getAll(): Promise<User[]> {
		try {
			const res = await axiosInstance.get(`/${this.version}/users`)
			return res.data
		} catch (error) {
			console.error(error)
			return []
		}
	}

	async create(user: UserForm): Promise<string> {
		try {
			const res = await axiosInstance.post(`/${this.version}/users`, user)
			return res.data
		} catch (error) {
			console.error(error)
			return "error"
		}
	}

	async update(user: UserForm): Promise<string> {
		try {
			const res = await axiosInstance.put(
				`/${this.version}/users/${user.id}`,
				user
			)
			return res.data
		} catch (error) {
			console.error(error)
			return "error"
		}
	}

	async deleteOne(user: User): Promise<string> {
		try {
			const res = await axiosInstance.delete(
				`/${this.version}/users/${user.id}`
			)
			return res.data
		} catch (error) {
			console.error(error)
			return "error"
		}
	}
}

const UserService = new UserServiceDefinition("v1")
export default UserService
