# Code Review — CV Landing

<!-- SECTION:review-context -->
**Target**: `~/Git/CV_landing` — full codebase review  
**Mode**: Full (2535 diff lines, last 5 commits)  
**Stack**: React + Vite + Tailwind + TypeScript, deployed on Netlify  
**has_spec**: false  
**has_task_doc**: false  
**Base**: HEAD~5 → HEAD  
<!-- /SECTION:review-context -->

---

<!-- SECTION:spec-compliance -->
Skipped — no spec artifact available.
<!-- /SECTION:spec-compliance -->

---

<!-- SECTION:security -->
- **MAJOR**: `.env.local` is committed to the repository and contains a real PostHog API key (`phc_Y5FTKxyz5r0Qot0o6vagcWbYrWeIvTqBPCtg9O9eC6r`). This key is now in git history and should be rotated. Add `.env.local` to `.gitignore` immediately.
- **MAJOR**: `.env.production` is also committed and contains the same PostHog key plus `NEXT_PUBLIC_SITE_URL` with a personal email in the URL path. Production secrets should never be in version control.
- **MINOR**: `PostHogProvider.tsx` uses `import.meta.env.VITE_POSTHOG_KEY` but `.env.local` defines `NEXT_PUBLIC_POSTHOG_KEY` — env var names don't match; analytics silently receives an empty key.
- **INFO**: `'use client'` directive in `PostHogProvider.tsx` is a Next.js artifact with no effect in Vite — harmless but misleading.
<!-- /SECTION:security -->

---

<!-- SECTION:code-quality -->
- **MAJOR**: `Hero.test.tsx` and `Skills.test.tsx` use `describe()` as a global but Vitest is not configured with `globals: true` in `vite.config.ts`. Both tests throw `ReferenceError: describe is not defined` at runtime — 2 of 6 test cases fail.
- **MAJOR**: `jest.config.mjs` and `jest.setup.js` remain in the project root after the Vitest migration. They are dead config that will confuse contributors.
- **MINOR**: `PostHogProvider.tsx` is imported in the codebase but never mounted in `main.tsx` or `App.tsx` — analytics are silently disabled.
- **MINOR**: `LanguageSwitcher.tsx:37` — `i18n.language` and `i18n.resolvedLanguage` are not valid `useMemo` dependencies (ESLint `react-hooks/exhaustive-deps` warning); memoized value may not recompute on language change.
- **MINOR**: `.eslintignore` file is deprecated in ESLint v9+ — migrating to the `ignores` property in `eslint.config.js` would eliminate the startup warning.
- **INFO**: `ThemeProvider.tsx` exports both components and constants in one file; a fast-refresh warning fires. Low impact for a production build.
<!-- /SECTION:code-quality -->

---

<!-- SECTION:architecture -->
- **MINOR**: `PostHogProvider` is defined but never added to the React tree — the provider abstraction exists but is not wired. Either mount it in `main.tsx` (inside `BrowserRouter` since it uses `useLocation`) or delete it if analytics are intentionally disabled.
- **MINOR**: `src/lib/registry.tsx` — unclear purpose without usage context; appears to be a Next.js styled-components server registry that has no effect in a Vite SPA. Should be removed to reduce confusion.
- **INFO**: Overall migration from Next.js to Bun+Vite is structurally sound. Feature modules use dot-suffix files (`*.styled.ts`, `*.button.tsx`) consistently with ops-layer standards. Routing is clean via react-router-dom with locale-aware redirects.
- **INFO**: No Supabase or backend code; no RLS surface to audit for this project.
<!-- /SECTION:architecture -->

---

<!-- SECTION:test-coverage -->
- **MAJOR**: `Hero.test.tsx` and `Skills.test.tsx` are broken — `describe` is undefined without Vitest globals config. Fix: add `test: { globals: true }` to `vite.config.ts` vitest config, or add `import { describe, it, expect } from 'vitest'` at the top of each test file. The non-describe tests in `Skills.utils.test.ts` pass fine.
- **MINOR**: No tests exist for `Experience`, `Projects`, `Consultation`, `Navigation`, `Footer`, `LanguageSwitcher`, or `App` — only Hero and Skills have test files. For a CV landing page this coverage gap is acceptable, but critical user-facing components (Consultation CTA) have zero coverage.
- **INFO**: `Skills.utils.test.ts` passes cleanly and covers the data-transformation utility well — good model for other utils.
<!-- /SECTION:test-coverage -->

---

<!-- SECTION:documentation -->
- **MINOR**: `.env.local` defines `NEXT_PUBLIC_POSTHOG_KEY` but `PostHogProvider.tsx` reads `VITE_POSTHOG_KEY` — the env var documentation (README table) is correct for Vite, but the committed `.env.local` file still uses the old Next.js prefix. Any developer copying `.env.local` as a template would have non-functional analytics.
- **MINOR**: `jest.config.mjs` and `jest.setup.js` are present and not documented as deprecated; new contributors may attempt to use them, expecting Jest to work.
- **INFO**: `README.md` is well-structured and accurate for the current Vite+Bun setup.
<!-- /SECTION:documentation -->

---

<!-- SECTION:performance -->
- **INFO**: `framer-motion` (~100kb gzipped) is the largest bundle dependency. For a CV landing page this is acceptable, but consider `motion/react` (the new tree-shakeable entry point) if bundle size becomes a concern.
- **INFO**: PostHog is initialized on every route change via `useEffect` — currently harmless since the key is missing, but once wired correctly, `posthog.init()` should be called once (in `main.tsx`) and `capture('$pageview')` on location changes only.
- **INFO**: No N+1 queries, unbounded loops, or missing pagination — static content, no data fetching.
<!-- /SECTION:performance -->

---

<!-- SECTION:summary -->
- **Committed secrets** — `.env.local` and `.env.production` are in git history with a real PostHog API key. The key must be rotated and both files must be removed from tracking.
- **Broken test suite** — 2 of 6 tests fail because Vitest globals (`describe`) aren't configured; a one-line fix in `vite.config.ts` resolves this.
- **Dead migration artifacts** — `jest.config.mjs`, `jest.setup.js`, `'use client'` directive, and `src/lib/registry.tsx` are Next.js leftovers that should be deleted.
- **Analytics not wired** — `PostHogProvider` exists but is never mounted; env var name mismatch (`NEXT_PUBLIC_` vs `VITE_`) means analytics would be silent even if mounted.
- **Architecture is clean** — the Vite+Bun+React migration is structurally sound; component organization follows ops-layer folder conventions well.
<!-- /SECTION:summary -->

<!-- SECTION:verdict -->
**NEEDS FIXES**

2 MAJOR security issues (committed secrets) and 2 MAJOR code-quality issues (broken tests, dead Jest config) must be resolved before merge.
<!-- /SECTION:verdict -->

<!-- SECTION:key-findings -->
1. **[MAJOR — Security]** Rotate PostHog key `phc_Y5FTKxyz5r0Qot0o6vagcWbYrWeIvTqBPCtg9O9eC6r`, remove `.env.local` and `.env.production` from git tracking (`git rm --cached .env.local .env.production`), add both to `.gitignore`.
2. **[MAJOR — Tests]** Add `test: { globals: true, environment: 'jsdom' }` to `vite.config.ts` vitest config — fixes `describe is not defined` in Hero and Skills tests.
3. **[MAJOR — Cleanup]** Delete `jest.config.mjs` and `jest.setup.js` — dead config after Vitest migration.
4. **[MINOR — Analytics]** Wire `PostHogProvider` in `main.tsx` inside `BrowserRouter`, rename `.env.local` key from `NEXT_PUBLIC_POSTHOG_KEY` → `VITE_POSTHOG_KEY`, move `posthog.init()` outside the `useEffect` to avoid re-initialization on every route.
5. **[MINOR — Cleanup]** Delete `src/lib/registry.tsx` and remove `'use client'` from `PostHogProvider.tsx` — Next.js artifacts with no effect in Vite.
<!-- /SECTION:key-findings -->

<!-- SECTION:coverage -->
Passes completed: security, code-quality, architecture, test-coverage, documentation, performance.
Spec compliance: skipped (no spec artifact).
<!-- /SECTION:coverage -->

<!-- SECTION:verification -->
- `bunx eslint .` → 0 errors, 4 warnings (exit 0)
- `bunx tsc --noEmit` → clean (exit 0)
- `bun test` → 4 pass, 2 fail — `Hero.test.tsx` and `Skills.test.tsx` fail with `ReferenceError: describe is not defined` (exit 1)
<!-- /SECTION:verification -->

<!-- SECTION:metadata -->
- **Date**: 2026-04-13
- **Target**: `~/Git/CV_landing` HEAD~5..HEAD
- **Changed files**: `.eslintignore`, `.eslintrc.json`, `.gitignore`, `.netlify/state.json`, `README.md`, `index.html`, `jest.config.mjs`, `jest.setup.js`, `netlify.toml`, `package.json`, `postcss.config.mjs`, `src/` (multiple), `tailwind.config.ts`, `tsconfig.json`, `vite.config.ts` (+docs)
- **Diff lines**: 2535
- **Passes**: security, code-quality, architecture, test-coverage, documentation, performance
- **Reviewer**: Claude (direct — Codex exec intercepted by harness)
<!-- /SECTION:metadata -->
