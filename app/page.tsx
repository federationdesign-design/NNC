import HomeHeroV2 from "./components/home/HomeHeroV2";
import UtilityBar2 from "./components/home/UtilityBar2";
import TeamBand2 from "./components/home/TeamBand2";
import QuoteSection from "./components/home/QuoteSection";

export const metadata = {
  title: "Nurturing Nests Care | Specialist Residential Care in Kent",
  description: "Small, structured children's homes in Kent providing therapeutic residential care for children with emotional, behavioural and relational needs. Ofsted Good Provider.",
};

export default function HomePage() {
  return (
    <>
      <HomeHeroV2 />
      <UtilityBar2 />
      <TeamBand2 />
      <QuoteSection />
    </>
  );
}
