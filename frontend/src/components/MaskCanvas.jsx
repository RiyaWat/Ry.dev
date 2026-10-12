import React, { useEffect, useRef, useState } from "react";

// Google's <model-viewer> web component renders the mask from our own model file in
// /public/models. It has no player chrome: transparent background, slow auto-rotate,
// drag to rotate, no zoom, no buttons. The script loads only when the hero mounts.
const MODEL_VIEWER_SRC = "https://ajax.googleapis.com/ajax/libs/model-viewer/4.1.0/model-viewer.min.js";
const MODEL_URL = `${process.env.PUBLIC_URL || ""}/models/spider-mask.glb`;

let loading = null;
function loadModelViewer() {
  if (window.customElements && window.customElements.get("model-viewer")) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.type = "module";
    s.src = MODEL_VIEWER_SRC;
    s.onload = () => window.customElements.whenDefined("model-viewer").then(resolve);
    s.onerror = () => {
      loading = null;
      reject(new Error("model-viewer failed to load"));
    };
    document.head.appendChild(s);
  });
  return loading;
}

export default function MaskCanvas({ onReady, onFail }) {
  const ref = useRef(null);
  const [defined, setDefined] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadModelViewer()
      .then(() => !cancelled && setDefined(true))
      .catch(() => !cancelled && onFail && onFail());
    return () => {
      cancelled = true;
    };
  }, [onFail]);

  useEffect(() => {
    const el = ref.current;
    if (!defined || !el) return;
    const handleLoad = () => onReady && onReady();
    const handleError = () => onFail && onFail();
    el.addEventListener("load", handleLoad);
    el.addEventListener("error", handleError);
    if (el.loaded) handleLoad();
    return () => {
      el.removeEventListener("load", handleLoad);
      el.removeEventListener("error", handleError);
    };
  }, [defined, onReady, onFail]);

  if (!defined) return null;
  return (
    <model-viewer
      ref={ref}
      src={MODEL_URL}
      alt="Spider-Man style mask, drag to spin"
      camera-controls=""
      disable-zoom=""
      disable-pan=""
      disable-tap=""
      auto-rotate=""
      auto-rotate-delay="0"
      rotation-per-second="18deg"
      interaction-prompt="none"
      touch-action="pan-y"
      camera-orbit="-37deg 82deg 122%"
      min-camera-orbit="auto 65deg auto"
      max-camera-orbit="auto 100deg auto"
      field-of-view="30deg"
      exposure="1.1"
      shadow-intensity="0"
      environment-image="neutral"
      loading="eager"
      reveal="auto"
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
        "--poster-color": "transparent",
        "--progress-bar-height": "0px",
      }}
    />
  );
}
