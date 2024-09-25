import { getItem } from "@/app/actions"

export default async function ItemPage({ params: { id } }: { params: { id: string } }) {
	// const itemResponse = await fetch(`/api/item/${id}`)
	// const item = await itemResponse.json()

	const item = await getItem(id)
	console.log(item)
	return (
		<div>
			{JSON.stringify(item)}
		</div>
	)
}
