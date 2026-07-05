"use client";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
      <p className="mb-2 text-sm tracking-[0.25em] text-white/70 uppercase">
        Scroll
      </p>

      <div className="mx-auto h-10 w-px bg-white/40 animate-pulse" />
    </div>
  );
}