# Coding Playground

An in-browser code editor and transpiler that lets you write, bundle and execute JavaScript/JSX directly in the browser. Uses esbuild compiled to WebAssembly for near-instant bundling and Monaco Editor for the code editing experience.

## Live Demo

[jamarhub.com/apps/coding](https://jamarhub.com/apps/coding)

## Tech Stack

**Frontend:** React, TypeScript, Redux Toolkit, Monaco Editor, esbuild-wasm

**Backend:** Node.js, Express (for session persistence)

**Tooling:** Vite

## Features

- **Monaco Editor** - VS Code-quality code editing with syntax highlighting and autocomplete
- **In-browser bundling** - esbuild-wasm transpiles and bundles code without a server round-trip
- **Live preview** - Sandboxed iframe renders bundled output in real time
- **Notebook interface** - Cell-based layout supporting both code and markdown cells
- **NPM imports** - Import any npm package directly in code (resolved via unpkg.com CDN)
- **Persistent sessions** - Code cells saved to localStorage via Redux middleware
- **Resizable panels** - Adjustable split between editor and preview
- **Code formatting** - Built-in Prettier integration
- **Error display** - Bundle errors shown inline in the preview panel

## Architecture

```
src/
├── bundler/
│   ├── index.ts              # esbuild-wasm setup and bundling
│   └── plugins/
│       ├── unpkg-path-plugin # Resolves npm imports to unpkg.com URLs
│       └── fetch-plugin      # Fetches and caches remote modules
├── components/
│   ├── CodeCell.tsx          # Code cell with editor + preview
│   ├── CodeEditor.tsx        # Monaco Editor wrapper
│   ├── TextEditor.tsx        # Markdown cell editor
│   ├── Preview.tsx           # Sandboxed iframe for code execution
│   ├── CellList.tsx          # Notebook cell management
│   ├── ActionBar.tsx         # Cell actions (move, delete)
│   ├── AddCell.tsx           # Insert new cell
│   └── Resizable.tsx         # Resizable panel wrapper
└── state/
    ├── store.ts              # Redux store configuration
    ├── reducers/             # Cells, bundles, session state
    ├── action-creators/      # Async thunks for bundling
    └── middlewares/          # Persistence and session middleware
```

## How It Works

1. User writes JavaScript/JSX in the Monaco editor
2. On execution, esbuild-wasm transpiles and bundles the code in the browser
3. NPM imports are resolved through unpkg.com and cached locally
4. Bundled output is injected into a sandboxed iframe for execution
5. Cell state is persisted to localStorage between sessions

## Running Locally

```bash
# From monorepo root
npm install
npm run dev --workspace=packages/playground
```
