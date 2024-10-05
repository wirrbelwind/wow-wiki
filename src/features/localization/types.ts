import { AvailableLanguageTag } from "./model/paraglide/runtime"

export type ParaglideLocale = AvailableLanguageTag
export type LocaleBattleNet = "en_US" | "es_MX" | "pt_BR" | "de_DE" | "en_GB" | "es_ES" | "fr_FR" | "it_IT" | "ru_RU" | "ko_KR" | "zh_TW" | "zh_CN"

export interface SelectLocaleOption {
	title: string
	value: ParaglideLocale
}

export type RegionBattleNetTag = 'cn' |
	'tw' |
	'kr' |
	'eu' |
	'us'

export interface RegionBattleNetOption {
	value: RegionBattleNetTag
	title: string
	availableLocales: LocaleBattleNet[]
}

export type RegionBattleNetHost = string