"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/loader/Loader";
import HeroBackground from "@/components/hero/HeroBackground";
import HeroContent from "@/components/hero/HeroContent";
import ScrollIndicator from "@/components/hero/ScrollIndicator";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 800);

  return () => clearTimeout(timer);
}, []);
  return (
  <>
  <Loader isLoading={isLoading} />

  <section className="relative h-screen overflow-hidden">

        <HeroBackground />

        <HeroContent />

        <ScrollIndicator />

  </section>

  </>
  );
}