import { LoginForm } from "@/features/auth";

export default function LoginPage() {
	return (
		<div className="h-dvh">
			<div className="flex items-center justify-center h-full">
				<LoginForm 
					envCredentials={{
						clientId: process.env.CLIENT_ID,
						clientSecret: process.env.CLIENT_SECRET
					}}
				/>
			</div>
		</div>
	)
}
