"use client";
import { Card } from "../molecules/Card";
import { Heading } from "../atoms/Heading";
import type { ReactElement } from "react";
import { featuredPets } from "../../lib/pets";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export const FeaturedPets = (): ReactElement => {
  const home = useTranslations("Home");
  const common = useTranslations("Common");
  const t = useTranslations();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "es";

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <Heading level={2} className="text-center mb-8">{home("featuredPets")}</Heading>
        {featuredPets.length === 0 ? (
          <div className="text-center text-gray-500" data-testid="no-pets">{common("noPets")}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-testid="pet-list">
            {featuredPets.map((pet) => (
              <Card
                key={pet.id}
                imageSrc={pet.image}
                imageAlt={t(pet.nameKey)}
                title={t(pet.nameKey)}
                description={t(pet.descriptionKey)}
                linkHref={`/${currentLocale}${pet.link}`}
                linkLabel={common("learnMore")}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}; 