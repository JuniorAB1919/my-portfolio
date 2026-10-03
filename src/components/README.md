# Andrews Osei Bonsu — Portfolio (v2)

Rebuilt to match the reference layout: card-grid projects, icon-labeled skills
list, and a two-column About/Contact block — using this palette:

- Background: `#3a0353`
- Purple accent: `#804a8a`
- Tan accent: `#f8d299`
- Orange (buttons/CTAs): `#f59e51`
- Text: white / translucent white for secondary text

## What changed from v1

- Hero keeps the small tech-stack **icons** (react-icons), now styled for the
  dark palette, with a new stacked-window illustration on the right.
- Projects are now a **2-column card grid** (thumbnail + title + tags +
  icon-only demo/GitHub links) — the "View Case Study" button has been
  removed entirely, per your last note.
- Skills are grouped with a small icon + heading, then a dot-separated line
  of items (matches the screenshot instead of tag chips).
- About and Contact now sit side-by-side in one section, like the reference.
- Nav trimmed to Home / Projects / About / Contact, logo shortened to
  "ANDREWS" to match the screenshot.

## Install

```
npm install react-icons
```

## Drop-in

1. Replace `src/App.jsx` and `src/index.css` with the versions here.
2. Copy `src/components/` and `src/data/` in as-is (they overwrite the v1
   files of the same name).
3. Update the `#` placeholders in `src/data/portfolioData.js`
   (`links.demo`, `links.github`) with your real project/repo URLs.
4. Project thumbnails are drawn as colored placeholder panels with a
   representative icon (code / board / dollar / lock / clipboard) — swap in
   real screenshots later by replacing `.project-thumb`'s contents with an
   `<img>`.
