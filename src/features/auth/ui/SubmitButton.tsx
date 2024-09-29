import { Button } from "@nextui-org/react"
import { useFormStatus } from "react-dom"

export const SubmitButton = () => {
	const { pending } = useFormStatus()

	return (
		<Button className="w-full mt-8" type="submit" isLoading={pending}>Submit</Button>
	)
}