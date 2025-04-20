import { axiosInstance } from "@/lib/axios"

interface LoginBody {
	username: string
	password: string
}

interface LoginResponse {
	success: boolean
	token: string
}

class LoginServiceDefinition {
	version: string

	constructor(version: string) {
		this.version = version
	}

	setVersion(version: string) {
		this.version = version
	}

	async login(body: LoginBody): Promise<LoginResponse> {
		try {
			const res = await axiosInstance.post(`/${this.version}/auth`, body)
			// return res.data
			return { success: true, token: res.data }
		} catch (error) {
			console.error(error)
			return { success: false, token: "" }
		}
	}

	async logout(): Promise<Boolean> {
		try {
			window.localStorage.removeItem("token")
			return true
		} catch (error) {
			console.error(error)
			return false
		}
	}
}

const LoginService = new LoginServiceDefinition("v1")
export default LoginService
