import React from "react";
import { skills, marqueeWords } from "../data/content";


export default function Skills() {
  return (
    <section id="skills" className="relative py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="reveal-up mb-20 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-red-600" />
            <span className="mono text-[11px] uppercase tracking-[0.3em] text-red-600">04 / Arsenal</span>
          </div>
          <h2 className="display-font text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-white">
            Spidey<br /><span className="text-red-600">stack.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 reveal-up">
          {skills.map((s, i) => (
            <div key={s.name} className="group">
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <div className="flex items-baseline gap-3 min-w-0">
                  <span className="mono text-[10px] text-white/30">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-white text-lg">{s.name}</span>
                </div>
                <span className="mono text-[10px] uppercase tracking-wider text-red-500/80 shrink-0">{s.category}</span>
              </div>
              <div className="h-[2px] w-full bg-white/8 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-red-600/70 via-red-600/20 to-transparent group-hover:from-red-500 transition-colors duration-500" />
              </div>
              <div className="mono text-[10px] uppercase tracking-[0.2em] text-white/35 mt-2">{s.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-32 overflow-hidden border-y border-white/5 py-8 bg-black/30">
        <div className="marquee-track flex whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span
              key={i}
              className="display-font text-6xl md:text-8xl mx-8 text-white/[0.08] hover:text-red-600/60 transition-colors duration-500"
            >
              {w} <span className="text-red-600/40">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
