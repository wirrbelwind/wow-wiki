import { getItem } from "@/actions/getItem";

export default async function ItemPage({ params: { id } }: { params: { id: string } }) {
	// const itemResponse = await fetch(`/api/item/${id}`)
	// const item = await itemResponse.json()

	// @ts-expect-error zxc
	const item = await getItem(id)
	const mediaHref = item.media.key.href

	const auth = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64');

	const response = await fetch('https://oauth.battle.net/token', {
		method: 'POST',
		headers: {
			'Authorization': `Basic ${auth}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: 'grant_type=client_credentials'
	});

	const { access_token } = await response.json();

	const mediaResponse = await fetch(`${mediaHref}&access_token=${access_token}`)
	const mediaData = await mediaResponse.json()

	return (
		<div>
			<img src={mediaData.assets[0].value} width={100}/>
			<h1>{item.name}</h1>
		</div>
	)
}
