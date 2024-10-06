import { getActiveLocale } from "@/features/localization";
import { BN_REGION_COOKIE_KEY } from "@/features/localization/config";
import { getActiveRegion } from "@/features/localization/model/getActiveRegion";
import { cookies } from "next/headers";

export default async function Home() {
  const locale = getActiveLocale()

  return (
    <div>
      <div>
        locale: {locale}
       
      </div>
      <div>
      region: {cookies().get(BN_REGION_COOKIE_KEY)?.value}
      </div>
    </div>
  );
}
