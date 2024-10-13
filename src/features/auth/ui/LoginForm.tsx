'use client'

import { Button, Input } from "@nextui-org/react"
import { useFormState } from "react-dom"
import { SubmitButton } from "./SubmitButton"
import { login } from "../model/login"
import { useState, useTransition } from "react"
import { LoginGuide } from "./LoginGuide"
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { useBoolean } from "@/shared/utils/useBoolean"
import { motion } from 'framer-motion'
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
		if (!isDevMode) {
			throw new Error('Trying to use ENV variables not in DEV mode')
		}

		if (!envCredentials?.clientId || !envCredentials.clientSecret) {
			throw new Error('!clientId || !clientSecret')
		}

		setClientId(envCredentials?.clientId)
		setClientSecret(envCredentials?.clientSecret)
	}

	const showGuide = useBoolean(false)

	return (
		<div className="flex gap-5 w-5/12 flex-col relative">
			<form action={action} className="z-10">
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

				<Button
					onClick={showGuide.toggle}
					isIconOnly
				>
					<BsFillQuestionCircleFill size="2rem" color="yellow" />
				</Button>

				<Input
					className="mt-10"
					name="clientId"
					type="text"
					label="Client ID"
					value={clientId}
					required
				/>
				<Input
					name="clientSecret"
					type="text"
					label="Client secret"
					className="mt-4"
					value={clientSecret}
					required
				/>

				{state && JSON.stringify(state.errors)}
				<SubmitButton />
			</form>

			{showGuide.value && (
				<motion.div className="z-0"
					initial={{ y: "-100%", opacity: 0 }} // Начальная позиция
					animate={{ y: "0%", opacity: 1 }}    // Анимация появления
					exit={{ y: "-100%", opacity: 0 }}     // Анимация исчезновения
					transition={{ duration: 0.5 }}        // Длительность анимации
				>
					<LoginGuide />
				</motion.div>
			)}
		</div>
	)
}
