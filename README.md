# Hamza — Portfolio

Personal portfolio site for Hamza, UX designer and front-end developer. It's a static site written by hand in plain HTML, CSS and JavaScript, with no framework, build step or dependencies. Site content is in Dutch.

## Running locally

Open `index.html` in a browser. That's all you need.

If you'd rather use a local server (smoother for video playback and relative links), run one from the project folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## Project structure

```
.
├── index.html             # Homepage: hero, projects, skills, about, contact
├── project-sitr.html      # Case study: SITR (branding / web design)
├── project-s4y.html       # Case study: S4Y (UX/UI / platform)
├── project-next.html      # Case study: NEXT (web design / UX/UI)
├── style.css              # Shared stylesheet for every page
├── script.js              # Shared behaviour for every page
├── i18n.js                # Language switch (NL / EN / FR) + English and French texts
└── assets/
    ├── NEXT_home.jpg      # NEXT homepage screenshot
    └── favicon.svg        # Browser tab icon
```

Every page loads the same `style.css` and `script.js`. Each script feature checks that its target element exists first, so pages that don't have the element skip that feature.

## Homepage sections

| Anchor       | Section                                                         |
| ------------ | --------------------------------------------------------------- |
| `#hero`      | "Denk het. Ontwerp het. Bouw het." statement on an interactive grid canvas (selected cell, fading trail, coordinates) |
| `#projecten` | Numbered project list (`.work-item`) linking to the case study pages |
| `#skills`    | Three columns — Denk / Ontwerp / Bouw — with plain skill lists  |
| `#over`      | Rotating job title, about text, count-up stats and three principles |
| `#contact`   | Email, LinkedIn and GitHub as large link rows                   |

## JavaScript features (`script.js`)

- **Scroll progress bar** (`#progressBar`) and a nav shadow that appears after 100px of scrolling (`nav.scrolled`)
- **Smooth scrolling** for in-page `#anchor` links
- **Hero spotlight**: sets the `--spot-x` / `--spot-y` CSS variables on `#hero` when the pointer moves
- **Hero intro**: adds `.is-animating` to `#hero`, then steps through `think-sketch` → `think-fill` → `design-select` (frame + measured size) → `design-fill` → typing "Bouw het." → `intro-in`. Skipped with reduced motion; without JS the text is just visible
- **Hero canvas** (`#heroCanvas`, `#heroCursorLabel`): draws the selected 64px grid cell, a fading trail and a coordinate label; only on devices with a mouse
- **Word rotator** (`#wordRotator`): switches `.word` elements every 2.4s using the `is-active` / `is-leaving` classes
- **Count-up stats**: `.stat-number[data-count]` counts up once when it scrolls into view; `data-suffix` is optional (e.g. `%`)
- **Scroll reveal**: `.reveal` elements get the `.active` class once they enter the viewport

## Languages (NL / EN / FR)

Dutch is the source text and stays in the HTML. Every translatable element has `data-i18n="key"` (its innerHTML is swapped) or `data-i18n-attr="attribute:key"` (for `alt`, `aria-label`, meta `content`). English and French live in `translations` in `i18n.js`.

- **New or changed text:** add `data-i18n="some.key"` to the element and add `some.key` to both `en` and `fr` in `i18n.js`. A missing key simply falls back to Dutch.
- The choice is saved in `localStorage`; the first visit follows the browser language (English or French), otherwise Dutch. `?lang=en` in the URL forces a language.
- Load `i18n.js` before `script.js`, so the hero intro types the translated "Bouw het." line.

## Styling

Design tokens are CSS variables on `:root` in `style.css`:

| Token            | Value     | Use                  |
| ---------------- | --------- | -------------------- |
| `--accent`       | `#ff6b00` | Brand orange          |
| `--accent-light` | `#ff8533` | Gradient partner      |
| `--ink`          | `#1a1a2e` | Dark headings         |
| `--text-muted`   | `#666666` | Secondary text        |
| `--font-display` | Space Grotesk | Headings (Google Fonts) |

Animations are turned off for users who have `prefers-reduced-motion` enabled.

## Adding a new project

1. Copy one of the `project-*.html` pages (`project-next.html` is the most complete template: intro, meta list, numbered chapters and a "next project" row).
2. Put images and videos in `assets/` and point the page to them.
3. Add a `.work-item` to the `.work-list` in `index.html`, and update the `01 / 03` counters and "Volgend" links on the project pages.
4. Update the "Projecten" count (`data-count`) in the stats of `#over`.

## Known gaps / TODO

- **Placeholder links:** the LinkedIn and GitHub rows in `#contact` and the footer social links still point to `#`.
- **Unfinished case studies:** SITR and S4Y are "coming soon" pages. The Figma screens for NEXT still need to be added.
- **Share image:** there is no `og:image` yet; it needs an absolute URL once the site has a domain.

## Deployment

Any static host will serve the site (GitHub Pages, Netlify, Vercel, Render). The homepage is `index.html`, so it loads at the root URL.
