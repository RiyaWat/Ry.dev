import React from "react";
import { Html } from "@react-three/drei";

// Spinning spider logo inside the canvas as Suspense fallback
export default function SpiderLoader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 spider-loader">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#dc2626"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="animate-spin-slow"
        >
          {/* body */}
          <ellipse cx="24" cy="24" rx="5" ry="7" fill="#dc2626" />
          {/* legs left */}
          <path d="M20 20 C14 16, 10 12, 6 8" />
          <path d="M19 24 C13 24, 7 24, 3 22" />
          <path d="M19 28 C13 30, 8 34, 4 40" />
          <path d="M20 30 C17 36, 14 40, 12 46" />
          {/* legs right */}
          <path d="M28 20 C34 16, 38 12, 42 8" />
          <path d="M29 24 C35 24, 41 24, 45 22" />
          <path d="M29 28 C35 30, 40 34, 44 40" />
          <path d="M28 30 C31 36, 34 40, 36 46" />
        </svg>
        <div className="mono text-[10px] uppercase tracking-[0.3em] text-red-500/80">Suiting up</div>
      </div>
    </Html>
  );
}
