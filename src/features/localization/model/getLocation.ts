import { cookies } from "next/headers";
import { RegionKeyBN } from "../types";
import { languageTag } from "./paraglide/runtime";
import { BN_REGION_COOKIE_KEY, regionHostingList, regionsOptions } from "../config";
import { localeToBNLocale } from "./convert-locale/localeToBNLocale";

export const getLocation = () => {
	const region = cookies().get(BN_REGION_COOKIE_KEY)?.value as RegionKeyBN
	const locale = languageTag()

	const regionData = regionsOptions.find(data => data.value === region)

	return {
		locale,
		localeBN: localeToBNLocale(locale),

		region,
		regionTitle: regionData?.title,
		regionLocales: regionData?.availableLocales,
		regionHosting: regionHostingList[region]
	}
}
