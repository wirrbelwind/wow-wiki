'use server'

import { cookies } from "next/headers"
import { Region, RegionKeyBN } from "../types"
import { BN_REGION_COOKIE_KEY, defaultRegionKeyBN, regionHostingList } from "../config"

export const getActiveBNRegion = async (): Promise<Region> => {
	const cookiesManager = cookies()
	const activeRegionKeyBN = cookiesManager.get(BN_REGION_COOKIE_KEY)?.value as RegionKeyBN

	if (activeRegionKeyBN) {
		return {
			regionKey: activeRegionKeyBN,
			hosting: regionHostingList[activeRegionKeyBN],
		}
	}

	cookiesManager.set(BN_REGION_COOKIE_KEY, defaultRegionKeyBN)

	return {
		regionKey: defaultRegionKeyBN,
		hosting: regionHostingList[defaultRegionKeyBN]
	}
}
