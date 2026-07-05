"use client";

import Image from "next/image";
import useScroll from "@/hooks/useScroll";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Flights", href: "/flights" },
  { name: "Videos", href: "/videos" },
  { name: "Flight Reports", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {

  const scrolled = useScroll();

  return (
    <motion.header
    className="fixed inset-x-0 top-0 z-50 flex justify-center p-6"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 3,
      delay: 1,
      ease: [0.22, 1, 0.36, 1],
    }}>
      <nav
        className={`flex w-full max-w-7xl items-center justify-between rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "border-white/15 bg-black/65 shadow-2xl backdrop-blur-3xl px-6 py-3"
            : "border-white/10 bg-white/5 backdrop-blur-2xl px-8 py-5"
        }`}
      >
        {/* Left */}

        <div className="flex items-center gap-4">

          <Image
            src="/plane_w_clouds.svg"
            alt="Beyond Contrails"
            width={42}
            height={42}
          />

          <div>

            <p className="text-lg font-medium tracking-wide text-white">
              Beyond Contrails
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-sky-300">
              Flight Simulation
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex gap-10">

          

          {links.map((link) => (

          <Link
            key={link.name}
            href={link.href}
              className="group relative text-sm tracking-wide text-white/80 transition hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-sky-400 transition-all duration-300 group-hover:w-full" />

            </Link>

          ))}

        </div>

      </nav>
    </motion.header>
  );
}