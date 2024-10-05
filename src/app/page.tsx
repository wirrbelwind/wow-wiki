import { getActiveLocale } from "@/features/localization/model/getActiveLocale";
import { cookies } from "next/headers";

export default async function Home() {

  return (
    <div>
      <div>
        LANG: {getActiveLocale()}
      </div>

      <div>
        REGION: {cookies().get('BN_REGION')?.value}
      </div>
    </div>
  );
}
