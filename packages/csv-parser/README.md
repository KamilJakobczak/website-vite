# CSV Data Parser and Viewer

A Vue 3 application for importing CSV datasets, parsing their content, and rendering interactive tables with sorting, grouping and XML export. Handles datasets from 100 to 1,000,000 rows using virtual scrolling for performance.

## Live Demo

[kamiljakobczak.github.io/recruitment-task-in-vue](https://kamiljakobczak.github.io/recruitment-task-in-vue/)

## Tech Stack

**Framework:** Vue 3 (Composition API), TypeScript

**Tooling:** Vite, vue-tsc

## Features

- **CSV import** - Load datasets of varying sizes (100 / 1K / 10K / 100K / 1M rows)
- **Flat table view** - Full editable table with column headers and row rendering
- **Grouped table view** - Aggregate data by category, currency or account with expand/collapse and totals
- **Virtual scrolling** - Efficient rendering for large datasets with synchronized scroll positions
- **XML export** - Convert and view data in XML format
- **Progress indicator** - Real-time progress bar during data loading
- **Progressive loading** - Incremental data loading to avoid blocking the UI

## Architecture

The app is built around Vue 3 composables for separation of concerns:

```
src/
├── components/          # Vue components (App, tables, selectors, progress bar)
├── composables/         # Reusable logic
│   ├── useGroupedData   # Groups data by selected key
│   ├── useGroupToggle   # Expand/collapse state for groups
│   ├── useGroupedRows   # Flattens grouped data for display
│   ├── useScrollSync    # Virtual scrolling synchronization
│   ├── useTotals        # Aggregate calculations
│   ├── useXml           # XML conversion
│   └── useProgressiveData # Incremental data loading
└── types/               # TypeScript interfaces
```

## Running Locally

```bash
npm install
npm run dev
```
