import * as m from "@/features/localization/model/paraglide/messages.js"
import Link from "next/link";

export default async function Home() {

  return (
    <div>
      123
      {m.hello()}
      <Link href="/login">Login</Link>
    </div>
  );
}
