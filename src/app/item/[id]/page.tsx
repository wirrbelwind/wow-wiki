export default async function ItemPage({ params: {id} }: { params: { id: string } }) {
	const itemResponse = await fetch(`/api/item/${id}`)
	const item = await itemResponse.json()
	return (
		<div>
			{JSON.stringify(item)}
		</div>
	)
}
