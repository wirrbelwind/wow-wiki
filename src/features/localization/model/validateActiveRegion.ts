
import { cookies } from "next/headers"
import { getLocation } from "./getLocation"

export interface RegionValidationResult {
	type: 'fulfilled' | 'conflict' | 'empty'
}

export const validateActiveRegion = (): RegionValidationResult => {
	const cookiesManager = cookies()

	const {locale, region, regionLocales} = getLocation()

	if (!locale || !region) {
		return {
			type: 'empty'
		}
	}

	if (!regionLocales) {
		return {
			type: 'conflict'
		}
	}

	const isActiveLocaleValid = regionLocales?.includes(locale)
	if (!isActiveLocaleValid) {
		return {
			type: 'conflict'
		}
	}

	return {
		type: 'fulfilled'
	}
}