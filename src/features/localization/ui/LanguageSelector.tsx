'use client'
import React, { ChangeEventHandler } from "react"
import { useRouterI18n } from "../model/i18n"
import { AvailableLanguageTag } from "../model/paraglide/runtime"
import { LocaleOption } from "../types"
import { getActiveLocale } from "../model/getActiveLocale"


interface LanguageSelectorProps {
	localesOptions: LocaleOption[]
}
export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ localesOptions }) => {
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
				localesOptions.map((locale, index) => (
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
