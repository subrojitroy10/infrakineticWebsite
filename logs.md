# Infrakinetic Development Log

This file records significant project changes in chronological order. Times use India Standard Time (IST, UTC+05:30).

## Log 1 — Landing-page scaffold and initial elements

**Timestamp:** 2026-07-13 00:13:13 IST

### Project scaffold

- Created the Noviq landing page as a React 18 single-page application.
- Configured Vite as the development server and production build system.
- Added Tailwind CSS, PostCSS, and Autoprefixer for styling.
- Added Framer Motion for transitions, section reveals, and the page scroll-progress indicator.
- Added Three.js, React Three Fiber, and Drei for interactive 3D visuals.
- Centralized marketing copy and structured page data in `src/data/content.js`.
- Organized reusable components into navigation, footer, UI, section, and Three.js directories.

### Landing-page elements

- Added a fixed navigation bar with links to the platform, modules, scale, benefits, and roadmap sections.
- Created the hero section with an interactive Three.js scene.
- Added the business-problem section covering duplicate work, inconsistent data, manual reporting, and slow decisions.
- Added the “Meet Noviq” section to introduce the modular platform and its expansion path.
- Added the connected-platform section and shared business-database visualization.
- Added CRM and HR/payroll module presentations with supporting feature details.
- Added the scaling model: foundation, operations, intelligence, and enterprise layers.
- Added enterprise content for security, access control, cloud scalability, and modular architecture.
- Added a comparison between fragmented software stacks and the unified Noviq platform.
- Added a four-phase product roadmap.
- Added the contact call to action and site footer.
- Added shared reveal, layout, and responsive-resizing utilities.
- Split the heavier Three.js and Framer Motion dependencies into long-cacheable production chunks.

### Deployment preparation

- Confirmed that the Vite production build completes successfully.
- Removed local `node_modules/` dependencies and generated `dist/` output; Vercel recreates both during deployment.
- Removed unused local assistant metadata.
- Added `.vercelignore` rules for repository metadata, agent metadata, dependencies, generated output, logs, and environment files.
- Recreated project documentation with this README and timestamped development log.

## Log 2 — Professional product redesign

**Timestamp:** 2026-07-13 22:41:00 IST

### Product mockups

- Added a realistic dashboard graphic to the hero (sidebar navigation, KPI cards, revenue chart, deals table, floating payroll/lead notifications) rendered in HTML/CSS with 3D perspective tilt.
- Added product-UI mocks to the Modules section: a CRM pipeline kanban board and an HR payroll-run table, shown beside each module's feature list.

### Design system

- Introduced an inline SVG icon library (`src/components/ui/Icons.jsx`) and replaced all emoji and text-glyph icons across every section.
- Switched all headings from the Fraunces serif to tight-tracked Inter; removed the Fraunces font load entirely.
- Changed the primary call-to-action style from a teal gradient pill to a crisp white button; teal remains the accent color.
- Restyled the section eyebrow from a bordered pill to a minimal rule-plus-label treatment.

### Section refinements

- Hero: two-column layout (copy plus product window), subdued the Three.js backdrop, removed the scroll-hint mouse, and added a metrics strip (1 unified database, 9+ modules, 4 expansion layers, 0 integrations needed).
- Problem: replaced rotated emoji pills with a fragmented-stack diagram of tool chips separated by broken dashed connectors.
- Meet Noviq, Connected, Enterprise, Why Noviq, Contact: replaced placeholder glyphs and gradient squares with the SVG icon system.
- Scale and brand marks: aligned numerals and the logo "N" with the new sans-serif treatment.

## Log 3 — Rebrand: Noviq → Infrakinetic

**Timestamp:** 2026-07-28 22:00:00 IST

- Renamed the product across the entire codebase from "Noviq" to "Infrakinetic": `brand.name` in `src/data/content.js`, page `<title>`/meta description/OG tags in `index.html`, npm package name in `package.json`, the logo monogram ("N" → "I") in `Navbar.jsx`, `Footer.jsx`, and `DashboardMock.jsx`, the footer email (`hello@infrakinetic.io`), the dashboard mock's app URL (`app.infrakinetic.io`), and all in-copy mentions across `Roadmap.jsx`, `Scale.jsx`, `Contact.jsx`, `ModuleMocks.jsx`.
- Renamed `WhyNoviq.jsx` → `WhyInfrakinetic.jsx` and `MeetNoviq.jsx` → `MeetInfrakinetic.jsx` (component names and imports in `App.jsx` updated to match).
- Renamed the `why.noviq` content key to `why.infrakinetic`.
- This is the Workplace domain's product under Polynovea's HBIF — the same architectural role the Acquisition System plays for Hospitality.

