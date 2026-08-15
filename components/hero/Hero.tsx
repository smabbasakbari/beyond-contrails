"use client";

import HeroBackground from "@/components/hero/HeroBackground";
import HeroContent from "@/components/hero/HeroContent";
import ScrollIndicator from "@/components/hero/ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <HeroBackground />

      <HeroContent />

      <ScrollIndicator />
    </section>
  );
}