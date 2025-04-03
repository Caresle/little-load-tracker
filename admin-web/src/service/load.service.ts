import { Item } from "@/entities/item.entity"
import { Load } from "@/entities/load.entity"
import { axiosInstance } from "@/lib/axios"

class LoadServiceDefinition {
	version: string

	constructor(version: string) {
		this.version = version
	}

	setVersion(version: string) {
		this.version = version
	}

	async getAll(): Promise<Load[]> {
		try {
			const res = await axiosInstance.get(`/${this.version}/loads`)
			return res.data
		} catch (error) {
			console.error(error)
			return []
		}
	}

	async create(load: Load): Promise<string> {
		try {
			const res = await axiosInstance.post(`/${this.version}/loads`, load)
			return res.data
		} catch (error) {
			console.error(error)
			return "error"
		}
	}

	async update(load: Load): Promise<string> {
		try {
			const res = await axiosInstance.put(
				`/${this.version}/loads/${load.id}`,
				load
			)
			return res.data
		} catch (error) {
			console.error(error)
			return "error"
		}
	}

	async deleteOne(load: Load): Promise<string> {
		try {
			const res = await axiosInstance.delete(
				`/${this.version}/loads/${load.id}`
			)
			return res.data
		} catch (error) {
			console.error(error)
			return "error"
		}
	}
}

const LoadService = new LoadServiceDefinition("v1")
export default LoadService
