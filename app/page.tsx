import Image from "next/image";
import HeroBanner from "./components/Herobanner";
import AboutMeSection from "./components/AboutMeSection";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <AboutMeSection />
    </main>
  );
}

