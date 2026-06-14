---
project: CV_landing
description: Personal CV / portfolio landing page
commands:
  build: bun vite build
  dev: bun vite
  db: TBD
  test: bun vitest run
links:
  local: http://localhost:5173
  staging: TBD
  production: https://vanichk.in
notes:
  - See .env.example for required public environment variables
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
| Test | `bun vitest run` |
| Lint | `bunx eslint .` |
| Format | `bunx prettier . --write` |

## Operational Notes

- Copy `.env.example` to `.env.local` and fill in real values for local development
- Netlify deploys on push to main
