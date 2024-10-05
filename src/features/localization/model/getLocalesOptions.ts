import { regionsOptions, localeTitles } from "../config"
import { LocaleOption } from "../types"
import { getActiveBNRegion } from "./getActiveBNRegion"

export const getLocalesOptions = async () => {
	const {
		regionKey: activeRegionKey
	} = await getActiveBNRegion()
	const locales = regionsOptions.find(region => region.value === activeRegionKey)?.availableLocales
	if (!locales) {
		throw new Error(`Locales of region ${activeRegionKey} not found`)
	}

	const options: LocaleOption[] = locales.map(locale => {

		return {
			value: locale,
			title: localeTitles[locale]
		}
	})

	return options
}