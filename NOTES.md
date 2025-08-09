# NOTES.md – portfolio-site-2025

This is your working notes file for the `portfolio-site-2025` project. Use this to track todos, bugs, links, ideas, and anything else that doesn't belong in the main README.

---

## ✅ TODO – Phase 00: Init Environment

- [x] 00.01 – Create root folder: `portfolio-site-2025`
- [x] 00.02 – Create and store build roadmap in `README.md`
- [x] 00.03 – Initialize Git repository
- [x] 00.04 – Install Vite + React
- [x] 00.05 – Verify local dev server runs
- [x] 00.06 – Push initial commit to GitHub

---

## 📁 Phase 01 – Project Structure (WIP)

### ✅ TODO

- [x] Create base folder structure: `components/`, `pages/`, `styles/`
- [x] Create `Home.jsx` placeholder page
- [x] Create and commit `.gitignore` (if missing)
- [x] Add `NOTES.md` to Git
- [x] Set up path aliases in `vite.config.js`

---

## 🔁 Routing Structure (Phase 02)

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

## 🏷 CSS Naming Convention (Phase 03)

We're using a **Hybrid CSS naming convention**:

- Semantic block names for sections: `.home-hero`, `.about-section`, `.contact-form`
- BEM-style nesting for internal elements: `.about-section__title`, `.about-section__image`
- Utility classes for spacing/typography/layout: `.text-center`, `.mb-4`, `.grid-2`

This gives flexibility while keeping things organized and readable — a best practice for engineers working with plain CSS at scale.

---

## CSS Modules Policy (Phase 03)

- Global styles remain in /styles (base, variables, utilities, section-level).
- Component-specific styles live next to the component as *.module.css inside src/components/.
- Naming inside modules: use `root` for the top element, and descriptive names for parts (e.g., `title`, `icon`).
- Keep utilities global and reusable; modules should not redefine global utilities.

---

## CSS Conventions (Phase 04 and beyond)

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

---


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

_Last synced with local NOTES.md on August 7, 2025._
