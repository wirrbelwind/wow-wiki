'use server'

import { cookies } from "next/headers"
import { RegionBN } from "../types"
import { getActiveBNRegion } from "./getActiveBNRegion"
import { regionsOptions } from "../config"
import { getActiveLocale } from "./getActiveLocale"
import { redirect } from "next/navigation"

export const changeBNRegion = async (regionTag: RegionBN) => {
	const cookiesManager = cookies()
	const activeRegion = await getActiveBNRegion()

	if (activeRegion === regionTag) {
		return
	}

	cookiesManager.set('BN_REGION', regionTag)
	const activeLocale = getActiveLocale()
	const regionData = regionsOptions.find(region => region.value === regionTag)

	if (!regionData) {
		throw new Error(`Data of region ${regionTag} not found`)
	}

	const isLocaleExistsInRegion = regionData.availableLocales.includes(activeLocale)

	if (isLocaleExistsInRegion) {
		return
	}

	const firstLocaleOfTurnedRegion = regionData.availableLocales[0]
	// cookiesManager.set('NEXT_LOCALE', firstLocaleOfTurnedRegion)

	return {
		newLocale: firstLocaleOfTurnedRegion
	}
}
