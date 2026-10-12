import React from "react";
import MaskScene from "./MaskScene";
import { personalInfo } from "../data/content";
import { ArrowDown, MousePointer2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Spidey cinematic backdrop */}
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(37,99,235,0.10),_transparent_60%)]" />

      {/* Spider web pattern */}
      <div className="absolute inset-0 spider-web opacity-70 pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* 3D mask. Desktop: the space to the right of the headline (see .hero-mask in
          index.css). Phone: sits in its own band at the top so it never lands on the headline. */}
      <div className="hero-mask absolute inset-x-0 top-[96px] h-[38vh] md:inset-x-auto md:right-0 md:top-[8%] md:bottom-[8%] md:h-auto md:w-1/2 z-10">
        <MaskScene />
      </div>

      {/* Foreground text - pointer-events-none so the mask stays draggable */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 md:pt-32 pb-10 md:pb-12 min-h-screen flex flex-col justify-between pointer-events-none">
        {/* Top markers */}
        <div className="flex items-start justify-between text-[10px] mono uppercase tracking-[0.3em] text-white/40">
          <div className="flex flex-col gap-1">
            <span>{personalInfo.coords.lat}</span>
            <span>{personalInfo.coords.lng}</span>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1">
            <span>Web / 2026</span>
            <span className="text-red-500/80">● Live Build</span>
          </div>
        </div>

        {/* Hero copy */}
        <div className="max-w-4xl mt-[34vh] md:mt-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-red-600" />
            <span className="mono text-[11px] uppercase tracking-[0.3em] text-red-600">
              Portfolio / {personalInfo.fullName}
            </span>
          </div>
          <h1 className="display-font text-[13vw] md:text-[8.5rem] xl:text-[11rem] leading-[0.85] text-white mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
            IT &amp; <span className="text-red-600">SOFTWARE</span>
            <br />
            <span className="text-white/60">SPIDER-DEV</span>
          </h1>
          <p className="text-sm md:text-lg text-white/70 max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {personalInfo.tagline} Drag the mask — it's watching.
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex items-end justify-between">
          <a
            href="#about"
            className="flex items-center gap-3 text-white/70 hover:text-red-500 transition-colors duration-300 pointer-events-auto group"
          >
            <span className="w-10 h-10 rounded-full border border-white/20 group-hover:border-red-600 flex items-center justify-center transition-colors">
              <ArrowDown size={14} className="animate-bounce" />
            </span>
            <span className="mono text-[10px] uppercase tracking-[0.3em]">Swing Down</span>
          </a>

          <div className="hidden md:flex items-center gap-2 text-white/40">
            <MousePointer2 size={12} />
            <span className="mono text-[10px] uppercase tracking-[0.3em]">Drag mask to spin</span>
          </div>
        </div>
      </div>
    </section>
  );
}
