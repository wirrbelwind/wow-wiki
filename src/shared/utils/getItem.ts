'use server'
import { getUser } from "@/shared/utils/getUser";
import axios from "axios";
import { notFound } from "next/navigation";

export async function getItem(id: number) {
	const {
		location: { localeBN, region, regionHosting },
		credentials: { accessToken }
	} = getUser()

	try {
		const response = await axios.get(`${regionHosting}/data/wow/item/${id}`, {
			params: {
				namespace: `static-${region}`,
				locale: localeBN,
				access_token: accessToken
			}
		})

		const item = await response.data
		return item
	} catch (e) {
		notFound()
	}
}
