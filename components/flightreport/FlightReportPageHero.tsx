import Image from "next/image";

export default function FlightReportPageHero() {
  return (
    <section className="relative flex h-[70vh] items-center justify-center overflow-hidden">

      <Image
        src="/blog/blog_background.png"
        alt="Flight Reports"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <p className="text-sm uppercase tracking-[0.4em] text-sky-400">
          FLIGHT REPORTS
        </p>

        <h1 className="mt-6 text-6xl font-light text-white md:text-7xl">
          Beyond Contrails
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          Stories, cinematic flights and detailed reports documenting my
          journeys through Microsoft Flight Simulator.
        </p>

      </div>

    </section>
  );
}