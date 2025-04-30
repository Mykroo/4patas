"use client";
import { Heading } from "../atoms/Heading";
import { LinkButton } from "../atoms/LinkButton";
import type { ReactElement } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export const Header = (): ReactElement => {
  const t = useTranslations("Navigation");
  const common = useTranslations("Common");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "es";
  
  const switchLocale = (newLocale: string) => {
    // Get path without locale
    const newPath = pathname.replace(/^\/(en|es)/, '') || '/';
    router.push(`/${newLocale}${newPath}`);
  };

  return (
    <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <img src="/images/drakotoon.png" alt={common("shelterName")} className="w-10 h-10 rounded-full" />
        <Heading level={2} className="text-blue-900 m-0">{common("shelterName")}</Heading>
      </div>
      <nav aria-label="Main navigation" className="flex gap-2 items-center">
        <LinkButton href={`/${currentLocale}`} ariaLabel={t("home")}>{t("home")}</LinkButton>
        <LinkButton href={`/${currentLocale}/adopt`} ariaLabel={t("pets")}>{t("pets")}</LinkButton>
        <LinkButton href={`/${currentLocale}/donate`} ariaLabel={t("donate")}>{t("donate")}</LinkButton>
        <div className="ml-4 flex gap-2">
          <button
            onClick={() => switchLocale("es")}
            className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Cambiar a Español"
          >
            Español
          </button>
          <button
            onClick={() => switchLocale("en")}
            className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Switch to English"
          >
            English
          </button>
        </div>
      </nav>
    </header>
  );
}; 