import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";


export const metadata: Metadata = {
  title: "Contact Us – Yenom Market | Get In Touch",
  description:
    "Contact Yenom Market for MSME loans, bridge funding, private finance, and financial advisory. We are based in West Mambalam, Chennai.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <ContactHero />
      <ContactSection />

    </main>
  );
}
