import { hashSync, compareSync } from "bcrypt"
import { env } from "./env"

export const encrypt = (password: string) => {
	return hashSync(password, env.SALT)
}

export const compare = (password: string, hash: string) => {
	return compareSync(password, hash)
}
