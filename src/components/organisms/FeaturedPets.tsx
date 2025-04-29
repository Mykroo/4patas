import { Card } from "../molecules/Card";
import { Heading } from "../atoms/Heading";
import type { ReactElement } from "react";
import { featuredPets } from "../../lib/pets";

export const FeaturedPets = (): ReactElement => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <Heading level={2} className="text-center mb-8">Featured Pets</Heading>
        {featuredPets.length === 0 ? (
          <div className="text-center text-gray-500" data-testid="no-pets">No pets found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-testid="pet-list">
            {featuredPets.map((pet) => (
              <Card
                key={pet.id}
                imageSrc={pet.image}
                imageAlt={pet.nameKey}
                title={pet.nameKey}
                description={pet.descriptionKey}
                linkHref={pet.link}
                linkLabel="Learn More"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}; 