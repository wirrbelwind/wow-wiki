import { LocaleBN, Locale } from "../../types";

export const bnLocaleToDefaultLocale = (locale: LocaleBN): Locale => {
	const [language, region] = locale.split('_')

	return `${language}-${region.toLowerCase()}` as Locale
}