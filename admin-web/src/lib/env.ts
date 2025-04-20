import { z } from "zod"

export const envSchema = z.object({
	SALT: z.string().default(""),
	DB_PASSWORD: z.string({ coerce: true }).min(1).default("1"),
	DB_USERNAME: z.string().min(1).default("1"),
	DB_DATABASE: z.string().min(1).default("1"),
	DB_PORT: z.string().min(1).default("0"),
	NEXT_PUBLIC_API_URL: z.string().min(1).default("http://localhost"),
	JWT_KEY: z.string().min(1).default("1"),
	JWT_KEY_PUB: z.string().min(1).default("1"),
	JWT_ALG: z.string().min(1).default("1"),
	NEXT_PUBLIC_SOCKET_URL: z.string().min(1).default("http://localhost"),
})

export const env = envSchema.parse(process.env)
