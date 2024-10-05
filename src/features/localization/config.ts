import { RegionBNHost, RegionBNOption, RegionKeyBN, Locale } from "./types";

// Titles are not localized
export const localeTitles: Record<Locale, string> = {
	"en-us": "English (United States)",
	"es-mx": "Español (México)",
	"pt-br": "Português (Brasil)",
	"de-de": "Deutsch (Deutschland)",
	"en-gb": "English (Great Britain)",
	"es-es": "Español (España)",
	"fr-fr": "Français (France)",
	"it-it": "Italiano (Italia)",
	"ru-ru": "Русский (Россия)",
	"ko-kr": "한국어 (대한민국)",
	"zh-tw": "中文 (繁體)",
	"zh-cn": "中文 (简体)"
};
export const regionHostingList: Record<RegionKeyBN, RegionBNHost> = {
	'us': 'https://us.api.blizzard.com',
	'eu': 'https://eu.api.blizzard.com',
	'kr': 'https://kr.api.blizzard.com',
	'tw': 'https://tw.api.blizzard.com',
	'cn': 'https://gateway.battlenet.com.cn'
}

export const regionsOptions: RegionBNOption[] = [
	{
		value: "us",
		title: 'North America',
		availableLocales: [
			'en-us', 'es-mx', 'pt-br'
		]
	},
	{
		value: "eu",
		title: 'Europe',
		availableLocales: [
			'en-gb',
			'es-es',
			'fr-fr',
			'ru-ru',
			'de-de',
			'pt-br',
			'it-it'
		]
	},
	{
		value: "kr",
		title: 'Korea',
		availableLocales: [
			'ko-kr',
			'zh-tw',
			'zh-cn'
		]
	},
	{
		value: "tw",
		title: "Taiwan",
		availableLocales: ["zh-tw"]
	},
	{
		value: "cn",
		title: "China",
		availableLocales: ["zh-cn"]
	}
]

export const defaultRegionKeyBN: RegionKeyBN = 'eu'

export const BN_REGION_COOKIE_KEY = "BN_REGION"