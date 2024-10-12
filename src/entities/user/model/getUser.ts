import { ACCESS_TOKEN_COOKIES_KEY } from "@/features/auth/config"
import { localeToBNLocale } from "@/features/localization"
import { BN_REGION_COOKIE_KEY, regionHostingList, regionsOptions } from "@/features/localization/config"
import { languageTag } from "@/features/localization/model/paraglide/runtime"
import { RegionKeyBN } from "@/features/localization/types"
import { cookies } from "next/headers"

export const getUser = () => {
	const cookie = cookies()
	const region = cookie.get(BN_REGION_COOKIE_KEY)?.value as RegionKeyBN
	const locale = languageTag()
	const regionData = regionsOptions.find(data => data.value === region)

	const accessToken = cookie.get(ACCESS_TOKEN_COOKIES_KEY)?.value

	return {
		location: {
			locale,
			localeBN: localeToBNLocale(locale),

			region,
			regionTitle: regionData?.title,
			regionLocales: regionData?.availableLocales,
			regionHosting: regionHostingList[region]
		},
		credentials: {
			accessToken: accessToken
		}
	}
}