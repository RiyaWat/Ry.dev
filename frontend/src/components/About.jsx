import React from "react";
import { personalInfo } from "../data/content";
import { Cpu, Code2, Zap } from "lucide-react";

const stats = [
  { label: "Courses cleared", value: personalInfo.coursesCleared, suffix: "", icon: Zap },
  { label: "Projects webbed", value: personalInfo.projectsWebbed, suffix: "", icon: Code2 },
  { label: "Cups of coffee", value: "∞", suffix: "", icon: Cpu },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-44 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 reveal-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-red-600" />
              <span className="mono text-[11px] uppercase tracking-[0.3em] text-red-600">01 / About</span>
            </div>
            <h2 className="display-font text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-8">
              With great<br /> code comes <span className="text-red-600">great apps.</span>
            </h2>
            <p className="mono text-[11px] uppercase tracking-[0.3em] text-white/40">
              — {personalInfo.location}
            </p>
          </div>

          <div className="lg:col-span-7 lg:pt-6 reveal-up">
            <p className="text-xl md:text-2xl leading-relaxed text-white/85 font-light mb-8">
              {personalInfo.bio}
            </p>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-12">
              {personalInfo.lookingFor}
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-10 border-t border-white/10">
              {stats.map(({ label, value, suffix, icon: Icon }) => (
                <div key={label} className="group">
                  <Icon size={18} className="text-red-600/70 mb-3 group-hover:text-red-500 transition-colors" />
                  <div className="display-font text-4xl md:text-5xl text-white">
                    {value}{suffix}
                  </div>
                  <div className="mono text-[10px] uppercase tracking-[0.25em] text-white/40 mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
