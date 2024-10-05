import { AvailableLanguageTag } from "./model/paraglide/runtime"

export type Locale = AvailableLanguageTag
export type LocaleBN = "en_US" | "es_MX" | "pt_BR" | "de_DE" | "en_GB" | "es_ES" | "fr_FR" | "it_IT" | "ru_RU" | "ko_KR" | "zh_TW" | "zh_CN"

export interface LocaleOption {
	title: string
	value: Locale
}
export interface RegionBNOption {
	value: RegionKeyBN
	title: string
	availableLocales: Locale[]
}

export type RegionKeyBN = 'cn' |
	'tw' |
	'kr' |
	'eu' |
	'us'

export interface Region {
	regionKey: RegionKeyBN
	hosting: RegionBNHost

	localeKey: Locale
}

export type RegionBNHost = `${'http' | 'https'}://${string}.${string}`;