import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { ImageAtom } from "../atoms/ImageAtom";
import type { ReactElement } from "react";

export const AboutUs = (): ReactElement => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Heading level={2} className="mb-4">About Us</Heading>
        <Text className="mb-8 text-lg">
          We are dedicated to finding loving homes for pets in need. Our mission is to provide shelter, care, and a second chance for every animal.
        </Text>
        <ImageAtom
          src="/static/images/fininas.jpg"
          alt="About us image"
          width={600}
          height={400}
          className="mx-auto"
        />
      </div>
    </section>
  );
}; 