import { changeLanguage } from "./changeLanguage"

export const LanguageSelector = () => {

	return (
		<form action={changeLanguage}>
			<select name="lang">
				<option value="en_US">English (United States)</option>
				<option value="es_MX">Spanish (Mexico)</option>
				<option value="pt_BR">Portuguese</option>
				<option value="de_DE">German</option>
				<option value="en_GB">English (Great Britain)</option>
				<option value="es_ES">Spanish (Spain)</option>
				<option value="fr_FR">French</option>
				<option value="it_IT">Italian</option>
				<option value="ru_RU">Russian</option>
				<option value="ko_KR">Korean</option>
				<option value="zh_TW">Chinese (Traditional)</option>
				<option value="zh_CN">Chinese (Simplified)</option>
			</select>
		</form>
	)
}
