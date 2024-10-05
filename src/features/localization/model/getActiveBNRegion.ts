'use server'

import { cookies } from "next/headers"
import { RegionBN } from "../types"
import { BN_REGION_COOKIE_KEY, defaultBNRegion } from "../config"

export const getActiveBNRegion = async (): Promise<RegionBN> => {
	const cookiesManager = cookies()
	const activeBNRegion = cookiesManager.get(BN_REGION_COOKIE_KEY)?.value as RegionBN

	if(activeBNRegion) {
		return activeBNRegion
	}

	cookiesManager.set(BN_REGION_COOKIE_KEY, defaultBNRegion)
	return defaultBNRegion
}
