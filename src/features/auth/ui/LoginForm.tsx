'use client'

import { Button, Input } from "@nextui-org/react"
import { useFormState } from "react-dom"
import { SubmitButton } from "./SubmitButton"
import { login } from "../model/login"
import { useState } from "react"

interface LoginFormProps {
	envCredentials?: {
		clientId?: string
		clientSecret?: string
	}
}

export const LoginForm: React.FC<LoginFormProps> = ({ envCredentials }) => {
	const [state, action] = useFormState(login, null)

	const [clientId, setClientId] = useState<string>()
	const [clientSecret, setClientSecret] = useState<string>()

	const isDevMode = process.env.NODE_ENV === 'development'

	const handleDevCredentials = () => {
		if(!isDevMode) {
			throw new Error('Trying to use ENV variables not in DEV mode')
		}

		if(!envCredentials?.clientId || !envCredentials.clientSecret) {
			throw new Error('!clientId || !clientSecret')
		}

		setClientId(envCredentials?.clientId)
		setClientSecret(envCredentials?.clientSecret)
	}

	return (
		<form className="w-5/12" action={action}>
			{isDevMode &&
				<Button
					className="w-full"
					color="secondary"
					onClick={handleDevCredentials}
					disabled={!isDevMode}
				>
					Use ENV variables
				</Button>
			}

			<Input
				className="mt-10"
				name="clientId"
				type="text"
				label="Client ID"
				value={clientId}
			/>
			<Input
				name="clientSecret"
				type="text"
				label="Client secret"
				className="mt-4"
				value={clientSecret}
			/>

			{state && JSON.stringify(state.errors)}
			<SubmitButton />
		</form>
	)
}
