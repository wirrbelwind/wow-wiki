import { cookies } from "next/headers"

export const changeLanguage = (form: FormData) => {
	const lang = form.get("lang")

	const cookiesManager = cookies()
	cookiesManager.set("lang", lang)
}
