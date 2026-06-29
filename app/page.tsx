import HomeHeroV2 from "./components/home/HomeHeroV2";
import ApproachStrip from "./components/home/ApproachStrip";
import TeamBand from "./components/home/TeamBand";
import QuoteSection from "./components/home/QuoteSection";

export default function HomePage() {
  return (
    <>
      <HomeHeroV2 />
      <ApproachStrip />
      <TeamBand />
      <QuoteSection />
    </>
  );
}
