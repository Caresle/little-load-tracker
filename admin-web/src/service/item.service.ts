import { Item } from "@/entities/item.entity"
import { axiosInstance } from "@/lib/axios"

class ItemServiceDefinition {
	version: string

	constructor(version: string) {
		this.version = version
	}

	setVersion(version: string) {
		this.version = version
	}

	async getAll(): Promise<Item[]> {
		try {
			const res = await axiosInstance.get(`/${this.version}/items`)
			return res.data
		} catch (error) {
			console.error(error)
			return []
		}
	}

	async create(item: Item): Promise<string> {
		try {
			const res = await axiosInstance.post(`/${this.version}/items`, item)
			return res.data
		} catch (error) {
			console.error(error)
			return "error"
		}
	}

	async update(item: Item): Promise<string> {
		try {
			const res = await axiosInstance.put(
				`/${this.version}/items/${item.id}`,
				item
			)
			return res.data
		} catch (error) {
			console.error(error)
			return "error"
		}
	}

	async deleteOne(item: Item): Promise<string> {
		try {
			const res = await axiosInstance.delete(
				`/${this.version}/items/${item.id}`
			)
			return res.data
		} catch (error) {
			console.error(error)
			return "error"
		}
	}
}

const ItemService = new ItemServiceDefinition("v1")
export default ItemService
