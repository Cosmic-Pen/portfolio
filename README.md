# Hedhli Saber — Portfolio

Phase 1 portfolio site: bilingual (EN/FR), dark tech theme, Next.js on Vercel.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- next-intl
- Framer Motion
- Lucide icons

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en`.

## Before deploy

1. **Resume PDFs** — add to `public/resume/`:
   - `hedhli-saber-cv-en.pdf`
   - `hedhli-saber-cv-fr.pdf`

2. **Social links** — edit `src/lib/links.ts` (email, LinkedIn, GitHub, Instagram, Facebook, Credly).

3. **Project media** — replace placeholders when repos and images are ready.

## Deploy (Vercel)

Push to GitHub and import the repo in Vercel. No extra env vars required for Phase 1.

## Routes

| Path | Page |
|------|------|
| `/en`, `/fr` | Home |
| `/en/projects` | Project hub |
| `/en/projects/development` | Full-stack & AI |
| `/en/projects/robotics-iot` | Robotics & IoT |
| `/en/experience` | Experience (Tunisie Telecom secondary) |
| `/en/engagements` | Clubs & events |
| `/en/about` | About & contact |
| `/en/resume` | CV download |

French mirrors under `/fr/...`.
