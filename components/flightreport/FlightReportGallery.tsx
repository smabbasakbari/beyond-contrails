import Image from "next/image";

import { BlogPost } from "@/types/blog";

interface Props {
  report: BlogPost;
}

export default function FlightReportGallery({ report }: Props) {
  if (!report.gallery?.length) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-10 text-center text-5xl font-light text-white">
        Gallery
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {report.gallery.map((image, index) => (
          <div
            key={image}
            className="group relative aspect-video overflow-hidden rounded-3xl"
          >
            <Image
              src={image}
              alt={`${report.title} ${index + 1}`}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/35" />
          </div>
        ))}
      </div>
    </section>
  );
}