'use server'
import { getUserCredentials } from "@/features/auth/model/getUserCredentials";
import { getLocation } from "@/features/localization";
import axios, { AxiosError } from "axios";
import { notFound } from "next/navigation";

export async function getItem(id: number) {
	const {
		accessToken
	} = getUserCredentials()

	const { localeBN, region, regionHosting } = getLocation()

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
