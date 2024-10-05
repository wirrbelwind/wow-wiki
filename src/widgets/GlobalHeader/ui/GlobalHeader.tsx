import { LanguageSelector } from "@/features/localization"
import { getActiveRegion } from "@/features/localization/model/getActiveRegion"
import { getLocalesOptions } from "@/features/localization/model/getLocalesOptions"
import { RegionSelector } from "@/features/localization/ui/RegionSelector"

export const GlobalHeader = async () => {
	const { regionKey } = await getActiveRegion()
	const localesOptions = await getLocalesOptions()

	return (
		<div className="border-b-orange-600 border-b-2 flex px-4 py-6">
			<div className="ml-auto">
				<RegionSelector activeRegion={regionKey} />
				<LanguageSelector localesOptions={localesOptions} />
			</div>
		</div>
	)
}
