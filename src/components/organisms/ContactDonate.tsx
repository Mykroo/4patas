import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { LinkButton } from "../atoms/LinkButton";
import type { ReactElement } from "react";

export const ContactDonate = (): ReactElement => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Heading level={2} className="mb-8">Contact Us / Donate</Heading>
        <Text className="mb-8 text-lg">Get in touch with us or make a donation to support our cause.</Text>
        <div className="flex gap-4 justify-center">
          <LinkButton href="/contact" ariaLabel="Contact Us">
            Contact Us
          </LinkButton>
          <LinkButton href="/donate" ariaLabel="Donate Now" className="bg-green-500 hover:bg-green-600">
            Donate Now
          </LinkButton>
        </div>
      </div>
    </section>
  );
}; 