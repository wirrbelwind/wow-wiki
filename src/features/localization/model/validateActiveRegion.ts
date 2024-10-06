
import { cookies } from "next/headers"
import { BN_REGION_COOKIE_KEY, regionsOptions } from "../config"
import { RegionKeyBN } from "../types"
import { getActiveLocale } from "./getActiveLocale"

export interface RegionValidationResult {
	type: 'fulfilled' | 'conflict' | 'empty'
}

export const validateActiveRegion = (): RegionValidationResult => {
	const cookiesManager = cookies()

	const activeRegionKey = cookiesManager.get(BN_REGION_COOKIE_KEY)?.value as RegionKeyBN
	const activeLocale = getActiveLocale()

	if (!activeRegionKey || !activeLocale) {
		return {
			type: 'empty'
		}
	}

	const activeRegionData = regionsOptions.find(region => region.value === activeRegionKey)

	if (!activeRegionData) {
		return {
			type: 'conflict'
		}
	}

	const isActiveLocaleValid = activeRegionData.availableLocales.includes(activeLocale)

	if (!isActiveLocaleValid) {
		return {
			type: 'conflict'
		}
	}

	return {
		type: 'fulfilled'
	}
}