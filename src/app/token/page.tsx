
import { getTimeToken } from "@/entities/time-token/model/getToken"

export default async function TokenPage() {
	const token = await getTimeToken()

	const price = token.price/100/100
	const date = new Date(token.last_updated_timestamp)

	return (
		<div>
			<h1>Price: {price}</h1>
			<h1>Last updated at: {date.toDateString()}</h1>
			</div>
	)
}
