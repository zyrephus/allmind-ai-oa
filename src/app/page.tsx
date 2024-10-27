import Features2 from "./components/Features2";
import GetStarted from "./components/GetStarted";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import UATHR from "./components/UATHR";
import Features from "./components/features/Features";

export default function () {
  return (
    <main>
      <HeroSection />
      <Features />
      <UATHR />
      <Partners />
      <Features2 />
      <GetStarted />
    </main>
  );
}
