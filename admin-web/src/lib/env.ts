import { z } from "zod"

export const envSchema = z.object({
	SALT: z.string(),
})

export const env = envSchema.parse(process.env)
