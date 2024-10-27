import Features2 from "./components/Features2";
import GetStarted from "./components/GetStarted";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import UATHR from "./components/UATTR";
import Features from "./components/features/Features";

const Page = () => {
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
};

export default Page;
