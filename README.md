# jareddaley.com

Personal site of Jared Daley — Information and Cyber Security professional, policy advocate, and system architect based in Vancouver, BC.

## Stack

- **React 19** — UI
- **PandaCSS** — build-time CSS-in-JS
- **Vite 6** — build tool and dev server
- **ESLint 10** — linting via `@eslint-react/eslint-plugin`

## Getting Started

```bash
npm install
npm run dev
```

The `dev` script runs `panda codegen` before starting Vite, which regenerates the `styled-system/` directory from your component styles. This directory is gitignored — always run `npm install` before `npm run dev` on a fresh clone.

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Regenerate styled-system and start dev server at `http://localhost:5173` |
| `npm run build` | Regenerate styled-system and build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint `app/` with ESLint |
