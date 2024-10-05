import { getItem } from "@/actions/getItem";
import { getUserCredentials } from "@/features/auth/model/getUserCredentials";

export default async function ItemPage({ params: { id } }: { params: { id: string } }) {
	// const itemResponse = await fetch(`/api/item/${id}`)
	// const item = await itemResponse.json()

	// @ts-expect-error zxc
	const item = await getItem(id)
	// const mediaHref = item.media.key.href



	// const { accessToken } = getUserCredentials()

	// const mediaResponse = await fetch(`${mediaHref}&access_token=${accessToken}`)
	// const mediaData = await mediaResponse.json()

	return (
		<div>
			{/* <img src={mediaData.assets[0].value} width={100}/> */}
			{/* <h1>{item.name}</h1> */}
			{JSON.stringify(item)}
		</div>
	)
}
