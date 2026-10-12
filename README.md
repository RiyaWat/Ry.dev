# Ry Reign — Portfolio

Spider-themed portfolio for Ry Reign, a software engineering student at WGU looking for IT and software internships (Florida or remote).

Live preview: https://ryreign.sites.tab.bot/

## Edit the text

Everything on the page (name, bio, projects, training, skills, contact links) lives in one file:
`frontend/src/data/content.js`. Change it, commit, and Vercel redeploys.

## Run it locally

```bash
cd frontend
yarn install
yarn start      # http://localhost:3000
yarn build      # static site in frontend/build
```

## Deploy on Vercel (free)

- Import the repo on vercel.com
- Root Directory: `frontend`
- Framework preset: Create React App (picked up from `frontend/vercel.json`)
- Build command: `CI=false yarn build` · Output directory: `build`
- No environment variables needed. The contact form opens the visitor's email app, so there is no backend.

## Built with

React, Tailwind CSS, shadcn/ui components, lucide icons, and a Sketchfab 3D embed
("Spider-Man Mask (PS4)" by jerrylxia).
