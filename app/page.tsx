import Navbar from "@/components/navbar";
import HeroBanner from "@/components/hero-banner";
import HeroSection from "@/components/hero-section";
import ClientLogos from "@/components/client-logos";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <HeroSection />
      <ClientLogos />
    </>
  );
}
