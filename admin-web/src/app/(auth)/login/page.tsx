"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LoginService from "@/service/login.service"
import { useMutation } from "@tanstack/react-query"
import React, { useReducer } from "react"
import { toast } from "sonner"

enum ActionType {
	UPDATE_FIELD,
	RESET,
}

interface InitialState {
	username: string
	password: string
}

interface ActionBody {
	type: ActionType
	payload: {
		field: string
		value: string
	}
}

const initialState: InitialState = {
	username: "",
	password: "",
}

function reducer(state: InitialState, action: ActionBody) {
	if (action.type === ActionType.UPDATE_FIELD) {
		return {
			...state,
			[action.payload.field]: action.payload.value,
		}
	}

	if (action.type === ActionType.RESET) return initialState

	return state
}

export default function LoginPage() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const mut = useMutation({
		mutationFn: () => LoginService.login(state),
		onSuccess: data => {
			if (!data.success) {
				toast.warning("Invalid Username or Password")
				return
			}
			toast.success("Login successful")
			window.localStorage.setItem("token", data.token)
			window.location.href = "/"
		},
	})

	const onSubmit = () => {
		mut.mutate()
	}

	return (
		<div
			className="bg-white h-[30vh] w-[50vw] flex flex-col justify-center items-center rounded-lg border p-2 max-w-[400px]
			dark:bg-slate-800 dark:border-slate-700
		"
		>
			<h1 className="text-2xl font-semibold">Little Load Tracker</h1>
			<form
				className="flex-1 w-10/12 flex flex-col gap-2 justify-center"
				onSubmit={e => {
					e.preventDefault()
					onSubmit()
				}}
			>
				<Input
					placeholder="Username"
					value={state.username}
					disabled={mut.isPending}
					onChange={e =>
						dispatch({
							type: ActionType.UPDATE_FIELD,
							payload: {
								field: "username",
								value: e.target.value,
							},
						})
					}
				/>

				<Input
					placeholder="Password"
					value={state.password}
					disabled={mut.isPending}
					type="password"
					onChange={e =>
						dispatch({
							type: ActionType.UPDATE_FIELD,
							payload: {
								field: "password",
								value: e.target.value,
							},
						})
					}
				/>
				<Button
					type="submit"
					className="w-full"
					disabled={
						mut.isPending ||
						state.username.length === 0 ||
						state.password.length === 0
					}
				>
					Login
				</Button>
			</form>
		</div>
	)
}
