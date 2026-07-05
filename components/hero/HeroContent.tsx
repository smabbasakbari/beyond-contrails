import HeroLogo from "@/components/hero/HeroLogo";
import HeroHeading from "@/components/hero/HeroHeading";
import HeroTagline from "@/components/hero/HeroTagline";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
      <HeroLogo />
      <HeroHeading />
      <HeroTagline />
    </div>
  );
}