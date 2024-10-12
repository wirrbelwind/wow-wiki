import { getUser } from "@/shared/utils/getUser";

export default async function Home() {
  const { location: { locale, region } } = getUser()

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
