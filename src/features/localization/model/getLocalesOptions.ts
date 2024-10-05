import { regionsOptions, localeTitles } from "../config"
import { LocaleOption } from "../types"
import { getActiveBNRegion } from "./getActiveBNRegion"

export const getLocalesOptions = async () => {
	const activeRegion = await getActiveBNRegion()
	const locales = regionsOptions.find(region => region.value === activeRegion)?.availableLocales
	console.log(activeRegion)
	if (!locales) {
		throw new Error(`Locales of region ${activeRegion} not found`)
	}

	const options: LocaleOption[] = locales.map(locale => {

		return {
			value: locale,
			title: localeTitles[locale]
		}
	})

	return options
}