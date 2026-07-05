export default function HeroBackground() {
  return (
    <div className="absolute inset-0">

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        >
        <source src="/videos/hero_a350.mp4" type="video/mp4" />
     </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/45 to-[#06070A]" />

      {/* Soft blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,184,255,0.10),transparent_60%)]" />

    </div>
  );
}