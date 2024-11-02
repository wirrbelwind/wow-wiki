'use server'
import { getUser } from "@/shared/utils/getUser";
import { $axios } from "./api";

export async function getItem(id: number) {
	const {
		location: { localeBN, region, regionHosting },
		credentials: { accessToken }
	} = getUser()

		try {
			const response = await $axios.get(`${regionHosting}/data/wow/item/${id}`, {
				headers: {
					Authorization: `Bearer ${accessToken}`
				},
				params: {
					namespace: `static-${region}`,
					locale: localeBN,
				}
			})
	
			const item = await response.data
			return item
		}
		catch(e) {
			console.log(e)
		}
	
}
