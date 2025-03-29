export interface User {
	id: number
	name: string
}

export class UserMapper {
	static toEntity(json: any): User {
		return {
			id: Number(json.id),
			name: json.username,
		}
	}

	static toCollection(list: any[]): User[] {
		return list.map(UserMapper.toEntity)
	}

	static toJson(entity: User): any {
		return {
			id: entity.id,
			username: entity.name,
		}
	}
}
