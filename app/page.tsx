import HomeHeroV2 from "./components/home/HomeHeroV2";
import UtilityBar2 from "./components/home/UtilityBar2";
import TeamBand2 from "./components/home/TeamBand2";
import QuoteSection from "./components/home/QuoteSection";

export default function HomePage() {
  return (
    <div style={{ position: "relative" }}>
      <HomeHeroV2 />
      <UtilityBar2 />
      <TeamBand2 />
      <QuoteSection />
    </div>
  );
}
