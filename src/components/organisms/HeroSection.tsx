"use client";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { ImageAtom } from "../atoms/ImageAtom";
import { LinkButton } from "../atoms/LinkButton";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";

export const HeroSection = (): ReactElement => {
  const t = useTranslations("home");
  const nav = useTranslations("navigation");
  const common = useTranslations("common");
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "es";

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] py-12 px-4 bg-gradient-to-br from-blue-100 to-green-100">
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
        <Heading level={1} className="mb-4 text-blue-900 drop-shadow-lg">
          {t("heroTitle")}
        </Heading>
        <Text className="mb-8 text-xl text-blue-800 max-w-xl">
          {t("heroSubtitle")}
        </Text>
        <div className="flex gap-4 justify-center md:justify-start">
          <LinkButton href={`/${currentLocale}/adopt`} ariaLabel={nav("pets")}>
            {nav("pets")}
          </LinkButton>
          <LinkButton href={`/${currentLocale}/donate`} ariaLabel={nav("donate")} className="bg-green-500 hover:bg-green-600">
            {nav("donate")}
          </LinkButton>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <ImageAtom
          src="/images/drakotoon.png"
          alt={`${common("shelterName")} mascot`}
          width={400}
          height={400}
          className="shadow-2xl border-4 border-white bg-white"
          priority
        />
      </div>
    </section>
  );
}; 