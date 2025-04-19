import axios from "axios"

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
})

export const tokenInterceptor = instance.interceptors.request.use(
	function (config) {
		const token = window.localStorage.getItem("token")

		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}

		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

export const axiosInstance = instance
