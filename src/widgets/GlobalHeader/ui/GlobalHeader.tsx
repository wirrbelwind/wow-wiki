import { ButtonOpenLocaleSelector } from "@/features/localization"
import { Navigation } from "./Navigation"


export const GlobalHeader = async () => {

	return (
		<div className="border-b-orange-600 border-b-2 flex px-4 py-6">
			<Navigation />
			<div className="ml-auto">
				<ButtonOpenLocaleSelector />
			</div>
		</div>
	)
}
