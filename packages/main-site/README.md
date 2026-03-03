# Portfolio - Main Site

The main portfolio website that serves as the entry point and navigation shell for all projects. Features dark/light theme switching, responsive layout and embedded project views.

## Tech Stack

**Frontend:** React 19, TypeScript, React Router v7, SCSS

**Tooling:** Vite, React Compiler, vite-plugin-svgr

## Features

- **Theme system** - Dark/light mode toggle persisted to localStorage, implemented via CSS custom properties and `data-theme` attribute
- **Project showcase** - Dedicated routes for each project, embedded via iframe integration
- **Responsive navigation** - Hamburger menu on mobile, horizontal nav on desktop
- **Sections** - Hero, About Me, Projects, 3D Printing, Contact

## Routes

```
/                        # Home - all sections
/projects/collection     # Book Collection App
/projects/japanese       # Japanese Alphabet Game
/projects/csv-parser     # CSV Data Parser
/projects/playground     # Coding Playground
```

## Running Locally

```bash
# From monorepo root
npm install
npm run dev
```

Runs on Vite's default port. Other packages are embedded as iframes and need to be built or running separately.
