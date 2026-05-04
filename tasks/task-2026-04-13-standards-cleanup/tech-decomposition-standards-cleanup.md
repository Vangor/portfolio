---
title: "Standards Cleanup — CV_landing"
status: backlog
priority: low
tags: [cv, standards]
created_at: 2026-04-13
updated_at: 2026-04-13
---

# Task: Standards Cleanup — CV_landing

**Date**: 2026-04-13
**Project**: `~/Git/CV_landing`
**Status**: in_progress
**Worktree**: `~/.worktrees/cv-standards-cleanup`

## Context

Post-review cleanup pass to bring the project fully in line with ops-layer coding standards. All lint/tsc checks pass. Issues are structural and organisation-level, not functional.

## Must Haves

1. **Fix `.eslintignore` deprecation warning** — migrate ignored paths into `ignores` property in `eslint.config.js` (ESLint v9 flat config)
2. **Fix `useMemo` unnecessary deps warning** — `LanguageSwitcher.tsx:37` — remove `i18n.language` and `i18n.resolvedLanguage` from dependency array or refactor the memo
3. **Fix `react-refresh/only-export-components` warnings**:
   - `ThemeProvider.tsx` — move exported constants/functions to a separate file
   - `test-utils.tsx` — move component exports to a separate file (exempt from this if test-only)
4. **Add missing barrel exports** — components that lack an `index.ts` re-export: `Consultation`, `Experience`, `Footer`, `Header`, `Hero`, `LanguageSwitcher`, `Layout`, `Navigation`, `Projects`, `Skills`, `ThemeProvider`
5. **`Footer` sub-components** — `Privacy.tsx` and `Terms.tsx` are flat files inside `Footer/` but aren't dot-suffixed (`Footer.Privacy.tsx`, `Footer.Terms.tsx`) per the parent-owned sub-piece convention
6. **`PolicyDialog` nested folder** — `Footer/PolicyDialog/` is a nested folder for a parent-owned sub-piece; should be flattened to `Footer.PolicyDialog.tsx` + `Footer.PolicyDialog.styled.ts`

## Out of Scope

- Rewriting styled-components to Tailwind (separate migration task)
- Adding new features or content

## Test Plan

- `bun run lint` → 0 errors, 0 warnings
- `bun run type-check` → exit 0
- `bun test` → all existing tests pass

## Implementation Steps

- [ ] Step 1: Fix ESLint warnings (eslintignore deprecation, useMemo deps, react-refresh)
- [ ] Step 2: Flatten Footer sub-components (rename + PolicyDialog)
- [ ] Step 3: Add barrel index.ts exports for all components

## File Targets

- `eslint.config.js`
- `src/components/LanguageSwitcher/LanguageSwitcher.tsx`
- `src/components/ThemeProvider/ThemeProvider.tsx`
- `src/components/Footer/Privacy.tsx` → `Footer.Privacy.tsx`
- `src/components/Footer/Terms.tsx` → `Footer.Terms.tsx`
- `src/components/Footer/PolicyDialog/*` → flatten to `Footer.PolicyDialog.tsx` + `Footer.PolicyDialog.styled.ts`
- `src/components/*/index.ts` — add barrel exports for all components missing them