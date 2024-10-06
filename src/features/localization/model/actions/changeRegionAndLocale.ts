'use server'

import { cookies } from "next/headers"
import { BN_REGION_COOKIE_KEY, regionsOptions } from "../../config"
import { Locale, RegionKeyBN } from "../../types"
import { redirect } from "next/navigation"

export const changeRegionAndLocale = async (_: unknown, form: FormData) => {
	const regionKey = form.get('region') as RegionKeyBN
	const locale = form.get('locale') as Locale

	if (!regionKey) {
		return {
			errors: ['Region is not specified']
		}
	}

	if (!locale) {
		return {
			errors: ['Locale is not specified']
		}
	}

	const regionData = regionsOptions.find(data => data.value === regionKey)
	if (!regionData) {
		return {
			errors: [`Data of region ${regionKey} not found`]
		}
	}

	const isValidLocale = regionData.availableLocales.includes(locale)
	if (!isValidLocale) {
		return {
			errors: [`Locale ${locale} is not valid for region ${regionKey}`]
		}
	}

	const cookie = cookies()

	cookie.set(BN_REGION_COOKIE_KEY, regionKey)
	cookie.set('NEXT_LOCALE', locale, {
		path: '/'
	})


	redirect('/')
}
