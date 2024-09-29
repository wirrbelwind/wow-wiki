'use client'
import { AvailableLanguageTag, languageTag } from "@/features/localization/paraglide/runtime"
import React, { ChangeEventHandler } from "react"
import { localeList } from "./config"
import { useRouter } from "./i18n"

export const LanguageSelector = () => {
	const router = useRouter()

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
