export interface Item {
	id?: number
	name: string
	description?: string
}

export class ItemMapper {
	static toEntity(json: any): Item {
		return {
			id: Number(json.id),
			name: json.name,
			description: json.description,
		}
	}

	static toCollection(list: any[]): Item[] {
		return list.map(ItemMapper.toEntity)
	}

	static toJson(entity: Item): any {
		return {
			id: entity.id,
			name: entity.name,
			description: entity.description,
		}
	}
}
