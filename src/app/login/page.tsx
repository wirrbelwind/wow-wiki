import { LoginForm } from "@/features/auth";

export default function LoginPage() {
	return (
		<div className="h-full">
			<div className="flex items-center justify-center h-full mt-3">
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
