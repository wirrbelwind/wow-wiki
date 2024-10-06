'use server'

import { getUserCredentials } from "@/features/auth/model/getUserCredentials";
import { getLocation } from "@/features/localization";
import axios from "axios";

export async function getItem(id: number) {
	const {
		accessToken
	} = getUserCredentials()

	const { localeBN, region, regionHosting } = getLocation()

	const response = await axios.get(`${regionHosting}/data/wow/item/${id}`, {
		params: {
			namespace: `static-${region}`,
			locale: localeBN,
			access_token: accessToken
		}
	})

	response.status
	// const response = await fetch(`${regionHosting}/data/wow/item/${id}?namespace=static-${region}&locale=${localeBN}&access_token=${accessToken}`)

	const item = await response.data
	return item
}
