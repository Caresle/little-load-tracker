import { z } from "zod"

export const itemSchema = z.object({
	name: z.string(),
	description: z.string(),
})

export const itemSchemaUpdate = itemSchema.extend({
	id: z.number({ coerce: true }),
})
