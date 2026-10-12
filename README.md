# Spider Portfolio 🕷️

Hey, I'm Ry Reign, a software engineering student at WGU based in Pompano Beach, FL. This is my personal portfolio: a Spider-Man–themed site with a 3D mask you can drag around, plus the projects I've been building.

**Live site:** https://ryreign.vercel.app

I'm looking for IT and software internships, in Florida or remote. If you have a role, a project, or advice, I'd love to hear from you: riyawatkins718@gmail.com · [LinkedIn](https://www.linkedin.com/in/rywat)

## What's on it

- **Hero** with a 3D Spider-Man mask that auto-spins and rotates when you drag it
- **Projects:** DriveHive, TruthLens, Visit Taniti, and this site
- **Training:** my WGU degree and the courses I've cleared
- **Skills** and a **contact form** that opens your email app with everything filled in

## How I built it

- React + Tailwind CSS, with shadcn/ui components and lucide icons
- The mask is rendered with Google's `<model-viewer>`. I compressed the original model from 23.7 MB down to about 354 KB so it loads fast, even on a phone
- I made the layout work on both phone and desktop, and kept the mask from covering the headline on either
- No backend: the contact form uses a `mailto:` link, so there's nothing to host or pay for
- Hosted for free on Vercel, which redeploys every time I push to `main`

All the text on the page lives in one file, `frontend/src/data/content.js`, so updating my bio or adding a project is a quick edit.

## Run it yourself

```bash
cd frontend
yarn install
yarn start      # http://localhost:3000
yarn build      # static site in frontend/build
```

To deploy your own copy on Vercel: import the repo, set the Root Directory to `frontend`, and deploy. The build settings are already in `frontend/vercel.json`.

## Credits

3D mask: this work is based on ["Spider-Man Mask (PS4)"](https://sketchfab.com/3d-models/spider-man-mask-ps4-33c0495b85824c7995b1baf044b7d2fa) by [jerrylxia](https://sketchfab.com/jerrylxia), licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/).
