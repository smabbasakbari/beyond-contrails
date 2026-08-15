import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import TakeoffScene from "@/components/3d/TakeoffScene";
import FeaturedStory from "@/components/sections/FeaturedStory";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Footer from "@/components/layout/Footer";
import IntroLoader from "@/components/loader/IntroLoader";

export default function Home() {
  return (
    <>
      <IntroLoader />

      <Navbar />

      <TakeoffScene />

      <Hero />

      <FeaturedStory />

      <GalleryPreview />

      <Footer />
    </>
  );
}