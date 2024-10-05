'use client'
import { ChangeEventHandler } from "react"
import { changeBNRegion } from "../model/changeBNRegion"
import { regionsOptions } from "../config"
import { RegionKeyBN } from "../types"
import { useRouterI18n } from "../model/i18n"

interface RegionSelectorProps {
	activeRegion: RegionKeyBN
}

export const RegionSelector: React.FC<RegionSelectorProps> = ({ activeRegion }) => {
	const router = useRouterI18n()

	const handleChange: ChangeEventHandler<HTMLSelectElement> = async (event) => {
		const region = event.currentTarget.value as RegionKeyBN
		const newLocale = await changeBNRegion(region)
		router.push(window.location.pathname, { newLocale: newLocale.newLocale })
	}

	return (
		<select
			name="lang"
			value={activeRegion}
			onChange={handleChange}
		>
			{
				regionsOptions.map((region, index) => (
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
