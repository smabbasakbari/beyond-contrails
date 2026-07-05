import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import FlightReportPageHero from "@/components/flightreport/FlightReportPageHero";
import FlightReportGrid from "@/components/flightreport/FlightReportGrid";

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#06070A] text-white">

        <FlightReportPageHero />

        <FlightReportGrid />

      </main>

      <Footer />
    </>
  );
}