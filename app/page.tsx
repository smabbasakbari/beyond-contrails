import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import FeaturedStory from "@/components/sections/FeaturedStory";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedStory />
      <GalleryPreview />
      <Footer />
    </>
  );
}