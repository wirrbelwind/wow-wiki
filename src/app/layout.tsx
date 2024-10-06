import { LanguageProvider } from "@inlang/paraglide-next"
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import './tailwind.css'
import { Providers } from "./providers"
import { GlobalHeader } from "@/widgets/GlobalHeader";
import { getLocation, LocaleSelectorModal, validateActiveRegion } from "@/features/localization";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const isRegionValid = validateActiveRegion()

  return (
    <LanguageProvider>
      <html lang={getLocation().locale} className="dark">
        <body>
          <Providers>
            {isRegionValid.type !== 'fulfilled' && <LocaleSelectorModal closable={false} />}
            <GlobalHeader />
            {children}
          </Providers>
        </body>
      </html>
    </LanguageProvider>
  );
}
