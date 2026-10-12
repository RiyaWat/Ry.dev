import { useEffect, useRef } from "react";

// Occasionally spawns a tiny fading web-strand icon at the cursor position.
export default function WebCursor() {
  const lastSpawn = useRef(0);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      const now = performance.now();
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const moved = Math.sqrt(dx * dx + dy * dy);
      if (moved < 22) return;
      if (now - lastSpawn.current < 220) return;
      lastSpawn.current = now;
      lastPos.current = { x: e.clientX, y: e.clientY };
      spawnStrand(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}

function spawnStrand(x, y) {
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  const size = 20 + Math.random() * 8;
  svg.setAttribute("width", size);
  svg.setAttribute("height", size);
  svg.setAttribute("viewBox", "0 0 20 20");
  svg.style.cssText = `
    position: fixed;
    left: ${x - size / 2}px;
    top: ${y - size / 2}px;
    pointer-events: none;
    z-index: 9998;
    opacity: 0.65;
    will-change: transform, opacity;
    transition: opacity 0.85s ease-out, transform 0.85s ease-out;
  `;

  const g = document.createElementNS(NS, "g");
  g.setAttribute("stroke", "rgba(255,255,255,0.85)");
  g.setAttribute("stroke-width", "0.55");
  g.setAttribute("fill", "none");
  g.setAttribute("stroke-linecap", "round");

  // Little asterisk / web strand made of a few crossed lines
  const lines = [
    "M10 2 L10 18",
    "M2 10 L18 10",
    "M4 4 L16 16",
    "M16 4 L4 16",
  ];
  lines.forEach((d) => {
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", d);
    g.appendChild(p);
  });
  svg.appendChild(g);

  const rot = Math.random() * 360;
  svg.style.transform = `rotate(${rot}deg) scale(0.45)`;

  document.body.appendChild(svg);
  requestAnimationFrame(() => {
    svg.style.opacity = "0";
    svg.style.transform = `rotate(${rot + 20}deg) scale(1.15)`;
  });
  setTimeout(() => svg.remove(), 900);
}
