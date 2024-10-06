import { LocaleBN, Locale } from "../../types";

export const localeToBNLocale = (locale: Locale): LocaleBN => {
	const [language, region] = locale.split('-')

	return `${language}_${region.toUpperCase()}` as LocaleBN
}
