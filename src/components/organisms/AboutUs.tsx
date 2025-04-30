"use client";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { ImageAtom } from "../atoms/ImageAtom";
import type { ReactElement } from "react";
import { useTranslations } from "next-intl";

export const AboutUs = (): ReactElement => {
  const t = useTranslations("about");
  
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Heading level={2} className="mb-4">{t("title")}</Heading>
        <Text className="mb-8 text-lg">
          {t("mission")}
        </Text>
        <ImageAtom
          src="/images/fininas.jpg"
          alt={t("imageAlt")}
          width={600}
          height={400}
          className="mx-auto"
        />
      </div>
    </section>
  );
}; 