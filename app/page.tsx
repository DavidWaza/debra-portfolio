import HeroBanner from "./components/Herobanner";
import AboutMeSection from "./components/AboutMeSection";
import CaseStudy from "./components/CaseStudy";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <AboutMeSection />
      <CaseStudy /> 
    </main>
  );
}

