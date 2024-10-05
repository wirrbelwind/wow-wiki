import { LanguageSelector } from "@/features/localization"
import { RegionSelector } from "@/features/localization/ui/RegionSelector"

export const GlobalHeader = () => {
	return (
		<div className="border-b-orange-600 border-b-2 flex px-4 py-6">
			<div className="ml-auto">
				<LanguageSelector />
				<RegionSelector />
			</div>
		</div>
	)
}
