import { io, Socket } from "socket.io-client"

// const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL)
let socket: Socket

export const getSocket = () => {
	if (!socket) {
		socket = io(process.env.NEXT_PUBLIC_SOCKET_URL)
	}
	return socket
}
