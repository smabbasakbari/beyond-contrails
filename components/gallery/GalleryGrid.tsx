"use client";

import { useState } from "react";
import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";

interface GalleryImage {
  src: string;
  title: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  limit?: number;
}

export default function GalleryGrid({
  images,
  limit,
}: GalleryGridProps) {
  const displayedImages = limit
    ? images.slice(0, limit)
    : images;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedImage =
    selectedIndex !== null ? displayedImages[selectedIndex] : null;

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {displayedImages.map((image, index) => (
          <GalleryCard
            key={image.src}
            src={image.src}
            title={image.title}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      <GalleryModal
        image={selectedImage?.src ?? null}
        title={selectedImage?.title ?? ""}
        onClose={() => setSelectedIndex(null)}
        onPrevious={() =>
          setSelectedIndex((selectedIndex! - 1 + displayedImages.length) % displayedImages.length)
        }
        onNext={() =>
          setSelectedIndex((selectedIndex! + 1) % displayedImages.length)
        }
      />
    </>
  );
}