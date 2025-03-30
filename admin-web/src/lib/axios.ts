import axios, { AxiosError } from "axios"
import { env } from "./env"

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
})

export const axiosInstance = instance
