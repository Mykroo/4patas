import { Card } from "../molecules/Card";
import { Heading } from "../atoms/Heading";
import type { ReactElement } from "react";

const featuredPets = [
  {
    id: 1,
    name: "Fido",
    image: "/static/images/pet1.jpg",
    description: "A loving companion waiting for a home.",
    link: "/pets/1",
  },
  {
    id: 2,
    name: "Luna",
    image: "/static/images/pet2.jpg",
    description: "Playful and friendly, perfect for families.",
    link: "/pets/2",
  },
  {
    id: 3,
    name: "Max",
    image: "/static/images/pet3.jpg",
    description: "Gentle and loyal, looking for a forever home.",
    link: "/pets/3",
  },
];

export const FeaturedPets = (): ReactElement => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <Heading level={2} className="text-center mb-8">Featured Pets</Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPets.map((pet) => (
            <Card
              key={pet.id}
              imageSrc={pet.image}
              imageAlt={`Featured pet ${pet.name}`}
              title={pet.name}
              description={pet.description}
              linkHref={pet.link}
              linkLabel="Learn More"
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 