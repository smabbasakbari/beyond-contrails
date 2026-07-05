import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

export default function HeroLogo() {
  return (
    <FadeIn delay={0.2}>
      <div className="relative">
        {/* Ambient glow */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />

        <Image
          src="/plane_w_clouds.svg"
          alt="Beyond Contrails"
          width={420}
          height={420}
          priority
          className="relative z-10"
        />
      </div>
    </FadeIn>
  );
}