import { LocaleBN, ParaglideLocale } from "../types";

export const getBNLocale = (locale: ParaglideLocale): LocaleBN => {
	const [language, region] = locale.split('-')

	return `${language}_${region.toUpperCase()}` as LocaleBN
}
