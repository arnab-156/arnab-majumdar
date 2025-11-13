# Repository Guidelines

## Project Structure & Module Organization
The Next.js App Router lives in `src/app`; each route folder (e.g., `src/app/games/quiz`) owns its `page.tsx`, optional `layout.tsx`, and local helpers. Shared UI such as cards, icons, and utilities belongs in `src/app/components` and `src/app/utility`. Static assets sit in `public`, and a lightweight Express/Mongoose prototype resides in `backend/`; only change it when APIs or data models are documented in the README.

## Build, Test, and Development Commands
- `npm run dev` – Next.js dev server with fast refresh at http://localhost:3000.
- `npm run build` – Production bundle and type checks; run before tagging a release or deploying to Vercel.
- `npm run start` – Serves the optimized build locally to catch runtime-only issues.
- `npm run lint` – Executes `next lint` using the repo ESLint + Tailwind config; fix or justify every warning.
- `npm test` – Jest + React Testing Library suite; add `-- --watch` while iterating.

## Coding Style & Naming Conventions
Use TypeScript everywhere with explicit types for exported functions and component props. Keep 2-space indentation, single quotes for imports, and PascalCase filenames for components (`Card.tsx`) while variables/functions stay camelCase. Tailwind class strings should group layout → spacing → color utilities; prefer tokens defined in `tailwind.config.ts` or `src/app/utility/stylevariables.tsx` over inline values.

## Testing Guidelines
Tests live beside features in `src/app/__tests__` or `src/app/components/__tests__` using the `*.test.tsx` suffix. Follow the existing behavior-driven naming pattern (`"renders Stern section"`, `"navigates to help"`) and assert aria labels plus key copy so visual tweaks surface regressions. New components need at least one render test and one interaction or state-change test. Avoid snapshots; rely on RTL queries such as `getByRole` and `within`. Run `npm test` before every PR.

## Commit & Pull Request Guidelines
Commits should be short, imperative statements mirroring the current history (`Update Stern highlight imagery`, `Replace headshot asset (#84)`). Rebase on `main`, then open a PR that lists the user-visible change, linked issues, and the commands you ran. Include screenshots or short clips for UI updates and summarize any backend or environment variable adjustments so reviewers can reproduce the setup quickly.

## Security & Configuration Tips
Secrets belong in `.env.local` (frontend) or `.env` inside `backend/` and must stay untracked. Never expose API keys in client components; proxy through backend routes or server components. Review third-party embeds and external image hosts before merging, and confirm new middleware stays within Vercel’s region + timeout constraints.
