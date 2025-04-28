import { Card } from "../molecules/Card";
import { Heading } from "../atoms/Heading";
import type { ReactElement } from "react";

const successStories = [
  {
    id: 1,
    name: "Bella",
    image: "/static/images/success1.jpg",
    description: "Bella found her forever home and is now living happily with her new family.",
  },
  {
    id: 2,
    name: "Charlie",
    image: "/static/images/success2.jpg",
    description: "Charlie overcame many challenges and is now thriving in a loving environment.",
  },
];

export const SuccessStories = (): ReactElement => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Heading level={2} className="mb-8">Success Stories</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.map((story) => (
            <Card
              key={story.id}
              imageSrc={story.image}
              imageAlt={`Success story ${story.name}`}
              title={story.name}
              description={story.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 