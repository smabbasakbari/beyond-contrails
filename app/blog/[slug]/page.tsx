import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { client } from "@/lib/sanity/client";
import { flightReportBySlugQuery } from "@/lib/sanity/queries";

import FlightReportHero from "@/components/flightreport/FlightReportHero";
import FlightReportDetails from "@/components/flightreport/FlightReportDetails";
import FlightReportBody from "@/components/flightreport/FlightReportBody";
import FlightReportGallery from "@/components/flightreport/FlightReportGallery";
import FlightReportTags from "@/components/flightreport/FlightReportTags";
import YouTubeEmbed from "@/components/flightreport/YouTubeEmbed";

export default async function FlightReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const report = await client.fetch(
    flightReportBySlugQuery,
    { slug }
  );

  if (!report) {
    return <div>Flight Report not found.</div>;
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#06070A] text-white">

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