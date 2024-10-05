import { getActiveLocale } from "@/features/localization";
import { getActiveBNRegion } from "@/features/localization/model/getActiveBNRegion";

export default async function Home() {
  const locale = getActiveLocale()
  const region = await getActiveBNRegion()

  return (
    <div>
      <div>
      locale: {locale}
      </div>

      <div>
      region: {region.regionKey}
      </div>
    </div>
  );
}
