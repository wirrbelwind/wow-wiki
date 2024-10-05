import 'server-only'

import { cookies } from "next/headers"
import { Region, RegionKeyBN } from "../types"
import { BN_REGION_COOKIE_KEY, defaultRegionKeyBN, regionHostingList, regionsOptions } from "../config"
import { getActiveLocale } from "./getActiveLocale"
import { validateActiveRegion } from "./validateActiveRegion"

export const getActiveRegion = async (): Promise<Region> => {
	await validateActiveRegion()

	const cookiesManager = cookies()

	const activeRegionKey = cookiesManager.get(BN_REGION_COOKIE_KEY)?.value as RegionKeyBN
	if (!activeRegionKey) {
		throw new Error(`Active region key not found in cookies (cookie field "${BN_REGION_COOKIE_KEY}")`)
	}

	const regionData = regionsOptions.find(region => region.value === activeRegionKey)

	if (!regionData) {
		throw new Error(`Data of region ${activeRegionKey} not found`)
	}

	const localeKey = cookiesManager.get('NEXT_LOCALE')?.value

	return {
		regionKey: activeRegionKey,
		hosting: regionHostingList[activeRegionKey],
		localeKey: getActiveLocale()
	}
}