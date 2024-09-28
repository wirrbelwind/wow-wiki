import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const auth = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64');
	const segments = request.url.split('/')
	const id = segments[segments.length - 1]
	const response = await fetch('https://oauth.battle.net/token', {
		method: 'POST',
		headers: {
			'Authorization': `Basic ${auth}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: 'grant_type=client_credentials'
	});

	const { access_token } = await response.json();

	const itemResponse = await fetch(`https://eu.api.blizzard.com/data/wow/item/${id}?namespace=static-eu&locale=en_US&access_token=${access_token}`)
	const item = await itemResponse.json()

  return Response.json({ item })
}
