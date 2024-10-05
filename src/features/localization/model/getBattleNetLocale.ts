import { LocaleBattleNet, ParaglideLocale } from "../types";

export const getBattleNetLocale = (locale: ParaglideLocale): LocaleBattleNet => {
	const [language, region] = locale.split('-')

	return `${language}_${region.toUpperCase()}` as LocaleBattleNet
}
