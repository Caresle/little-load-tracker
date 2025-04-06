import { z } from "zod"

export const loadsSchema = z.object({
	name: z.string(),
	description: z.string(),
	loadType: z.string(),
	loadStatus: z.string(),
	details: z
		.array(
			z.object({
				itemId: z.number({ coerce: true }),
				quantity: z.number({ coerce: true }),
			})
		)
		.transform(data =>
			data.map(item => ({ ...item, id: Number(item.itemId) }))
		),
})

export const loadsUpdateSchema = loadsSchema.extend({
	id: z.number({ coerce: true }),
})
