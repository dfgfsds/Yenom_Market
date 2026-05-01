import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceSidebar from "@/components/services/ServiceSidebar";
import ServiceContent from "@/components/services/ServiceContent";

import { notFound } from "next/navigation";

import servicesDataRaw from "@/data/services.json";

// Service data structure
const servicesData = servicesDataRaw as Record<string, any>;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} – Yenom Market | Financial Services`,
    description: service.description1.substring(0, 160),
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen">
      <ServiceHero title={service.title} backgroundImage={service.image1} />

      <section className="py-20 px-4 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">

          {/* SIDEBAR - Hidden on mobile, visible on lg screens */}
          <aside className="hidden lg:flex lg:w-1/3 flex-col gap-10">
            <ServiceSidebar currentSlug={slug} />
          </aside>

          {/* MAIN CONTENT */}
          <div className="w-full lg:w-2/3">
            <ServiceContent data={service} />
          </div>

        </div>
      </section>


    </main>
  );
}
