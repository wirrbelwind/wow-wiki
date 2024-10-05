import { RegionBattleNetHost, RegionBattleNetOption, RegionBattleNetTag, SelectLocaleOption } from "./types";

export const localeOptions: SelectLocaleOption[] = [
	{ value: "en-us", title: "English (United States)" },
	{ value: "es-mx", title: "Español (México)" },
	{ value: "pt-br", title: "Português (Brasil)" },
	{ value: "de-de", title: "Deutsch (Deutschland)" },
	{ value: "en-gb", title: "English (Great Britain)" },
	{ value: "es-es", title: "Español (España)" },
	{ value: "fr-fr", title: "Français (France)" },
	{ value: "it-it", title: "Italiano (Italia)" },
	{ value: "ru-ru", title: "Русский (Россия)" },
	{ value: "ko-kr", title: "한국어 (대한민국)" },
	{ value: "zh-tw", title: "中文 (繁體)" },
	{ value: "zh-cn", title: "中文 (简体)" },
]

export const regionHostingList: Record<RegionBattleNetTag, RegionBattleNetHost> = {
	'us': 'https://us.api.blizzard.com',
	'eu': 'https://eu.api.blizzard.com',
	'kr': 'https://kr.api.blizzard.com',
	'tw': 'https://tw.api.blizzard.com',
	'cn': 'https://gateway.battlenet.com.cn'
}

export const regionOptions: RegionBattleNetOption[] = [
	{
		value: 'us',
		title: 'North America',
		availableLocales: [
			'en_US', 'es_MX', 'pt_BR'
		]
	},
	{
		value: 'eu',
		title: 'Europe',
		availableLocales: [
			'en_GB',
			'es_ES',
			'fr_FR',
			'ru_RU',
			'de_DE',
			'pt_BR',
			'it_IT'
		]
	},
	{
		value: 'kr',
		title: 'Korea',
		availableLocales: [
			'ko_KR',
			'zh_TW',
			'zh_CN'
		]
	}
]