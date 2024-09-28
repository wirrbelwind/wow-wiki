'use client'

import { Input } from "@nextui-org/react"
import { useFormState } from "react-dom"
import { SubmitButton } from "./SubmitButton"
import { login } from "@/actions/login"

export const LoginForm = () => {
	const [state, action] = useFormState(login, undefined)

	return (
		<form className="w-5/12" method="POST" action={action}>
			<Input name="clientId" type="text" label="Client ID" />
			<Input name="clientSecret" type="text" label="Client secret" className="mt-4" />


			{state && JSON.stringify(state.errors)}
			<SubmitButton />
		</form>
	)
}

