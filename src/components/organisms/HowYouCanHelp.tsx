import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import type { ReactElement } from "react";

export const HowYouCanHelp = (): ReactElement => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Heading level={2} className="mb-8">How You Can Help</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heading level={3} className="mb-2">Adopt</Heading>
            <Text>Give a pet a forever home.</Text>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heading level={3} className="mb-2">Donate</Heading>
            <Text>Support our mission with a donation.</Text>
          </div>
        </div>
      </div>
    </section>
  );
}; 