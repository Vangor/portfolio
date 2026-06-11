#!/usr/bin/env bun
/**
 * File-size guard (studio-wide canonical) — enforces the ops-layer standard:
 *   WARN at 150 effective lines, HARD FAIL (exit 1) at 250.
 *
 * Counts EFFECTIVE lines (skips blank + comment lines, matching the old ESLint
 * `max-lines` with skipBlankLines/skipComments).
 *
 * RATCHET (tightening-only): pre-existing files over HARD are pinned in
 * file-size-allowlist.json at their current size. An allowlisted file may not
 * GROW past its ceiling; a NEW or non-allowlisted file may not exceed HARD.
 * Files between WARN and HARD only warn. Burn a file down, then run --update to
 * lock the gain (lower its ceiling / drop it from the list).
 *
 * Per-repo overrides live in scripts/file-size.config.json (all keys optional):
 *   { "warn": 150, "hard": 250, "include": [glob,...], "exempt": [substr,...] }
 * `include` globs are relative to the repo root; `exempt` entries are matched as
 * substrings against the repo-root-relative POSIX path.
 *
 *   bun scripts/check-file-size.ts          # fail on any violation (CI)
 *   bun scripts/check-file-size.ts --update # re-seed the allowlist to actuals
 */
import { Glob } from "bun";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dir, "..");
const ALLOWLIST_PATH = join(import.meta.dir, "file-size-allowlist.json");
const CONFIG_PATH = join(import.meta.dir, "file-size.config.json");

type Config = { warn?: number; hard?: number; include?: string[]; exempt?: string[] };
const config: Config = existsSync(CONFIG_PATH)
  ? JSON.parse(readFileSync(CONFIG_PATH, "utf8"))
  : {};

const WARN = config.warn ?? 150;
const HARD = config.hard ?? 250;
const INCLUDE = config.include ?? ["**/*.{ts,tsx,js,jsx,mjs,cjs}"];

// Directories and file shapes that never count: deps, build output, worktrees,
// tests, type decls, generated/vendored code.
const DEFAULT_EXEMPT = [
  "/node_modules/", "/dist/", "/build/", "/.next/", "/.turbo/", "/.output/",
  "/.svelte-kit/", "/out/", "/coverage/", "/.worktrees/", "/.git/", "/vendor/",
  "/components/ui/", "/__mocks__/", "/__tests__/", "/__fixtures__/",
  "/tests/", "/test/", "/e2e/",
];
const exempt = [...DEFAULT_EXEMPT, ...(config.exempt ?? [])];

function isExempt(rel: string): boolean {
  const p = "/" + rel; // anchor so "/tests/" also matches a top-level dir
  if (
    rel.endsWith(".d.ts") ||
    /\.(test|spec|stories)\.[cm]?[jt]sx?$/.test(rel) ||
    /\.generated\.|\.gen\.[cm]?[jt]s$/.test(rel) ||
    rel.endsWith("database.types.ts") ||
    (rel.includes("/supabase/") && rel.endsWith("types.ts"))
  ) {
    return true;
  }
  return exempt.some((e) => p.includes(e));
}

function effectiveLines(src: string): number {
  let count = 0;
  let inBlock = false;
  for (const raw of src.split("\n")) {
    const line = raw.trim();
    if (inBlock) {
      const closeIdx = line.indexOf("*/");
      if (closeIdx === -1) continue;
      inBlock = false;
      const after = line.slice(closeIdx + 2).trim();
      if (after !== "" && !after.startsWith("//")) count++;
      continue;
    }
    if (line === "") continue;
    if (line.startsWith("//")) continue;
    if (line.startsWith("/*")) {
      const closeIdx = line.indexOf("*/");
      if (closeIdx === -1) { inBlock = true; continue; }
      // single-line block comment: check if code follows after */
      const after = line.slice(closeIdx + 2).trim();
      if (after === "" || after.startsWith("//")) continue;
      count++;
      continue;
    }
    if (line.startsWith("*")) continue; // jsdoc continuation
    count++;
  }
  return count;
}

const seen = new Set<string>();
for (const pattern of INCLUDE) {
  for (const f of new Glob(pattern).scanSync(ROOT)) {
    const rel = f.split("\\").join("/");
    if (!isExempt(rel)) seen.add(rel);
  }
}
const files = [...seen].sort();

const sizes = new Map<string, number>();
for (const rel of files) {
  sizes.set(rel, effectiveLines(readFileSync(join(ROOT, rel), "utf8")));
}

if (process.argv.includes("--update")) {
  const allow: Record<string, number> = {};
  for (const rel of files) {
    const n = sizes.get(rel)!;
    if (n > HARD) allow[rel] = n;
  }
  const ordered = Object.fromEntries(Object.keys(allow).sort().map((k) => [k, allow[k]]));
  writeFileSync(ALLOWLIST_PATH, JSON.stringify(ordered, null, 2) + "\n");
  console.log(`updated allowlist: ${Object.keys(allow).length} file(s) over HARD=${HARD}`);
  process.exit(0);
}

const allow: Record<string, number> = existsSync(ALLOWLIST_PATH)
  ? JSON.parse(readFileSync(ALLOWLIST_PATH, "utf8"))
  : {};

const errors: string[] = [];
const warnings: string[] = [];
for (const rel of files) {
  const n = sizes.get(rel)!;
  const cap = allow[rel];
  if (cap !== undefined) {
    if (n > cap) errors.push(`${rel}: grew to ${n} (allowlisted ceiling ${cap}) — split, do not grow`);
  } else if (n > HARD) {
    errors.push(`${rel}: ${n} effective lines (HARD limit ${HARD})`);
  } else if (n > WARN) {
    warnings.push(`${rel}: ${n} effective lines (over WARN ${WARN})`);
  }
}

// Flag stale allowlist entries (file deleted or already burned below HARD).
const stale = Object.keys(allow).filter((rel) => !sizes.has(rel) || sizes.get(rel)! <= HARD);

if (warnings.length) {
  console.warn(`\n⚠ file-size guard: ${warnings.length} file(s) over WARN=${WARN} (not failing):`);
  for (const w of warnings) console.warn("  " + w);
}
if (stale.length) {
  console.warn(`\nℹ ${stale.length} allowlist entry(ies) can be removed (run --update):`);
  for (const s of stale) console.warn("  " + s);
}

if (errors.length) {
  console.error(`\n✗ file-size guard: ${errors.length} violation(s) (HARD ${HARD} effective lines)\n`);
  for (const e of errors) console.error("  " + e);
  console.error(`\nFix: split by responsibility. Burn allowlisted files down, then run --update.`);
  process.exit(1);
}
console.log(
  `✓ file-size guard: ${files.length} file(s) scanned, all within limits ` +
    `(WARN ${WARN} / HARD ${HARD}, ${Object.keys(allow).length} legacy file(s) ratcheted)`,
);
