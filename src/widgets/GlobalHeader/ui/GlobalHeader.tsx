import { LanguageSelector } from "@/features/localization"
import { getActiveBNRegion } from "@/features/localization/model/getActiveBNRegion"
import { getLocalesOptions } from "@/features/localization/model/getLocalesOptions"
import { RegionSelector } from "@/features/localization/ui/RegionSelector"

export const GlobalHeader = async () => {
	const activeRegion = await getActiveBNRegion()
	const localesOptions = await getLocalesOptions()

	return (
		<div className="border-b-orange-600 border-b-2 flex px-4 py-6">
			<div className="ml-auto">
				<RegionSelector activeRegion={activeRegion} />
				<LanguageSelector localesOptions={localesOptions} />
			</div>
		</div>
	)
}
