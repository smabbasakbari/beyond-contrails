"use client";

import TakeoffScene from "@/components/3d/TakeoffScene";

export default function ThreeDTestPage() {
  return (
    <main className="bg-[#06070A]">
      <TakeoffScene />

      <section className="flex min-h-screen items-center justify-center bg-[#06070A] text-white">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-400">
            Beyond Contrails
          </p>

          <h1 className="text-6xl font-light">
            The Journey Continues
          </h1>
        </div>
      </section>
    </main>
  );
}