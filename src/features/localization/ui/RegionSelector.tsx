'use client'
import { ChangeEventHandler } from "react"
import { regionOptions } from "../config"
import { useRouterI18n } from "../model/i18n"
import { getActiveLocale } from "../model/getActiveLocale"
import { RegionBattleNetTag } from "../types"
import { changeBattleNetRegion } from "../model/changeBattleNetRegion"
import { cookies } from "next/headers"

export const RegionSelector = () => {
	const router = useRouterI18n()

	const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const region = event.currentTarget.value as RegionBattleNetTag


		changeBattleNetRegion(region)
	}

	const activeLocale = getActiveLocale()

	return (
		<select
			name="lang"
			value={activeLocale}
			onChange={handleChange}
		>
			{
				regionOptions.map((region, index) => (
					<option
						key={index}
						value={region.value}
					>
						{region.title}
					</option>
				))
			}
		</select>
	)
}