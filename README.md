# HO Design 2026

HomeOptima new design frontend project and UI structure.

## Project Overview

This repository contains the static frontend design files, assets, SCSS/CSS styles, JavaScript files, fonts, and libraries used for the HomeOptima 2026 design.

## Folder Structure

- `index.html` — main demo/prototype page
- `fonts/` — downloaded and converted font files used in the project
- `images/` — image assets used in the design
- `icons/` — SVG/icon assets
- `js/` — JavaScript files for interactions
- `libraries/` — downloaded third-party libraries
- `styles/` — main styling folder
  - `css/` — compiled CSS files
  - `scss/` — SCSS source files
  - `abstract/` — variables, mixins, and design tokens
  - `components/` — reusable component styles

## Project Guidelines

1. Do not use CDN links.
2. Use only downloaded and converted fonts inside the project.
3. Link all libraries through `style.css` or local project files.
4. Maintain a clean folder structure for:
   - fonts
   - styles
   - images
   - libraries
   - JavaScript

## Getting Started / Preview

Open `index.html` directly in the browser.

Or run a simple local server from the project root:

```powershell
python -m http.server 8000