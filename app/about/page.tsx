import Link from "next/link";
import AboutHero from "@/components/about/AboutHero";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#06070A] text-white">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <AboutHero />

      {/* =========================================================
          THE PHILOSOPHY
      ========================================================= */}

      <section
        id="idea"
        className="scroll-mt-32 border-t border-white/[0.06] px-6 py-32 md:py-44"
        >
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.8fr_1.2fr] md:gap-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-sky-400">
              The idea
            </p>

            <h2 className="mt-6 font-[var(--font-space)] text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl">
              More than
              <br />
              just a flight simulator.
            </h2>
          </div>

          <div className="max-w-2xl space-y-7 text-base leading-8 text-white/75 sm:text-lg">
            <p>
              Beyond Contrails was created to give a hobby some sort of an identity.
              Something more than simply putting flights under a name.
            </p>

            <p>
              But the name means something more too. To look beyond the
              contrails is to look beyond what is immediately in front of us.
              Basically, beyond the everyday, towards the places we want to go, the
              things we want to achieve, and the experiences we have yet to
              discover!
            </p>

            <p>
              For me, flight simulation is not always about chasing the most
              realistic flight or the perfect landing. Sometimes it is a
              late-night cruise with a playlist in the background. Sometimes
              it is a long-haul flight with Netflix running on the other
              screen. Sometimes it is about the friends (aka passengers) who 
              join my livestream (board the flight) to have a chat. 
            </p>

            <p>
              But every single flight is simply a way to switch off from the chaos of
              everyday life.
            </p>

            <p className="text-white/80">
              <span className="text-sky-400">Beyond Contrails</span> is my
              attempt to share that feeling with you.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
            THE JOURNEY / STATS
          ========================================================= */}

        <section
        id="journey"
        className="scroll-mt-32 px-6 pb-32 md:pb-44"
        >
        <div className="mx-auto max-w-7xl">

            <div className="mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-sky-400">
                The journey
            </p>

            <h2 className="mt-5 font-[var(--font-space)] text-4xl font-light tracking-[-0.03em] sm:text-5xl">
                Behind the brand.
            </h2>
            </div>

            <div className="grid gap-12 md:grid-cols-[1fr_0.85fr] md:items-start">

            {/* LEFT — Story + Stats */}
            <div>

                <div className="max-w-3xl text-base leading-8 text-white/55 sm:text-lg">
                <p>
                    Behind Beyond Contrails is an aviation enthusiast, Abbas, who spends a
                    considerable amount of time - which may be unhealthy - in the virtual skies. The focus is
                    primarily on Microsoft Flight Simulator 2024, with a particular
                    weakness for widebody aircraft, although the smaller aircraft
                    get their turn too!
                </p>

                <p className="mt-6">
                    What began as a hobby became something I wanted to give an
                    identity of its own. Beyond Contrails is the result. It is a place to
                    share the flights, experiences and moments that make aviation so
                    enjoyable.
                </p>
                </div>

                {/* Stats */}
                <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/0.08 bg-white/0.08 sm:grid-cols-2">

                {/* VATSIM */}
                <div className="bg-[#080A0E] p-8 sm:p-10">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/85">
                    VATSIM hours
                    </p>

                    <p className="mt-5 font-[var(--font-space)] text-5xl font-light tracking-[-0.04em] sm:text-6xl">
                    1,250<span className="text-sky-400">+</span>
                    </p>

                    <p className="mt-4 text-sm leading-6 text-white/75">
                    hours spent navigating the virtual skies with live Air Traffic Control.
                    </p>
                </div>

                {/* Landing */}
                <div className="bg-[#080A0E] p-8 sm:p-10">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/85">
                    Average landing rate
                    </p>

                    <p className="mt-5 font-[var(--font-space)] text-5xl font-light tracking-[-0.04em] sm:text-6xl">
                    −209<span className="text-sky-400"> fpm</span>
                    </p>

                    <p className="mt-4 text-sm leading-6 text-white/75">
                    The occasional hard landing does happen, though.
                    </p>
                </div>

                </div>

            </div>

            {/* RIGHT — Portrait */}
            <div className="relative">

                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">

                <Image
                    src="/images/about-me.jpg"
                    alt="The creator of Beyond Contrails"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                />

                {/* Subtle atmospheric overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06070A]/40 via-transparent to-transparent" />

                </div>

                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white/55">
                Behind Beyond Contrails
                </p>

            </div>

            </div>

        </div>
        </section>

      {/* =========================================================
          WHAT YOU'LL FIND
      ========================================================= */}

      <section
        id="platform"
        className="scroll-mt-32 border-y border-white/[0.06] px-6 py-32 md:py-44"
        >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-sky-400">
              The platform
            </p>

            <h2 className="mt-5 font-[var(--font-space)] text-4xl font-light tracking-[-0.03em] sm:text-5xl">
              What you&apos;ll find here.
            </h2>
          </div>

          <div className="divide-y divide-white/0.08 border-y border-white/0.08">
            <AboutFeature
              number="01"
              title="Flights"
              description="Virtual flights across the world, from short regional hops to long-haul widebody journeys."
            />

            <AboutFeature
              number="02"
              title="Livestreams"
              description="Live flights, conversations, requests and whatever happens along the way. Come for the aviation, stay for the chat."
            />

            <AboutFeature
              number="03"
              title="Cinematic Flights"
              description="Full-flight videos with proper editing, storytelling, 
                           and cinematography, rather than simply uploading an entire livestream. These are planned for the future."
            />

            <AboutFeature
              number="04"
              title="Flight Reports"
              description="A record of the journey — aircraft, route, performance and the details that make every flight different."
            />

            <AboutFeature
              number="05"
              title="Photography"
              description="Aviation imagery from the virtual world, with real-world travel and photography potentially becoming part of the journey too."
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          FLIGHT DECK
      ========================================================= */}

      <section
        id="flight-deck"
        className="scroll-mt-32 px-6 py-32 md:py-44"
        >
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-sky-400">
              The flight deck
            </p>

            <h2 className="mt-5 font-[var(--font-space)] text-4xl font-light tracking-[-0.03em] sm:text-5xl">
              Built around
              <br />
              the experience.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              The hardware and software might change over time, but the goal
              stays the same: make every flight feel like a journey worth
              taking.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.05]">
            <FlightDeckRow
              label="Simulator"
              value="Microsoft Flight Simulator 2024"
            />

            <FlightDeckRow
              label="Network"
              value="VATSIM"
            />

            <FlightDeckRow
              label="Controller"
              value="Logitech X56 HOTAS"
            />

            <FlightDeckRow
              label="Favourite"
              value="Widebody / Long-haul"
            />

            <FlightDeckRow
              label="Also enjoy"
              value="The baby planes"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMUNITY
      ========================================================= */}

      <section
        id="community"
        className="relative scroll-mt-32 overflow-hidden border-t border-white/[0.06] px-6 py-32 md:py-44"
        >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/[0.04] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-sky-400">
            The community - You
          </p>

          <h2 className="mt-6 font-[var(--font-space)] text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl">
            A place to
            <br />
            <span className="text-white/40">switch off.</span>
          </h2>

          <div className="mx-auto mt-10 max-w-2xl space-y-6 text-base leading-8 text-white/55 sm:text-lg">
            <p>
              You might come here because you are interested in an aircraft.
              You might discover a flight report, watch a cinematic flight, or
              join a livestream and request a route.
            </p>

            <p>
              Or perhaps you just want somewhere to sit for a while and talk
              about aviation or absolutely anything else.
            </p>

            <p className="text-white/75">
              Aviation is the common thread, but the real purpose is to create
              somewhere to escape for a little while. Anyone is welcome on board!
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING
      ========================================================= */}

      <section className="px-6 pb-40 pt-20">
        <div className="mx-auto max-w-7xl border-t border-white/[0.08] pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-sky-400">
            Beyond Contrails
          </p>

          <h2 className="mt-8 max-w-5xl font-[var(--font-space)] text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-8xl">
            Wherever you&apos;re going,
            <br />
            <span className="text-white/35">look beyond.</span>
          </h2>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Explore Flights
            </Link>

            <Link
              href="/gallery"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/[0.06]"
            >
              View Gallery
            </Link>

            <a
              href="https://www.youtube.com/@beyondcontrails"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/[0.06]"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


/* =============================================================
   COMPONENTS
============================================================= */

function AboutFeature({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group grid gap-6 py-9 transition-colors duration-300 hover:bg-white/[0.015] md:grid-cols-[80px_260px_1fr] md:items-center">
      <span className="text-xs tracking-[0.2em] text-white/25">
        {number}
      </span>

      <h3 className="font-[var(--font-space)] text-2xl font-light tracking-[-0.02em]">
        {title}
      </h3>

      <p className="max-w-2xl text-sm leading-7 text-white/45">
        {description}
      </p>
    </div>
  );
}


function FlightDeckRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-6 border-b border-white/[0.07] px-6 py-5 last:border-b-0 sm:grid-cols-[140px_1fr]">
      <span className="text-xs uppercase tracking-[0.2em] text-white/30">
        {label}
      </span>

      <span className="text-sm text-white/70">
        {value}
      </span>
    </div>
  );
}