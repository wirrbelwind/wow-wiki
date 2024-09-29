'use client'
import { useRouter } from "@/lib/i18n"
import { languageTag } from "@/paraglide/runtime"
import React from "react"
import { localeList } from "./config"


export const LanguageSelector = () => {
	const router = useRouter()

	const handleChange: React.ChangeEventHandler = (event) => {
		const locale = event.currentTarget.value

		router.push("/", { locale })
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
