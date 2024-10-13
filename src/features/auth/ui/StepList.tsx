import Link from "next/link";

export const StepList = [
	{
		content: () => (<>
			<p>
				An access to WoW API is not public, but can be easily obtained.I will tell you how to do this in few simple steps.
			</p>
		</>)
	},
	{
		content: () => (<>
			<p>
				First of all you need to have a Battle.net account. <Link target="_blank" href="https://account.battle.net/creation"> Create account</Link>
			</p>
		</>)
	},
	{
		content: () => (<>
			<p>
				Then you need to create your own API Client. <Link target="_blank" href="https://develop.battle.net/access/clients/create" > Create client </Link>
			</p>
		</>)
	},
	{
		content: () => (<>
			<p>
				Open the created client in <Link href="list of your clients" target="_blank" >list of your clients </Link>
			</p>
			<img src="/login-guide-step-4.png" />
		</>)
	},
	{
		content: () => (<>
			<p>Copy and paste your client ID & secret key.</p>
			<img src="/login-guide-step-5.png" />
			<p>Past them to the login form.</p>
		</>)
	},
	{
		content: () => (<>
			<p>If you are exploring my project in DEV mode, you can paste your credentials to.env.example file and rename it to.env.development</p>
			<p> Then just click on button and credentials from.env will jump into form</p>
			<img src="/login-guide-step-6.gif" />
		</>)
	},
]