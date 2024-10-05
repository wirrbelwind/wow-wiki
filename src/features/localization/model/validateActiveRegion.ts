
'use server'

import { cookies } from "next/headers"
import { BN_REGION_COOKIE_KEY, defaultRegionKeyBN, regionsOptions } from "../config"
import { RegionKeyBN } from "../types"
import { getActiveLocale } from "./getActiveLocale"

export const validateActiveRegion = () => {
	if (!defaultRegionKeyBN) {
		throw new Error(`Key of default region is: ${defaultRegionKeyBN}`)
	}

	const defaultRegionData = regionsOptions.find(region => region.value === defaultRegionKeyBN)

	if (!defaultRegionData) {
		throw new Error(`Data of default region ${defaultRegionKeyBN} not found`)
	}

	// const defaultRegion = {
	// 	regionKey: defaultRegionKeyBN,
	// 	hosting: regionHostingList[defaultRegionKeyBN],
	// 	localeKey: defaultRegionData.availableLocales[0]
	// }

	const cookiesManager = cookies()

	const activeRegionKey = cookiesManager.get(BN_REGION_COOKIE_KEY)?.value as RegionKeyBN
	const activeLocale = getActiveLocale()

	if (!activeRegionKey) {
		cookiesManager.set(BN_REGION_COOKIE_KEY, defaultRegionKeyBN)
		cookiesManager.set('NEXT_LOCALE', defaultRegionData.availableLocales[0])
	}

	if (activeRegionKey) {
		const activeRegionData = regionsOptions.find(region => region.value === activeRegionKey)

		if (!activeRegionData) {
			throw new Error(`Data of region ${activeRegionKey} not found`)
		}

		const isActiveLocaleValid = activeRegionData.availableLocales.includes(activeLocale)

		if (!activeLocale || !isActiveLocaleValid) {
			cookiesManager.set('NEXT_LOCALE', activeRegionData?.availableLocales[0])
		}

	}
}