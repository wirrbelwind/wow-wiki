import { getLocation } from "@/features/localization";
import { BN_REGION_COOKIE_KEY } from "@/features/localization/config";
import { cookies } from "next/headers";

export default async function Home() {
  const {locale, region} = getLocation()

  return (
    <div>
      <div>
      locale: {locale}
      region: {region}
       
      </div>
      <div>
      </div>
    </div>
  );
}
