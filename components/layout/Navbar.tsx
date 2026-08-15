"use client";

import Image from "next/image";
import useScroll from "@/hooks/useScroll";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Flights", href: "/flights" },
  { name: "Videos", href: "/videos" },
  { name: "Flight Reports", href: "/blog" },
];

const aboutLinks = [
  { name: "The Idea", href: "/about#idea" },
  { name: "The Journey", href: "/about#journey" },
  { name: "The Platform", href: "/about#platform" },
  { name: "The Flight Deck", href: "/about#flight-deck" },
  { name: "The Community", href: "/about#community" },
];

export default function Navbar() {
  const scrolled = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setAboutOpen(false);
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex justify-center p-3 sm:p-4 md:p-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 3,
        delay: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <nav
        className={`relative flex w-full max-w-7xl items-center justify-between rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "border-white/15 bg-black/65 px-4 py-3 shadow-2xl backdrop-blur-3xl sm:px-6"
            : "border-white/10 bg-white/5 px-4 py-4 backdrop-blur-2xl sm:px-6 sm:py-5 md:px-8"
        }`}
      >
        {/* =====================================================
            LOGO
        ====================================================== */}

        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex min-w-0 items-center gap-3"
        >
          <Image
            src="/plane_w_clouds.svg"
            alt="Beyond Contrails"
            width={42}
            height={42}
            className="h-9 w-9 shrink-0 sm:h-[42px] sm:w-[42px]"
          />

          <div className="min-w-0">
            <p className="truncate text-base font-medium tracking-wide text-white sm:text-lg">
              Beyond Contrails
            </p>

            <p className="hidden text-[10px] uppercase tracking-[0.25em] text-sky-300 sm:block sm:text-xs">
              Flight Simulation
            </p>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <div className="hidden items-center gap-7 lg:flex xl:gap-10">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative whitespace-nowrap text-sm tracking-wide text-white/80 transition hover:text-white"
            >
              {link.name}

              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-sky-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* About dropdown */}
          <div className="group relative">

            <Link
              href="/about"
              className="relative flex items-center gap-1 whitespace-nowrap text-sm tracking-wide text-white/80 transition hover:text-white"
            >
              <span>About</span>

              <svg
                className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 4.5L6 8L9.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-sky-400 transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Dropdown */}
            <div className="pointer-events-none absolute right-0 top-full pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="w-56 overflow-hidden rounded-xl border border-white/10 bg-[#080A0E]/95 p-2 shadow-2xl backdrop-blur-2xl">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-sm text-white/60 transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/[0.08] lg:hidden"
        >
          <div className="relative h-4 w-5">

            <span
              className={`absolute left-0 top-0 h-px w-5 bg-white transition-all duration-300 ${
                mobileOpen
                  ? "top-[7px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-white transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 top-[14px] h-px w-5 bg-white transition-all duration-300 ${
                mobileOpen
                  ? "top-[7px] -rotate-45"
                  : ""
              }`}
            />

          </div>
        </button>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-x-0 top-full mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#080A0E]/95 shadow-2xl backdrop-blur-3xl lg:hidden"
            >
              <div className="p-3">

                {/* Main links */}
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="block rounded-xl px-4 py-3.5 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* About */}
                <div className="mt-1 border-t border-white/[0.06] pt-1">

                  <div className="flex items-center">

                    <Link
                      href="/about"
                      onClick={closeMobileMenu}
                      className="flex-1 rounded-xl px-4 py-3.5 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      About
                    </Link>

                    <button
                      type="button"
                      aria-label="Toggle About sections"
                      aria-expanded={aboutOpen}
                      onClick={() =>
                        setAboutOpen((open) => !open)
                      }
                      className="mr-2 flex h-9 w-9 items-center justify-center rounded-lg text-white/50 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      <svg
                        className={`h-4 w-4 transition-transform duration-300 ${
                          aboutOpen
                            ? "rotate-180"
                            : ""
                        }`}
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2.5 4.5L6 8L9.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                  </div>

                  {/* About sections */}
                  <AnimatePresence>
                    {aboutOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mb-2 ml-4 border-l border-white/10 pl-3">

                          {aboutLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              onClick={closeMobileMenu}
                              className="block rounded-lg px-3 py-2.5 text-sm text-white/45 transition hover:bg-white/[0.04] hover:text-white"
                            >
                              {link.name}
                            </Link>
                          ))}

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </motion.header>
  );
}