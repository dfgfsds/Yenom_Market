import type { Metadata } from "next";
import AboutPageHero from "@/components/about/AboutPageHero";
import AboutIntro from "@/components/about/AboutIntro";
import WhyFundraise from "@/components/about/WhyFundraise";
import MissionVision from "@/components/about/MissionVision";

export const metadata: Metadata = {
  title: "About Us – Yenom Market | Trusted Financial Services",
  description:
    "Learn about Yenom Market – a leading provider of innovative financial services including MSME loans, bridge funding, IPO advisory, and more.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <AboutPageHero />
      <AboutIntro />
      <WhyFundraise />
      <MissionVision />
    </main>
  );
}
