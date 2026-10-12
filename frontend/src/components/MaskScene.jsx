import React, { Component, Suspense, lazy, useCallback, useEffect, useState } from "react";

// The 3D mask is rendered on the page itself from a model file shipped in /public/models
// (see MaskCanvas.jsx). No embedded third-party player, so no logos or buttons.
// The 3D code is split into its own chunk and only loads when the browser can do WebGL.
const MaskCanvas = lazy(() => import("./MaskCanvas"));

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(window.WebGLRenderingContext && (c.getContext("webgl2") || c.getContext("webgl")));
  } catch (e) {
    return false;
  }
}

class SceneBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { broken: false };
  }
  static getDerivedStateFromError() {
    return { broken: true };
  }
  componentDidCatch() {}
  render() {
    return this.state.broken ? this.props.fallback : this.props.children;
  }
}

function Spider({ spinning }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="flex flex-col items-center gap-3">
        <svg
          width="52"
          height="52"
          viewBox="0 0 48 48"
          fill="none"
          stroke="#dc2626"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={spinning ? "animate-spin-slow" : ""}
        >
          <ellipse cx="24" cy="24" rx="5" ry="7" fill="#dc2626" />
          <path d="M20 20 C14 16, 10 12, 6 8" />
          <path d="M19 24 C13 24, 7 24, 3 22" />
          <path d="M19 28 C13 30, 8 34, 4 40" />
          <path d="M20 30 C17 36, 14 40, 12 46" />
          <path d="M28 20 C34 16, 38 12, 42 8" />
          <path d="M29 24 C35 24, 41 24, 45 22" />
          <path d="M29 28 C35 30, 40 34, 44 40" />
          <path d="M28 30 C31 36, 34 40, 36 46" />
        </svg>
        {spinning && (
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-red-500/80">Suiting up</div>
        )}
      </div>
    </div>
  );
}

export default function MaskScene() {
  const [webgl, setWebgl] = useState(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);
  const handleFail = useCallback(() => setFailed(true), []);

  useEffect(() => {
    setWebgl(hasWebGL());
  }, []);

  // Never leave the loader spinning forever on a slow connection.
  useEffect(() => {
    if (ready) return undefined;
    const t = setTimeout(() => setFailed(true), 25000);
    return () => clearTimeout(t);
  }, [ready]);

  const still = <Spider spinning={false} />;

  return (
    <div className="relative w-full h-full overflow-hidden">
      {webgl === false || (failed && !ready) ? (
        still
      ) : (
        <>
          {!ready && <Spider spinning />}
          {webgl && (
            <SceneBoundary fallback={still}>
              <Suspense fallback={null}>
                <div
                  className="absolute inset-0"
                  style={{ opacity: ready ? 1 : 0, transition: "opacity 0.8s ease-out" }}
                >
                  <MaskCanvas onReady={handleReady} onFail={handleFail} />
                </div>
              </Suspense>
            </SceneBoundary>
          )}
        </>
      )}
    </div>
  );
}
