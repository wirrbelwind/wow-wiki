'use server'

import { getUserCredentials } from "@/features/auth/model/getUserCredentials";
import { getActiveLocale } from "@/features/localization";
import { getActiveBNRegion } from "@/features/localization/model/getActiveRegion";
import { localeToBNLocale } from "@/features/localization/model/localeToBNLocale";

export async function getItem(id: number) {
	const {
		accessToken
	} = getUserCredentials()

	const locale = localeToBNLocale(getActiveLocale())

	const { hosting, regionKey } = await getActiveBNRegion()

	try {
		// console.log(`${hosting}/data/wow/item/47549?namespace=static-${regionKey}&locale=${locale}&access_token=${accessToken}`)
		const itemResponse = await fetch(`https://tw.api.blizzard.com/data/wow/item/47549?namespace=static-tw&locale=zh_TW&access_token=EUDeP1Sfs2He6sbD3bw781hGVajMoCqYOz`)

		const item = await itemResponse.json()
		return item
	}
	catch (e) {
		console.log(e)
	}
}
