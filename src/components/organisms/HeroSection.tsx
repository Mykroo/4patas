import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { ImageAtom } from "../atoms/ImageAtom";
import { LinkButton } from "../atoms/LinkButton";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] py-12 px-4 bg-gradient-to-br from-blue-100 to-green-100">
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
        <Heading level={1} className="mb-4 text-blue-900 drop-shadow-lg">
          Welcome to Shelter 4Patas
        </Heading>
        <Text className="mb-8 text-xl text-blue-800 max-w-xl">
          Find your new best friend today
        </Text>
        <div className="flex gap-4 justify-center md:justify-start">
          <LinkButton href="/adopt" ariaLabel="Adopt a pet">
            Adopt
          </LinkButton>
          <LinkButton href="/donate" ariaLabel="Donate to shelter" className="bg-green-500 hover:bg-green-600">
            Donate
          </LinkButton>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <ImageAtom
          src="/static/images/drakotoon.png"
          alt="Mascot cartoon dog for Shelter 4Patas"
          width={400}
          height={400}
          className="shadow-2xl border-4 border-white bg-white"
          priority
        />
      </div>
    </section>
  );
}; 