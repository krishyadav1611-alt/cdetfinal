# CDET MEDIA - Hosting Guide

For hosting this Phonk/Funk record label website, ensure you have the following key files and configurations:

## Core Backend Files
- `server/index.ts`: Main entry point for the Express server.
- `server/routes.ts`: API endpoints for artists, releases, and submissions.
- `server/storage.ts`: Handles data persistence (currently using PostgreSQL).
- `server/db.ts`: Database connection configuration.

## Core Shared Files
- `shared/schema.ts`: Database table definitions (Drizzle ORM).
- `shared/routes.ts`: Shared API contract and types.

## Frontend Files
- `client/index.html`: Main HTML template.
- `client/src/main.tsx`: React application entry point.
- `client/src/App.tsx`: Routing and global providers.
- `client/src/pages/`: All page components (Home, Artists, Releases, etc.).
- `client/src/index.css`: Global styles and dark mode variables.

## Configuration
- `package.json`: Contains all dependencies and build scripts.
- `tailwind.config.ts`: Tailwind CSS theme and font configurations.
- `vite.config.ts`: Frontend build and dev server settings.
- `drizzle.config.ts`: Database migration settings.

## Environment Variables Needed
- `DATABASE_URL`: Connection string for your PostgreSQL database.
- `NODE_ENV`: Set to `production` for deployment.
