---
project: CV_landing
description: Personal CV / portfolio landing page
commands:
  build: bun vite build
  dev: bun vite
  db: TBD
  test: TBD
links:
  local: http://localhost:5173
  staging: TBD
  production: TBD
notes:
  - Deployed via Netlify (netlify.toml at root)
  - SPA redirect rule required for client-side routing
---

# Project Quick Reference

## What This Is

Personal CV and portfolio landing page. Built on React + Vite, deployed to Netlify.

## Commands

| Command | Run |
|---------|-----|
| Dev server | `bun vite` |
| Build | `bun vite build` |
| Lint | `bunx eslint .` |
| Format | `bunx prettier . --write` |

## Operational Notes

- No `.env.example` — no runtime env vars required
- Netlify deploys on push to main
