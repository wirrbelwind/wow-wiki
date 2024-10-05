'use client'
import { ChangeEventHandler } from "react"
import { RegionBN } from "../types"
import { changeBNRegion } from "../model/changeBNRegion"
import { regionsOptions } from "../config"

interface RegionSelectorProps {
	activeRegion: RegionBN
}

export const RegionSelector: React.FC<RegionSelectorProps> = ({ activeRegion }) => {
	const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const region = event.currentTarget.value as RegionBN
		changeBNRegion(region)
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
