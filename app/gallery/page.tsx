import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { getGalleryImages } from "@/content/gallery";

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <main className="min-h-screen bg-[#06070A] text-white">
      <Navbar />

      <section className="px-6 pb-32 pt-40">
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-sky-400">
              The Gallery
            </p>

            <h1 className="mt-5 font-[var(--font-space)] text-5xl font-light tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Moments beyond
              <br />
              <span className="text-white/35">
                the contrails.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              A collection of aviation photography and moments from
              the virtual skies.
            </p>
          </div>

          {images.length > 0 ? (
            <GalleryGrid images={images} />
          ) : (
            <div className="rounded-2xl border border-white/[0.08] py-32 text-center">
              <p className="text-sm text-white/40">
                The gallery is currently empty.
              </p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}