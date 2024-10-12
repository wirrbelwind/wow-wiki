
import { getUser } from "@/shared/utils/getUser"
import { cookies } from "next/headers"

export interface RegionValidationResult {
	type: 'fulfilled' | 'conflict' | 'empty'
}

export const validateActiveRegion = (): RegionValidationResult => {
	const cookiesManager = cookies()

	const { location: { locale, region, regionLocales } } = getUser()

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