export interface Load {
	id?: number
	name: string
	description?: string
	loadType: string
	loadStatus: string
	details: LoadDetail[]
}

export interface LoadDetail {
	itemId: number
	quantity: number
	itemName: string
	loadDetId: number
	itemDescription: string
}

export class LoadMapper {
	static toEntity(json: any): Load {
		return {
			id: Number(json.id),
			name: json.name,
			description: json.description,
			loadType: json.load_type,
			loadStatus: json.load_status,
			details: LoadDetailMapper.toCollection(json.details),
		}
	}

	static toCollection(list: any[]): Load[] {
		return list.map(LoadMapper.toEntity)
	}

	static toJson(entity: Load): any {
		return {
			id: entity.id,
			name: entity.name,
			description: entity.description,
			load_type: entity.loadType,
			load_status: entity.loadStatus,
			details: entity.details.map(LoadDetailMapper.toJson),
		}
	}
}
export class LoadDetailMapper {
	static toEntity(json: any): LoadDetail {
		return {
			itemId: Number(json.item_id),
			quantity: Number(json.quantity),
			itemName: json.item_name,
			loadDetId: Number(json.load_det_id),
			itemDescription: json.item_description,
		}
	}

	static toCollection(list: any[]): LoadDetail[] {
		return list.map(LoadDetailMapper.toEntity)
	}

	static toJson(entity: LoadDetail): any {
		return {
			item_id: entity.itemId,
			quantity: entity.quantity,
			item_name: entity.itemName,
			load_det_id: entity.loadDetId,
			item_description: entity.itemDescription,
		}
	}
}
