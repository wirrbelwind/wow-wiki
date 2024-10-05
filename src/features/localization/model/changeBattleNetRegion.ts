'use server'

import { cookies } from "next/headers"
import { RegionBattleNetTag } from "../types"

export const changeBattleNetRegion = (regionTag: RegionBattleNetTag) => {
	const cookiesManager = cookies()
	const activeRegion = cookiesManager.get('BN_REGION')?.value as RegionBattleNetTag | undefined

	if (activeRegion === regionTag) {
		return
	}

	cookiesManager.set('BN_REGION', regionTag)
}
