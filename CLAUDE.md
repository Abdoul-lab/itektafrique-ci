# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, localhost:5173)
npm run build     # TypeScript compile + Vite production build → dist/
npm run lint      # ESLint check
npm run preview   # Serve the dist/ build locally
```

No test suite is configured.

## Architecture

Single-page application for **ITEKTAFRIQUE CÔTE D'IVOIRE**, an IT services company based in Côte d'Ivoire.

**Routing** is handled entirely in `src/App.tsx` via a `currentPage` state string and a `switch` — there is no React Router. Navigation calls `onPageChange(pageId)` which updates that state. The three page IDs are `'accueil'`, `'consultation'`, and `'outils'`.

**Pages** (`src/pages/`):
- `Accueil.tsx` — Hero, services overview, contact section (static marketing content)
- `Consultation.tsx` — Service cards with selection state + contact form (form submit currently only calls `alert()`)
- `OutilsRessources.tsx` — Searchable/filterable resource library with a preview modal; download actions are simulated with `alert()`

**Components** (`src/components/`):
- `Navigation.tsx` — Sticky navbar, responsive (hamburger on mobile). Receives `currentPage` and `onPageChange` props.
- `Chatbot.jsx` — Fixed-position floating chatbot with three tabs: **Accueil** (animated text intro), **Conversation IA** (keyword-driven scenario tree in `iaScenarios`), **Prendre RDV** (multi-step form flow in `questionFlow` that ends with a prefilled Google Forms URL). Injects its own `<style>` tag into `document.head` at module load time.

**Brand tokens** (defined in `src/index.css` as CSS variables):
- `--brand-blue`: `#0B4FA0`
- `--brand-orange`: `#FF9A2E`
- `--brand-dark`: `#2B2B2B`
- RGB variants: `--brand-blue-rgb`, `--brand-orange-rgb` (used in `rgba()` calls)

Always use these CSS variables (e.g. `var(--brand-blue)`) or their Tailwind arbitrary-value forms (e.g. `text-[var(--brand-blue)]`) rather than hardcoding the hex values.

**Styling**: Tailwind CSS 3 + PostCSS. No component library. Icons exclusively from `lucide-react`. `recharts` is installed but not yet used. `Chatbot.jsx` uses inline style objects (not Tailwind) due to dynamic/animation requirements.

**Static assets**: Logo at `public/images/logost1.png` (referenced as `images/logost1.png` in JSX — Vite serves `public/` at root).

**Language note**: All UI text, labels, and comments are in French.
