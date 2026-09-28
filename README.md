# Ipsita Saha — Personal Portfolio

A personal identity portfolio: professional background (CS/AI-ML/Data/Web),
project case studies, and a "Beyond Technology" section for music/performance.

Static, content-driven site — no backend or database, since there's no
booking/CRUD workflow here (unlike the client-style project sites).

## Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- next/image for optimized, responsive images

## Project structure
```
src/
  app/
    layout.tsx      # fonts, metadata, SEO
    page.tsx         # assembles all sections
    globals.css      # design tokens (palette, type)
    sitemap.ts
  components/        # one component per site section
  data/
    content.ts        # ALL copy/facts live here — edit this file to update the site
public/
  images/              # the 10 supplied photos, optimized
  resume.pdf           # <- add your real resume PDF here (see below)
```

## What still needs your input
Search `content.ts` for `[MISSING INFORMATION]` and `[NEEDS CONFIRMATION]` —
every one of those marks a fact this build did not have confirmed and did not
want to invent, per the "never invent" rule in the project brief:

- Exact name/degree confirmation (currently sourced from your own GitHub README)
- IEEE paper's exact title, authors, conference name, DOI (IEEE blocks
  automated fetches, so this could not be verified directly — copy it from
  the official page)
- NIR project's specific preprocessing/dimensionality-reduction/model choices
  and result numbers
- Institution name, dates, CGPA for Education
- Internship company/role/dates/responsibilities confirmation
- Email, LinkedIn URL, location
- A current resume PDF (drop it in `public/` as `resume.pdf`, replacing the
  placeholder file)

## Local development
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build
```bash
npm run build
npm start
```

## Deployment (Vercel)
1. Push this repo to GitHub.
2. Import it at vercel.com → New Project.
3. No environment variables are required for this static build.
4. Update `src/app/sitemap.ts` and `public/robots.txt` with your real
   deployed domain once you have one.

## Accessibility & performance notes
- Images use `next/image` with explicit `sizes` for responsive loading.
- Motion is limited to a single hover/reveal per element and is disabled
  under `prefers-reduced-motion`.
- Focus states are visible (`:focus-visible` outline) for keyboard nav.
