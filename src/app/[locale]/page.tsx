import { LandingPage } from "../../components/templates/LandingPage";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  // You can use getTranslations here if you want to fetch translations server-side
  return <LandingPage />;
} 