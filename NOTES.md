# NOTES.md – portfolio-site-2025

This is your working notes file for the `portfolio-site-2025` project. Use this to track todos, bugs, links, ideas, and anything else that doesn't belong in the main README.

---

## ✅ TODO – 00_init_env – Initialize Environment

- [x] 00.01 – Create root folder: `portfolio-site-2025`
- [x] 00.02 – Create and store build roadmap in `README.md`
- [x] 00.03 – Initialize Git repository
- [x] 00.04 – Install Vite + React
- [x] 00.05 – Verify local dev server runs
- [x] 00.06 – Push initial commit to GitHub

---

## 📁 01_project_structure – Define File Architecture

### ✅ TODO

- [x] Create base folder structure: `components/`, `pages/`, `styles/`
- Added `src/features/` folder as a placeholder for domain-specific feature modules, with its own README explaining usage and structure.
- [x] Create `Home.jsx` placeholder page
- [x] Create and commit `.gitignore` (if missing)
- [x] Add `NOTES.md` to Git
- [x] Set up path aliases in `vite.config.js`

---

## 🔁 02_app_routing – Configure Routing & Layout

- Created routes using `react-router-dom`:
  - `/` → `Home.jsx`
  - `/about` → `About.jsx`
  - `/work` → `Work.jsx`
  - `/contact` → `Contact.jsx`
- Set up nested layout using `<Layout />` wrapper
- Shared components:
  - `Header.jsx` (contains `<Link>` navigation)
  - `Footer.jsx` (site footer)

---

## 🏷 03_style_system – CSS Architecture — CSS Naming Convention

We're using a **Hybrid CSS naming convention**:

- Semantic block names for sections: `.home-hero`, `.about-section`, `.contact-form`
- BEM-style nesting for internal elements: `.about-section__title`, `.about-section__image`
- Utility classes for spacing/typography/layout: `.text-center`, `.mb-4`, `.grid-2`

This gives flexibility while keeping things organized and readable — a best practice for engineers working with plain CSS at scale.

---

## 03_style_system – CSS Architecture — CSS Modules Policy

- Global styles remain in /styles (base, variables, utilities, section-level).
- Component-specific styles live next to the component as *.module.css inside src/components/.
- Naming inside modules: use `root` for the top element, and descriptive names for parts (e.g., `title`, `icon`).
- Keep utilities global and reusable; modules should not redefine global utilities.

---

## 04_ui_components – Reusable UI Elements — CSS Conventions

### CSS Modules Order Policy
For each component-scoped CSS Module:

1. **Base styles** — root element styles (layout, spacing, typography, borders, etc.).
2. **States** — interaction and accessibility states (`:hover`, `:focus-visible`, `:disabled`, etc.).
3. **Variants** — modifier classes (e.g., `.primary`, `.secondary`, `.danger`) that extend/override base styles.

This ensures predictable overrides, avoids specificity issues, and matches BEM-like methodology used in industry design systems.

### Base.css Integration Policy
When creating or updating component styles in CSS Modules:

1. **Check `base.css` first** for existing CSS variables (`--color-*`, `--space-*`, typography, etc.).
2. **Wire styles to these tokens** instead of hardcoding values.
3. Avoid redefining colors, spacing, or typography that already exist in `base.css`.
4. Reserve hardcoded values for temporary development placeholders only — replace them with tokens before committing.
5. Do not use inline styles for static appearance — use CSS Modules or tokens for maintainability and theming support.

### Variant Visibility During Development
When creating or testing a component variant, ensure its appearance is visibly different from the base style during development.  
- Use contrasting tokens from `base.css` (e.g., `--color-muted`, `--color-accent`) to make the difference obvious.  
- Do not rely on subtle changes that are hard to notice during testing.  
- Variants can be adjusted to final design specs later, but during build they should be easy to verify visually.

**04.01 – Build common UI components**  
- **Button**  
  - Variants: `primary` (filled, `--color-accent` bg, white text), `secondary` (outline, `--color-muted` text & border)  
  - Token-based colors, no inline styles, variant visibility rule applied.  

- **Card**  
  - Neutral container, `--color-bg`, `--color-text`, `--color-muted` border.  
  - Padded with `var(--space-md)` and rounded corners.  

- **Tag**  
  - Variants: `default` (`--color-muted` bg, `--color-bg` text), `info` (`--color-accent` bg, white text).  
  - Rounded pill shape (`border-radius: 9999px`).  

- **SectionHeading**  
  - Supports `level` prop for heading level (`h1`–`h6`).  
  - Variants: `default` (`--color-text`), `accent` (`--color-accent`).  

- Extracted navigation links from `Header.jsx` into `components/navigation/Nav.jsx` for domain organization.


**04.03 – Add basic form helpers (completed)**  
- Added reusable `Input` and `Textarea` components with scoped CSS Modules  
- Created `ContactForm` component using Input and Textarea  
- Wired `ContactForm.module.css` for layout, spacing, and token-based styling  
- Implemented lightweight validation shell (required fields + basic email check) with error styling and a11y attributes

**04.04 – Add icons/animations (completed)**  
- Installed `react-icons` for scalable, component-based icons.  
- Created `src/components/icons/index.js` as a central icon registry.  
- Added reusable `<Icon />` wrapper component for consistent size, a11y, and class handling.  
- Integrated `<Icon />` into `Button` component for testing.  
- Added `animations.css` in `/styles` with fade-in, slide-up, and scale-in utilities using CSS variables and `prefers-reduced-motion` guard.  
- Verified animation utilities by applying `anim-slide-up` to `Button` as a mount animation.
**Icons scaffolding**
- Created `components/icons/Icon.jsx` and `components/icons/index.js` barrel.
- Updated `Button.jsx` to use `<Icon name="FaArrowRight" ... />` (decorative; `aria-hidden` handled internally).

**Animations scaffolding**
- Added `styles/animations.css` and imported it in `main.jsx`.
- Button hover-lift to be tuned via CSS transition on `.root:hover` using tokens from `base.css`.

**04_ui_components — Cleanup & Architecture Polish**

- Removed unused Vite scaffold files:
  - Deleted `src/App.jsx` and `src/App.css` (replaced by `Layout.jsx` and `/styles`).
  - Deleted `src/index.css` (global styles moved to `/styles/base.css` and `/styles/animations.css`).
- Added `.gitignore` to exclude `node_modules/`, build outputs, IDE files, and `.env` files.
- Created barrel export files for:
  - `src/components/ui/`
  - `src/components/layout/`
  - `src/components/navigation/`
  - `src/components/icons/`
- Documented `src/features/` folder:
  - Added `.keep` file to ensure folder stays in Git.
  - Created `src/features/README.md` explaining folder purpose and suggested structure.
  - Updated root README.md and NOTES.md to reference `features/` usage.

---

## 05_content – Add Core Pages and Sections

**05.01 – Build homepage structure**  
- Create the semantic HTML layout for the homepage inside `Home.jsx`  
- Use placeholder content only (no final copy or design)  
- Ensure structure uses sectioning elements (`<header>`, `<section>`, `<footer>`, etc.)  
- Apply relevant global utility classes from `/styles`  
- Keep component imports organized by domain (UI elements, layout, etc.)  

**05.02 – Add About, Work, and Contact sections**  
- Create section components for each (`AboutSection.jsx`, `WorkSection.jsx`, `ContactSection.jsx`)  
- Add placeholder headings, paragraphs, and images  
- Ensure each section has a unique `id` for anchor linking  

**05.03 – Wireframe content layout using semantic HTML (completed)**  
- Added `dev-placeholders.css` for temporary spacing and layout; imported into `main.jsx`.  
- Verified heading hierarchy via `level={}` props in `<SectionHeading>` (H1 → H2 → H3 structure).  
- Confirmed semantic HTML structure in all sections with accessible IDs.  
- Deferred all design and final styling; placeholder styles kept isolated for removal later.
 

**Engineering Notes**  
- This phase is content skeleton only — styling beyond minimal spacing is deferred.  
- Follow the CSS naming convention from **03_style_system** (`.home-hero`, `.about-section`, `.contact-section`, etc.).  
- Any temporary styles should go in `/styles/dev-placeholders.css` so they can be removed later without affecting production CSS.



## 🪲 Bugs & Fixes

- _(none yet)_

---

## 💡 Ideas

- Maybe document deployment in a separate `deployment.md`
- Consider Tailwind vs. CSS Modules after layout is wired

---

## 🔗 Useful Links

- Vite documentation: https://vitejs.dev/guide/
- React docs: https://react.dev/
- GitHub Pages deploy guide (if used): https://pages.github.com/

---

### 🛠 Structure Ideas

- Keep shared layout components in `components/layout/`
- Use `pages/` for top-level routes only
- Place `base.css` in `styles/` and import into `main.jsx`
