import React, { useState } from "react";
import { projects } from "../data/content";
import { ArrowUpRight, X, Github } from "lucide-react";
import { Sheet, SheetContent } from "./ui/sheet";

export default function Projects() {
  const [hover, setHover] = useState(null);
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16 lg:mb-24 reveal-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-red-600" />
              <span className="mono text-[11px] uppercase tracking-[0.3em] text-red-600">02 / Web</span>
            </div>
            <h2 className="display-font text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-white">
              Selected<br /><span className="text-red-600">Builds.</span>
            </h2>
          </div>
          <p className="hidden md:block mono text-[11px] uppercase tracking-[0.3em] text-white/40 max-w-xs text-right">
            Every project a fresh strand. Tap to peek under the mask.
          </p>
        </div>

        <div className="divide-y divide-white/8 border-y border-white/8">
          {projects.map((p, i) => (
            <button
              key={p.id}
              type="button"
              onMouseEnter={() => setHover(p.id)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setActive(p)}
              className="group relative grid grid-cols-12 items-center gap-6 py-8 lg:py-10 px-2 reveal-up transition-colors duration-500 hover:bg-white/[0.02] w-full text-left cursor-pointer"
            >
              <div className="col-span-1 mono text-xs text-white/40">
                0{i + 1}
              </div>
              <div className="col-span-9 md:col-span-4">
                <h3 className="display-font text-3xl md:text-5xl text-white group-hover:text-red-500 transition-colors duration-300">
                  {p.title}
                </h3>
                {p.status === "In Progress" && (
                  <span className="inline-block mt-1 px-2 py-0.5 text-[9px] mono uppercase tracking-[0.25em] border border-red-600/40 text-red-400/90">
                    In Progress
                  </span>
                )}
              </div>
              <div className="hidden md:block col-span-2 mono text-[11px] uppercase tracking-[0.25em] text-white/50">
                {p.category}
              </div>
              <div className="hidden md:flex col-span-3 flex-wrap gap-1.5">
                {p.stack.slice(0, 3).map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-[10px] mono uppercase tracking-wider border border-white/10 text-white/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="hidden md:flex col-span-1 mono text-xs text-white/40 justify-end">
                {p.year}
              </div>
              <div className="col-span-2 md:col-span-1 flex justify-end">
                <ArrowUpRight
                  size={22}
                  className="text-white/30 group-hover:text-red-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </div>

              {/* Floating preview image on desktop hover */}
              {hover === p.id && (
                <div
                  className="hidden lg:block absolute right-32 top-1/2 -translate-y-1/2 w-72 h-44 overflow-hidden border border-white/10 pointer-events-none z-30 shadow-2xl"
                  style={{ boxShadow: `0 30px 60px -20px ${p.color}40` }}
                >
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="mt-12 reveal-up">
          <p className="text-sm text-white/40">
            <span className="mono text-red-500/70">// </span>
            More strands in progress.
          </p>
        </div>
      </div>

      {/* Project Detail Sheet */}
      <Sheet open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-xl md:max-w-2xl bg-[#0a0b0d] border-l border-red-600/25 p-0 overflow-y-auto text-white [&>button]:hidden"
        >
          {active && (
            <div className="relative">
              {/* Custom close */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center border border-white/15 hover:border-red-500 hover:text-red-500 text-white/80 backdrop-blur-md bg-black/40 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              {/* Hero image with web overlay */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-[#0a0b0d]/40 to-transparent" />
                <div className="absolute inset-0 spider-web opacity-50 mix-blend-screen pointer-events-none" />
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, ${active.color}18 60%, #0a0b0d 100%)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="px-6 md:px-10 pb-12 -mt-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-red-600" />
                  <span className="mono text-[10px] uppercase tracking-[0.3em] text-red-500">
                    {active.category} · {active.year}
                  </span>
                </div>

                <h3 className="display-font text-4xl md:text-6xl leading-[0.95] text-white mb-6">
                  {active.title}
                </h3>

                <p className="text-white/70 leading-relaxed text-base md:text-lg mb-10">
                  {active.description}
                </p>

                <div className="mb-10">
                  <div className="mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-4">
                    Stack / Web
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.stack.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 text-[11px] mono uppercase tracking-wider border border-red-600/30 text-red-300/90 bg-red-600/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="border-t border-white/10 pt-4">
                    <div className="mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Status</div>
                    <div className="text-white/85">{active.status}</div>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-1">Year</div>
                    <div className="text-white/85">{active.year}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {active.live && (
                    <a
                      href={active.live}
                      target="_blank"
                      rel="noreferrer"
                      className="sticky-cta inline-flex items-center gap-3 px-7 py-4 bg-red-600 text-white hover:bg-red-500 mono uppercase tracking-[0.25em] text-xs transition-colors"
                    >
                      View Live Build
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  <a
                    href={active.repo}
                    target="_blank"
                    rel="noreferrer"
                    className={`sticky-cta inline-flex items-center gap-3 px-7 py-4 mono uppercase tracking-[0.25em] text-xs transition-colors ${
                      active.live
                        ? "border border-white/20 text-white/85 hover:border-red-600 hover:text-red-500"
                        : "bg-red-600 text-white hover:bg-red-500"
                    }`}
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>

                <p className="mt-8 text-[11px] mono uppercase tracking-[0.25em] text-white/30">
                  <span className="text-red-500/70">// </span>
                  Case study &middot; press esc or tap the X to close
                </p>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}
