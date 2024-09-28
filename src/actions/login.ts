'use server'

export async function login(state: object, formData: FormData) {
	const clientId = formData.get('clientId')
	const clientSecret = formData.get('clientSecret')

	const credentials = `${clientId}:${clientSecret}`
	const encodedCredentials = Buffer.from(credentials).toString('base64');

	const authResponse = await fetch('https://oauth.battle.net/token', {
		method: 'POST',
		headers: {
			'Authorization': `Basic ${encodedCredentials}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: 'grant_type=client_credentials'
	});
	const authData = await authResponse.json()

	console.log(authData, authResponse.status, authResponse.ok)
	// const { access_token } = await response.json();

	if (!authResponse.ok) {
		return {
			errors: [authData.error_description]
		}
	}

	const cookiesManager = cookies()
	cookiesManager.set('accessToken', authData.access_token, {
	})

	redirect('/')
}
