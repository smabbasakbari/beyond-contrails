import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FlightReportHero from "@/components/flightreport/FlightReportHero";
import FlightReportDetails from "@/components/flightreport/FlightReportDetails";
import FlightReportBody from "@/components/flightreport/FlightReportBody";
import FlightReportGallery from "@/components/flightreport/FlightReportGallery";
import FlightReportTags from "@/components/flightreport/FlightReportTags";
import YouTubeEmbed from "@/components/flightreport/YouTubeEmbed";

import { getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function FlightReportPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const report = getPostBySlug(slug);

  if (!report) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#06070A] text-white">

        <FlightReportHero report={report} />

        <FlightReportDetails report={report} />

        <FlightReportBody report={report} />

        <FlightReportGallery report={report} />

        <YouTubeEmbed report={report} />

        <FlightReportTags report={report} />

      </main>

      <Footer />
    </>
  );
}