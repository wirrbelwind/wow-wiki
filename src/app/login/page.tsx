import { Button, Input } from "@nextui-org/react";

export default function LoginPage() {
	return (
		<div className="h-dvh">
			<div className="flex items-center justify-center h-full">
				<form className="w-5/12">
					<Input type="text" label="Client ID" />
					<Input type="text" label="Client secret" className="mt-4"/>

					<Button className="w-full mt-8">Submit</Button>
				</form>
			</div>
		</div>
	)
}