import type { Metadata } from "next";
import CareerHero from "@/components/career/CareerHero";
import CareerOpportunities from "@/components/career/CareerOpportunities";
import CareerForm from "@/components/career/CareerForm";


export const metadata: Metadata = {
  title: "Career – Yenom Market | Join Our Team",
  description:
    "Explore career opportunities at Yenom Market. Work from home, part-time jobs, and student-friendly roles in financial services.",
};

export default function CareerPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <CareerHero />
      <CareerOpportunities />
      <CareerForm />

    </main>
  );
}
