import { SignJWT, jwtVerify, importPKCS8, importSPKI } from "jose"
import { env } from "./env"

const alg = env.JWT_ALG
const key = env.JWT_KEY
const keyPub = env.JWT_KEY_PUB

export interface TokenPayload {
	username: string
	role: string
	iat: number
	exp: number
	permissions: string[]
}

export const sign = async (
	payload: Record<string, string>
): Promise<string | null> => {
	try {
		const privateKey = await importPKCS8(key.trim(), alg)
		const jwt = await new SignJWT(payload)
			.setProtectedHeader({ alg })
			.setIssuedAt()
			.setExpirationTime("1d")
			.sign(privateKey)

		return jwt
	} catch (error) {
		console.error(error)
		return null
	}
}

export const verify = async (token: string): Promise<TokenPayload | null> => {
	try {
		const publicKey = await importSPKI(keyPub.trim(), alg)
		const { payload } = await jwtVerify(token, publicKey, {
			algorithms: [alg],
		})

		if (!payload) return null

		return payload as unknown as TokenPayload
	} catch (error) {
		console.error(error)
		return null
	}
}
