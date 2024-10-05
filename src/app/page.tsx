import { getActiveLocale } from "@/features/localization";
import { getActiveRegion } from "@/features/localization/model/getActiveRegion";

export default async function Home() {
  // const locale = getActiveLocale()
  const region = await getActiveRegion()

  return (
    <div>
      <div>
        {/* locale: {locale} */}
      </div>

      <div>
        {JSON.stringify(region)}
      </div>
    </div>
  );
}
