import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { getGalleryImages } from "@/content/gallery";

export default async function GalleryPreview() {
  const images = await getGalleryImages();

  return (
    <Section>
      <SectionHeading
        eyebrow="Gallery"
        title="Favourite Moments"
        description="A selection of my favourite screenshots from Microsoft Flight Simulator."
      />

      <div className="mt-16">
        <GalleryGrid images={images} limit={6} />
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="/gallery"
          className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white transition hover:border-sky-400 hover:bg-white/10"
        >
          View Full Gallery →
        </a>
      </div>
    </Section>
  );
}