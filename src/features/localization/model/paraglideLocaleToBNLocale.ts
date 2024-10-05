import { LocaleBN, Locale } from "../types";

export const LocaleToBNLocale = (locale: Locale): LocaleBN => {
	const [language, region] = locale.split('-')

	return `${language}_${region.toUpperCase()}` as LocaleBN
}
