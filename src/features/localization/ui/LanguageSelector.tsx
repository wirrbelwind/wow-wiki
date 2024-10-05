'use client'
import React, { ChangeEventHandler } from "react"
import { useRouterI18n } from "../model/i18n"
import { localeOptions } from "../config"
import { AvailableLanguageTag } from "../model/paraglide/runtime"
import { getActiveLocale } from "../model/getActiveLocale"

export const LanguageSelector = () => {
	const router = useRouterI18n()

	const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const locale = event.currentTarget.value as AvailableLanguageTag
		router.push(window.location.pathname, { locale })
	}

	const activeLocale = getActiveLocale()

	return (
		<select
			name="lang"
			value={activeLocale}
			onChange={handleChange}
		>
			{
				localeOptions.map((locale, index) => (
					<option
						key={index}
						value={locale.value}
					>
						{locale.title}
					</option>
				))
			}
		</select>
	)
}
