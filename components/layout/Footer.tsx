import Image from "next/image";
import Link from "next/link";

import {
  Plane,
  Camera,
  Play,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-white/10 bg-[#06070A]">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Logo & Branding */}
        <div className="relative flex flex-col items-center">

          {/* Glow */}
          <div className="absolute h-48 w-48 rounded-full bg-sky-500/5 blur-3xl" />

          <Image
            src="/plane_w_clouds.svg"
            alt="Beyond Contrails"
            width={72}
            height={72}
            className="relative z-10"
          />

          <h2 className="mt-6 text-center text-3xl font-light tracking-[0.14em] text-white">
            BEYOND CONTRAILS
          </h2>

          <p className="mt-4 text-center text-gray-400">
            Flight Simulation • Photography • Cinematic Storytelling
          </p>

          {/* Socials */}
          <div className="mt-14 text-center">

            <p className="mb-8 text-xs uppercase tracking-[0.4em] text-sky-400">
              Follow the Journey
            </p>

            <div className="flex items-center justify-center gap-14">

              {/* Instagram */}
              <Link
                href="https://instagram.com/beyondcontrails"
                target="_blank"
                className="group flex flex-col items-center gap-3"
              >
                <div className="rounded-full border border-white/10 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sky-400 group-hover:bg-white/5">
                  <Camera
                    size={24}
                    className="text-gray-400 transition group-hover:text-sky-400"
                  />
                </div>

                <span className="text-sm tracking-wide text-gray-400 transition group-hover:text-white">
                  Instagram
                </span>
              </Link>

              {/* YouTube */}
              <Link
                href="https://youtube.com/@beyondcontrails"
                target="_blank"
                className="group flex flex-col items-center gap-3"
              >
                <div className="rounded-full border border-white/10 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sky-400 group-hover:bg-white/5">
                  <Play
                    size={24}
                    className="text-gray-400 transition group-hover:text-sky-400"
                  />
                </div>

                <span className="text-sm tracking-wide text-gray-400 transition group-hover:text-white">
                  YouTube
                </span>
              </Link>

              {/* Volanta */}
              <Link
                href="https://fly.volanta.app/profile/smabbasakbari/statistics"
                target="_blank"
                className="group flex flex-col items-center gap-3"
              >
                <div className="rounded-full border border-white/10 p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-sky-400 group-hover:bg-white/5">
                  <Plane
                    size={24}
                    className="text-gray-400 transition group-hover:text-sky-400"
                  />
                </div>

                <span className="text-sm tracking-wide text-gray-400 transition group-hover:text-white">
                  Volanta
                </span>
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-24 flex flex-col items-center justify-between border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Beyond Contrails. All rights reserved.
          </p>

          <p className="tracking-wide">
            Owned &amp; Managed by{" "}
            <span className="font-medium text-white">
              Abbas Akbari
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}