import { z } from "zod"

export const userSchema = z.object({
	name: z.string(),
	password: z.string(),
})

export const userUpdateSchema = userSchema.extend({
	id: z.number({ coerce: true }),
	password: z.string().optional(),
})
