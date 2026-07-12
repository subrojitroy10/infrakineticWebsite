# Noviq Landing Page

Marketing landing page for **Noviq**, a modular business operating platform that brings CRM, HR, payroll, operations, finance, projects, support, marketing, and analytics into one connected system.

## Technology

- React 18
- Vite 5
- Tailwind CSS
- Framer Motion
- Three.js with React Three Fiber and Drei

## Landing-page structure

The page contains:

1. Navigation and scroll-progress indicator
2. Hero
3. Problem statement
4. Meet Noviq platform introduction
5. Connected shared-database visualization
6. CRM and HR/payroll modules
7. Platform scaling layers
8. Enterprise capabilities
9. Noviq comparison and benefits
10. Product roadmap
11. Contact call to action
12. Footer

Landing-page copy is centralized in `src/data/content.js`. Page sections live in `src/components/sections`, while shared UI and Three.js elements live in their respective component directories.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The generated production output is written to `dist/`.

## Vercel deployment

Deploy the repository as a Vite project. Vercel can detect the framework and use:

- Build command: `npm run build`
- Output directory: `dist`
- Dependency installation: `npm install`

`.vercelignore` excludes local metadata, generated output, dependencies, logs, and environment files from deployment uploads.

## Project history

Timestamped implementation notes are maintained in [logs.md](./logs.md).

