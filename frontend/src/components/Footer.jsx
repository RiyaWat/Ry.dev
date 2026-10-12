import React from "react";
import { personalInfo } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-6 items-center">
        <div className="display-font text-3xl tracking-widest text-white">
          {personalInfo.name.toUpperCase()}<span className="text-red-600">.</span>
        </div>
        <div className="text-center mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          © 2026 {personalInfo.fullName.toUpperCase()}
        </div>
        <div className="md:text-right mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          ● Swinging for new builds
        </div>
      </div>
      <p className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-6 text-center mono text-[9px] tracking-[0.15em] text-white/30">
        3D mask: This work is based on{" "}
        <a
          href="https://sketchfab.com/3d-models/spider-man-mask-ps4-33c0495b85824c7995b1baf044b7d2fa"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white/60"
        >
          "Spider-Man Mask (PS4)"
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/jerrylxia"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white/60"
        >
          jerrylxia
        </a>{" "}
        licensed under{" "}
        <a
          href="http://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white/60"
        >
          CC-BY-4.0
        </a>
      </p>
    </footer>
  );
}
