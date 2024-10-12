import { getItem } from "@/actions/getItem";

export default async function ItemPage({ params: { id } }: { params: { id: string } }) {

	const item = await getItem(id)
	return (
		<div>
			{/* <img src={mediaData.assets[0].value} width={100}/> */}
			{/* <h1>{item.name}</h1> */}
			{JSON.stringify(item)}
		</div>
	)
}
