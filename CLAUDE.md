# MURT Website — Claude Reference

This file is my persistent memory for this project. Read it at the start of every session.

---

## About the Project

**Name:** McMaster Underwater Robotics Team (MURT) Website
**Domain:** https://www.macmurt.com
**Purpose:** Public-facing website for the MURT student engineering club at McMaster University, Hamilton, Ontario. Affiliated with the McMaster Engineering Society (MES).
**Competition:** MATE ROV World Championship — next one is June 23, 2026.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 (Vite 7) |
| Routing | react-router-dom v7 |
| SEO | react-helmet-async v3 |
| Styling | Plain CSS (index.css) — no Tailwind, no CSS modules |
| Deployment | Vercel |
| Language | JavaScript (JSX) — no TypeScript |

---

## Directory & File Structure

```
MURT_Website/
├── index.html                  # App entry — global meta tags, favicon links, OG/Twitter tags
├── vercel.json                 # SPA rewrite rule (all routes → index.html)
├── public/
│   ├── favicon.png             # 1024×1024 source logo (also used as OG image)
│   ├── favicon-32x32.png       # Browser tab icon
│   ├── favicon-64x64.png       # High-DPI browser icon
│   ├── apple-touch-icon.png    # iOS home screen icon (180×180)
│   ├── sitemap.xml             # All routes listed for Google
│   ├── robots.txt              # Allows all crawlers, points to sitemap
│   ├── googlefe50d081a4db5f15.html  # Google Search Console verification
│   ├── logo2.png               # Stable public logo (no hash) — used by OG image tag
│   ├── mcenglogo.jpg           # McMaster Engineering logo
│   ├── mes.png                 # McMaster Engineering Society logo
│   ├── Precision_Logo.png      # Precision 3D Printing sponsor logo
│   └── rov-hero.mov            # Hero background video
├── src/
│   ├── main.jsx                # Entry point — wraps app in HelmetProvider + BrowserRouter
│   ├── App.jsx                 # Route definitions
│   ├── index.css               # ALL styles live here (style.css is unused/empty)
│   ├── data/
│   │   └── constants.js        # Centralized content: TEAM_LEADS, SPONSOR_TIERS, FAQ_ITEMS, etc.
│   ├── assets/                 # Imported assets (Vite hashes these — avoid for public URLs)
│   │   ├── logo.png / logo2.png
│   │   ├── Nivindu.jpeg, Haris.jpeg, Youssif.jpeg, hasnat.jpg, Haroon.jpeg  # Team photos
│   │   ├── Precision_Logo.png, mcenglogo.jpg, mes.png  # Sponsor logos (also in public/)
│   │   └── rov-hero.mov        # Hero video (also in public/)
│   ├── Components/
│   │   ├── Navbar.jsx          # Sticky navbar, hides on scroll (threshold: 50px), mobile hamburger
│   │   ├── Hero.jsx            # Full-screen video hero with buttons + "Powered By" sponsor row
│   │   ├── Countdown.jsx       # Live countdown to June 23, 2026 competition
│   │   ├── Section.jsx         # Reusable section wrapper: <Section id="x" title="y">
│   │   └── Footer.jsx          # Instagram + LinkedIn icons, copyright
│   └── pages/
│       ├── Home.jsx            # Hero + About the Club + Countdown
│       ├── Team.jsx            # Team leads grid + subteam badges
│       ├── Sponsors.jsx        # Sponsor logos + tiers + CTA
│       ├── Join.jsx            # Join info, FAQ accordion, what you learn
│       ├── Contact.jsx         # Email + socials
│       └── About.jsx           # Exists but not routed in App.jsx
```

---

## Routes

| Path | Component |
|---|---|
| `/` | Home |
| `/team` | Team |
| `/sponsors` | Sponsors |
| `/join` | Join |
| `/contact` | Contact |
| `*` | Home (fallback) |

Note: `About.jsx` exists but has no route — do not add one unless the user asks.

---

## Design System & Theme Rules

**Always follow these — do not deviate without being asked.**

### Colours
```css
--bg: #020617            /* page background (near black) */
--accent: #facc15        /* yellow — primary brand colour */
--accent-soft: rgba(250, 204, 21, 0.2)
--text-main: #e5e7eb     /* primary text */
--text-muted: #9ca3af    /* secondary/muted text */
--navbar-height: 6rem
```
Body background is pure `#000000`.

### Buttons
- `btn-yellow` — yellow gradient (`#facc15` → `#fde047`), dark text `#1a1a00`, yellow glow shadow. Used for primary CTAs.
- `btn-primary` — same as btn-yellow, used on inner pages.
- `btn-secondary` — dark background, yellow border.
- `btn-outline` — transparent, muted border.
- All buttons use `border-radius: 999px` (pill shape).

### Typography
- Section titles use `.section-title` with a yellow gradient underline via `::after`.
- Body text uses `var(--text-muted)` with `strong` tags in `#fff`.
- Font: system-ui / sans-serif.

### Sections
- Use the `<Section id="x" title="y">` component for all inner page sections.
- Top-level hero sections use raw `<section className="section">` with `<div className="section-inner">`.

### Sponsor Cards (Hero)
- Class: `.sponsor-card` — responsive size via `clamp(68px, 8.5vw, 115px)`.
- Hover: lifts up `translateY(-4px) scale(1.05)` with yellow glow.

### Sponsor Logos (Sponsors page)
- Circular: class `sponsor-logo-circle`, 180×180, `border-radius: 50%`.
- Hover: same lift + yellow glow as `.sponsor-card`.

### Navbar
- Sticky, hides after 50px scroll on ALL screen sizes (including mobile).
- Uses `<Link>` from react-router-dom — never `<a>` for internal navigation.
- Mobile: hamburger menu, full-width dropdown.

---

## Asset Rules

**Critical:** Never import publicly visible images/videos via `import` statements in React components. Vite hashes imported filenames on every build, breaking Google's cached URLs.

- Sponsor logos, hero video, and site logos → reference from `public/` using `/filename` paths (e.g. `src="/logo2.png"`).
- Team member photos (`Nivindu.jpeg` etc.) → imported via `import` in `constants.js` is acceptable since they are not directly indexed by Google as standalone resources.

---

## SEO Setup

- `react-helmet-async` is installed and `<HelmetProvider>` wraps the app in `main.jsx`.
- Every page has a `<Helmet>` with:
  - `<title>McMaster Underwater Robotics Team</title>` — same on all pages (user preference).
  - `<meta name="description">` — unique per page.
  - `<link rel="canonical">` — unique per page pointing to macmurt.com.
- `index.html` has global OG + Twitter Card tags.
- `public/sitemap.xml` lists all 5 routes.
- `public/robots.txt` allows all crawlers.
- `vercel.json` rewrites all non-asset paths to `index.html` for SPA routing.

---

## Current Sponsors / "Powered By"

| Sponsor | Logo file | Link |
|---|---|---|
| McMaster Engineering | `/mcenglogo.jpg` | https://www.eng.mcmaster.ca/ |
| McMaster Engineering Society (MES) | `/mes.png` | https://macengsociety.ca/ |
| Precision 3D Printing and Prototyping | `/Precision_Logo.png` | https://precision3dprint.ca/ |
| Altium | `/altium.png` | https://www.altium.com/ |

Order in Hero "Powered By" row: McMaster Eng → MES → Precision 3D → Altium.

---

## Team Leads (defined in constants.js)

- Nivindu De Silva — Software Director
- Haris Ali — Electrical Director
- Youssif Shaheed — Mechanical Director
- Hasnat Saeed — Marketing Director
- Haroon Ahmed — Operations Director

---

## Key Decisions & Rules

1. **No TypeScript** — keep everything in `.jsx` / `.js`.
2. **No CSS frameworks** — all styles go in `src/index.css`. `style.css` is unused, ignore it.
3. **No new files unless necessary** — prefer editing existing files.
4. **Title tag is the same on every page** — "McMaster Underwater Robotics Team". User does not want per-page titles.
5. **All-caps titles are banned** — Google penalises them and falls back to showing the domain.
6. **Internal links use `<Link>` from react-router-dom**, never `<a href="/path">`.
7. **External links always have `target="_blank" rel="noreferrer"`**.
8. **Do not add an `/about` route** — About.jsx exists but is intentionally unrouted.
9. **Centralise content in `src/data/constants.js`** — team data, sponsor tiers, FAQ etc. live there.
10. **Mobile navbar hides on scroll** — the CSS override that kept it always visible on mobile was intentionally removed.
