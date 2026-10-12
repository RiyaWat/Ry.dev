
## Commit: Clean 3D mask, no player chrome
- frontend/src/components/MaskScene.jsx: removed the Sketchfab iframe/Viewer API; renders our own model (spinning-spider loader, still-spider fallback without WebGL or after 25 s).
- frontend/src/components/MaskCanvas.jsx (new): Google <model-viewer> (loaded from ajax.googleapis.com on demand), transparent, auto-rotate, drag to rotate, no zoom/pan/buttons.
- frontend/public/models/spider-mask.glb (new, 300 KB): 3D mask adapted from "Spider-Man Mask (PS4)" by jerrylxia (Sketchfab, CC BY 4.0) — reconstructed from a render of that model.
- Footer.jsx: CC BY 4.0 attribution line. Hero.jsx: mask sits in the right half on desktop. App.css: old iframe framing removed. content.js: portfolio stack says "3D model-viewer".
