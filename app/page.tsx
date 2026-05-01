import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkProcess from "@/components/WorkProcess";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import PopupModal from "@/components/PopupModal";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <WorkProcess />
      <Testimonials />
      <Partners />
      <PopupModal />
    </main>
  );
}
