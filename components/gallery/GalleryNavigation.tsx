interface GalleryNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function GalleryNavigation({
  onPrevious,
  onNext,
}: GalleryNavigationProps) {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-8 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-4 text-white backdrop-blur-lg transition hover:bg-black/60"
      >
        ←
      </button>

      <button
        onClick={onNext}
        className="absolute right-8 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-4 text-white backdrop-blur-lg transition hover:bg-black/60"
      >
        →
      </button>
    </>
  );
}