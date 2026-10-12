import React from "react";
import { training } from "../data/content";
import { MapPin } from "lucide-react";

export default function Training() {
  return (
    <section id="training" className="relative py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="reveal-up mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-10 bg-red-600" />
            <span className="mono text-[11px] uppercase tracking-[0.3em] text-red-600">03 / Training</span>
          </div>
          <h2 className="display-font text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-white">
            Training<br />between <span className="text-red-600">swings.</span>
          </h2>
        </div>

        <div className="relative grid lg:grid-cols-12 gap-10">
          {/* Timeline rail */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-red-600/60 via-white/10 to-transparent" />
          </div>

          <div className="lg:col-span-11 space-y-2">
            {training.map((exp, i) => (
              <div
                key={exp.id}
                className="reveal-up group relative grid md:grid-cols-12 gap-6 py-8 px-4 md:px-6 border border-white/5 hover:border-red-600/30 transition-colors duration-500 bg-white/[0.015]"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="md:col-span-3">
                  <div className="mono text-[11px] uppercase tracking-[0.3em] text-red-600/80">
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-[11px] text-white/40 mono uppercase tracking-wider">
                    <MapPin size={11} />
                    {exp.location}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-3 mb-3">
                    <h3 className="display-font text-3xl md:text-4xl text-white group-hover:text-red-500 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <span className="text-white/40 text-lg">·</span>
                    <span className="text-white/70 text-base">{exp.company}</span>
                  </div>
                  <p className="text-white/55 leading-relaxed mb-5 max-w-3xl">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[10px] mono uppercase tracking-wider border border-white/10 text-white/55 group-hover:border-red-600/30 group-hover:text-red-400/80 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
