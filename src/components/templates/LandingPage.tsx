import { HeroSection } from "../organisms/HeroSection";
import { AboutUs } from "../organisms/AboutUs";
import { FeaturedPets } from "../organisms/FeaturedPets";
import { HowYouCanHelp } from "../organisms/HowYouCanHelp";
import { SuccessStories } from "../organisms/SuccessStories";
import { ContactDonate } from "../organisms/ContactDonate";
import { Header } from "../organisms/Header";

export const LandingPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main role="main">
        <HeroSection />
        <AboutUs />
        <FeaturedPets />
        <HowYouCanHelp />
        <SuccessStories />
      </main>
      <footer role="contentinfo">
        <ContactDonate />
      </footer>
    </>
  );
}; 