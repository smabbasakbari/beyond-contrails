import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import TakeoffScene from "@/components/3d/TakeoffScene";
import FeaturedStory from "@/components/sections/FeaturedStory";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <TakeoffScene />

      <div className="relative z-0 mt-[-100vh]">
        <Hero />
      </div>

      <FeaturedStory />
      <GalleryPreview />
      <Footer />
    </>
  );
}