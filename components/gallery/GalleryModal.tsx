"use client";

import Image from "next/image";
import GalleryWatermark from "./GalleryWatermark";
import GalleryNavigation from "./GalleryNavigation";

interface GalleryModalProps {
  image: string | null;
  title: string;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function GalleryModal({
  image,
  title,
  onClose,
  onNext,
  onPrevious,
}: GalleryModalProps) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/90 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image}
          alt={title}
          width={1800}
          height={1000}
          draggable={false}
          className="select-none rounded-2xl"
        />

        <GalleryWatermark />

        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-black/50 px-4 py-2 text-white"
        >
          ✕
        </button>

        <GalleryNavigation
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  );
}