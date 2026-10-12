import React, { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when a link is clicked or ESC is pressed
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "backdrop-blur-md bg-[#07080a]/80 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="display-font text-2xl tracking-widest text-white">
            {personalInfo.name.toUpperCase()}<span className="text-red-600">.</span>
          </span>
          <span className="hidden md:inline-block text-[10px] mono text-white/40 uppercase tracking-[0.3em] ml-2 border-l border-white/10 pl-3">
            IT & Software / 2026
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="sticky-link group px-4 py-2 text-sm text-white/70 hover:text-white transition-colors duration-300"
            >
              <span className="mono text-[10px] text-red-500/70 mr-1">0{i + 1}.</span>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="sticky-cta hidden md:inline-flex items-center gap-2 px-5 py-2 border border-white/15 hover:border-red-600/60 text-white/90 hover:text-red-500 text-xs uppercase tracking-[0.2em] mono transition-colors duration-300"
        >
          Web Signal
        </a>

        {/* Mobile hamburger - Spidey web-line reveal */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="overflow-visible">
            {/* Three web-strand hamburger lines (visible when closed) */}
            <path
              d="M4 8 L24 8"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              style={{
                strokeDasharray: 24,
                strokeDashoffset: open ? 24 : 0,
                transition: "stroke-dashoffset 0.35s cubic-bezier(0.65, 0, 0.35, 1) 0.15s",
              }}
            />
            <path
              d="M4 14 L24 14"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              style={{
                strokeDasharray: 24,
                strokeDashoffset: open ? 24 : 0,
                transition: "stroke-dashoffset 0.28s cubic-bezier(0.65, 0, 0.35, 1) 0.08s",
              }}
            />
            <path
              d="M4 20 L24 20"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              style={{
                strokeDasharray: 24,
                strokeDashoffset: open ? 24 : 0,
                transition: "stroke-dashoffset 0.35s cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            />

            {/* X (crossed web strands) - visible when open */}
            <path
              d="M6 6 L22 22"
              stroke="#dc2626"
              strokeWidth="1.6"
              strokeLinecap="round"
              style={{
                strokeDasharray: 24,
                strokeDashoffset: open ? 0 : 24,
                transition: "stroke-dashoffset 0.38s cubic-bezier(0.65, 0, 0.35, 1) 0.25s",
              }}
            />
            <path
              d="M22 6 L6 22"
              stroke="#dc2626"
              strokeWidth="1.6"
              strokeLinecap="round"
              style={{
                strokeDasharray: 24,
                strokeDashoffset: open ? 0 : 24,
                transition: "stroke-dashoffset 0.38s cubic-bezier(0.65, 0, 0.35, 1) 0.4s",
              }}
            />

            {/* Tiny anchor dots at ends for web-strand feel */}
            <circle cx="4" cy="8" r="1" fill="#dc2626" opacity={open ? 0 : 0.9} style={{ transition: "opacity 0.3s" }} />
            <circle cx="24" cy="8" r="1" fill="#dc2626" opacity={open ? 0 : 0.9} style={{ transition: "opacity 0.3s 0.1s" }} />
            <circle cx="4" cy="20" r="1" fill="#dc2626" opacity={open ? 0 : 0.9} style={{ transition: "opacity 0.3s 0.15s" }} />
            <circle cx="24" cy="20" r="1" fill="#dc2626" opacity={open ? 0 : 0.9} style={{ transition: "opacity 0.3s 0.2s" }} />
          </svg>
        </button>
      </div>

      {/* Mobile menu with web overlay + staggered link entry */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-out ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="relative bg-[#0a0b0d] border-t border-white/5">
          {/* Subtle web pattern backdrop */}
          <div className="absolute inset-0 spider-web opacity-30 pointer-events-none" />

          <nav className="relative px-6 py-8 flex flex-col">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-4 py-3 text-white/85 hover:text-red-500 transition-colors border-b border-white/5 last:border-b-0"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(-20px)",
                  transition: `opacity 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${open ? 0.15 + i * 0.06 : 0}s, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) ${open ? 0.15 + i * 0.06 : 0}s`,
                }}
              >
                <span className="mono text-[10px] text-red-500/70 w-6">0{i + 1}.</span>
                <span className="text-2xl display-font tracking-wider">{link.label.toUpperCase()}</span>
                {/* Tiny web strand ornament */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="ml-auto text-red-500/50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                >
                  <path d="M2 8 L14 8 M8 2 L8 14 M4 4 L12 12 M12 4 L4 12" strokeLinecap="round" />
                </svg>
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-red-600 text-white mono uppercase tracking-[0.25em] text-xs"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 0.5s ease-out ${open ? 0.15 + navLinks.length * 0.06 : 0}s, transform 0.5s ease-out ${open ? 0.15 + navLinks.length * 0.06 : 0}s`,
              }}
            >
              Web Signal
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
