import { z } from "zod"

export const envSchema = z.object({
	SALT: z.string(),
	DB_PASSWORD: z.string({ coerce: true }).min(1),
	DB_USERNAME: z.string().min(1),
	DB_DATABASE: z.string().min(1),
	DB_PORT: z.string().min(1),
	NEXT_PUBLIC_API_URL: z.string().min(1),
})

export const env = envSchema.parse(process.env)
