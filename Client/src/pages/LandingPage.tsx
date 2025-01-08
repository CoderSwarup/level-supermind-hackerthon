import Cta from "@/components/LandingPage/cta";
import Features from "@/components/LandingPage/features";
import Header from "@/components/LandingPage/Header";
import HeroHome from "@/components/LandingPage/hero-home";
import Workflows from "@/components/LandingPage/workflows";

export default function LandingPage() {
  return (
    <div className="w-screen bg-black">
      <Header />
      <HeroHome />
      <Workflows />
      <Features />
      <Cta />
    </div>
  );
}
