'use client'
import React, { ChangeEventHandler } from "react"
import { useRouterI18n } from "../model/i18n"
import { localeList } from "../config"
import { AvailableLanguageTag, languageTag } from "../model/paraglide/runtime"

export const LanguageSelector = () => {
	const router = useRouterI18n()

	const handleChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const locale = event.currentTarget.value as AvailableLanguageTag
		router.push(window.location.pathname, { locale })
	}

	const activeLocale = languageTag()

	return (
		<select
			name="lang"
			value={activeLocale}
			onChange={handleChange}
		>
			{
				localeList.map((locale, index) => (
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