'use server'
import { getUser } from "@/entities/user/model/getUser";
import axios, { AxiosError } from "axios";
import { notFound } from "next/navigation";

export async function getItem(id: number) {
	const {
		credentials: { accessToken }
	} = getUser()

	const { location: { localeBN, region, regionHosting } } = getUser()

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
