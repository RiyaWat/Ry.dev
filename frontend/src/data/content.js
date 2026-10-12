// Ry Reign's portfolio content: edit this file to change the text on the site.

export const personalInfo = {
  name: "Ry",
  fullName: "Ry Reign",
  title: "IT & Software",
  tagline: "Your friendly neighborhood developer in training. Swinging from coursework into real builds.",
  location: "Pompano Beach, FL · Open to remote",
  coords: { lat: "N 26.2379°", lng: "W 80.1248°" },
  email: "riyawatkins718@gmail.com",
  github: "https://github.com/RiyaWat",
  githubLabel: "github.com/RiyaWat",
  linkedin: "https://www.linkedin.com/in/rywat",
  linkedinLabel: "linkedin.com/in/rywat",
  bio: "I'm a software engineering student at WGU, building web apps that look good and actually work. I learn by shipping: social apps, browser extensions, and this site.",
  lookingFor: "Looking for IT and software internships, in Florida or remote.",
  coursesCleared: 6,
  projectsWebbed: 4,
};

// Only skills Ry has actually used in coursework or in the projects below.
export const skills = [
  { name: "HTML", category: "Front-end", note: "D277 · every project" },
  { name: "CSS / Tailwind", category: "Front-end", note: "D277 · Visit Taniti · DriveHive" },
  { name: "JavaScript", category: "Language", note: "Visit Taniti · TruthLens extension" },
  { name: "React", category: "Front-end", note: "DriveHive · TruthLens · this site (AI-assisted builds)" },
  { name: "SQL", category: "Database", note: "D427 Data Management" },
  { name: "Git / GitHub", category: "Tools", note: "D197 Version Control" },
  { name: "UI / UX design", category: "Design", note: "D279 · D479 · Figma" },
  { name: "Python / FastAPI", category: "Back-end", note: "DriveHive API (AI-assisted)" },
  { name: "MongoDB", category: "Database", note: "DriveHive data" },
  { name: "Chrome Extension API", category: "Browser", note: "TruthLens (in progress)" },
];

export const marqueeWords = ["HTML", "CSS", "JAVASCRIPT", "REACT", "SQL", "GIT", "GITHUB", "FIGMA", "UI/UX", "PYTHON", "FASTAPI", "MONGODB", "TAILWIND"];

export const projects = [
  {
    id: 1,
    title: "DriveHive",
    category: "Social Web App",
    year: "2026",
    status: "Live",
    description:
      "A social app for car enthusiasts: post your build, find local meets, and DM real mechanics. Instagram-style feed with photo and video posts, 24-hour stories, likes and comments, user-hosted car meets, follow and crew DMs, notifications and search, wrapped in a black-and-yellow hive look.",
    stack: ["React", "Tailwind CSS", "shadcn/ui", "FastAPI", "MongoDB", "JWT auth", "Stripe"],
    image: "/projects/drivehive.jpg",
    repo: "https://github.com/RiyaWat/DriveHive",
    live: "https://drivehive-ten.vercel.app",
    color: "#facc15",
  },
  {
    id: 2,
    title: "TruthLens",
    category: "Browser Extension",
    year: "2026",
    status: "In Progress",
    description:
      "A browser extension that flags deepfakes and AI-generated content in real time. Right-click any image or selected text to scan it, and a web dashboard checks text, images, links and video and returns a verdict with the reasons behind it. Still in progress: the detection results need more testing before I'd trust them.",
    stack: ["Chrome Extension (MV3)", "JavaScript", "React", "FastAPI", "AI vision models"],
    image: "/projects/truthlens.jpg",
    repo: "https://github.com/RiyaWat/TruthLens",
    live: "https://truth-lens-wine.vercel.app",
    color: "#2563eb",
  },
  {
    id: 3,
    title: "Visit Taniti",
    category: "School Project · UX",
    year: "2026",
    status: "Live",
    description:
      "A six-page tourism site for the fictional island of Taniti, made for my WGU UX Design course. I started with a persona, wireframes and guerrilla usability testing, then built it responsive in plain HTML, CSS and JavaScript: lodging, transportation, things to do, FAQs and a contact page.",
    stack: ["HTML", "CSS", "JavaScript", "UX research", "Vercel"],
    image: "/projects/visittaniti.jpg",
    repo: "https://github.com/RiyaWat/VisitTaniti",
    live: "https://visit-taniti-rho.vercel.app",
    color: "#14b8a6",
  },
  {
    id: 4,
    title: "Spider Portfolio",
    category: "Interactive Site",
    year: "2026",
    status: "Live",
    description:
      "An animated, interactive site with a 3D mask you can drag. Spider-themed from the loader to the cursor web, built in React with Tailwind, and deployed as a static site.",
    stack: ["React", "Tailwind CSS", "3D model-viewer"],
    image: "/projects/portfolio.jpg",
    repo: "https://github.com/RiyaWat/Ry.dev",
    live: "https://ryreign.vercel.app",
    color: "#dc2626",
  },
];

export const training = [
  {
    id: 1,
    role: "B.S. Software Engineering",
    company: "WGU",
    period: "2024 — Present",
    location: "Remote",
    description:
      "Cleared: Front-End Web Dev (D277), Data Management / SQL (D427), Version Control (D197), UI Design (D279), UX Design (D479), Intro to IT (D322)",
    tags: ["HTML", "CSS", "JavaScript", "SQL", "Git", "Figma"],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Training", href: "#training" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
