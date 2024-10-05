'use server'

import { cookies } from "next/headers"
import { RegionBNTag } from "../types"

export const changeBNRegion = (regionTag: RegionBNTag) => {
	const cookiesManager = cookies()
	const activeRegion = cookiesManager.get('BN_REGION')?.value as RegionBNTag | undefined

	if (activeRegion === regionTag) {
		return
	}

	cookiesManager.set('BN_REGION', regionTag)
}
