'use server'

import { getUserCredentials } from "@/features/auth/model/getUserCredentials";
import { getLocation } from "@/features/localization";
import { localeToBNLocale } from "@/features/localization/model/convert-locale/localeToBNLocale";

export async function getItem(id: number) {
	const {
		accessToken
	} = getUserCredentials()

	const { localeBN, region, regionHosting } = getLocation()

	try {
		// console.log(`${hosting}/data/wow/item/47549?namespace=static-${regionKey}&locale=${locale}&access_token=${accessToken}`)
		console.log(`${regionHosting}/data/wow/item/${id}?namespace=static-${region}&locale=${localeBN}&access_token=${accessToken}`)
		const itemResponse = await fetch(`${regionHosting}/data/wow/item/${id}?namespace=static-${region}&locale=${localeBN}&access_token=${accessToken}`)

		const item = await itemResponse.json()
		return item
	}
	catch (e) {
		return e
	}
}
