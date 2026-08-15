"use client";

import { useEffect, useState } from "react";

export default function AboutHero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const progress = Math.min(
        window.scrollY / window.innerHeight,
        1
      );

      setScrollProgress(progress);
    }

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  /*
   * Start zoomed in at 115%.
   * Gradually zoom out to 100% as the user
   * scrolls through the hero.
   */
  const backgroundSize =
    `${150 - scrollProgress * 40}%`;

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      {/* Sky background */}
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/pexels-olivers-32003607.jpg')",
          backgroundSize,
        }}
      />

      {/* Dark blue atmospheric overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#071B30]/50" />

      {/* Bottom fade into page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#06070A] via-[#06070A]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl pt-28">
        <div className="max-w-5xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-sky-400">
            Beyond Contrails
          </p>

          <h1 className="font-[var(--font-space)] text-6xl font-light leading-[0.95] tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[9rem]">
            Look beyond
            <br />
            <span className="text-white/40">
              the contrails.
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            A place for flight simulation, aviation, exploration and
            everything that makes looking towards the sky worth it.
          </p>
        </div>

        <div className="mt-20 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
          <span className="h-px w-12 bg-white/30" />
          The journey beyond the clouds
        </div>
      </div>
    </section>
  );
}