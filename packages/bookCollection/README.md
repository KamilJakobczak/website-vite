# Book Collection App

A fullstack web application for organizing a multilingual family book collection. Supports browsing, searching, filtering, and managing books along with their related entities (authors, publishers, genres, translators, book series). Includes EPUB file upload with automatic metadata extraction.

## Live Demo

[jamarhub.com/apps/collection/books](https://jamarhub.com/apps/collection/books)

## Tech Stack

**Frontend:** React 19, TypeScript, Apollo Client, React Router v7, i18next, SCSS

**Backend:** Node.js, Express, Apollo Server, GraphQL, Prisma, MongoDB

**Tooling:** Vite, npm workspaces

## Features

- **Book management** - Full CRUD for books, authors, publishers, genres, translators and book series
- **EPUB upload** - Upload EPUB files to automatically extract and populate book metadata (title, author, cover, ISBN)
- **GraphQL API** - All data operations through Apollo Client with queries, mutations and cache management
- **Authentication** - User registration and login with role-based access control and protected routes
- **Internationalization** - Multi-language support (EN/PL) via i18next
- **Search and filtering** - Filter books by genre, language, status; search across all record types
- **Pagination** - Paginated feeds for all list views with configurable page sizes
- **User library** - Logged-in users can track owned books, reading dates and ratings
- **Responsive design** - Mobile-first layout with breakpoints at 480px, 768px, 1024px and 1280px

## Data Model

Books relate to multiple entities through the GraphQL schema:

```
Book ──┬── Author(s)
       ├── Genre(s)
       ├── Publisher
       ├── Translator(s)
       └── Book Series (with tome number)
```

Each entity has its own detail page, edit form, and list view with pagination.

## Project Structure

```
src/
├── components/
│   ├── adding_records/    # Forms for creating/editing all entity types
│   ├── filter/            # Book filtering by genre, language, etc.
│   ├── general-purpose/   # Shared components (Button, Select, Search, etc.)
│   ├── lists/             # Paginated list views, A-Z lists
│   ├── single_records/    # Detail pages for each entity type
│   └── user/              # Auth forms, profile, user library
├── GraphQL/
│   ├── mutations/         # Create, update, delete operations + auth
│   └── queries/           # List feeds and single record queries
├── routes/                # Router config with protected routes
├── style/                 # SCSS organized by feature
└── utility/
    ├── handlers/          # Validation (ISBN, URL, duplicates), data processing
    └── hooks/             # Custom hooks for pagination and data fetching
```

## Running Locally

```bash
# From monorepo root
npm install
npm run dev --workspace=packages/bookCollection
```

Requires the backend server running at `localhost:4000`. See [personal_website_server](https://github.com/KamilJakobczak/personal_website_server) for setup.
