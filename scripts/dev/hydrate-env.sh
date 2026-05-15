#!/usr/bin/env bash
set -euo pipefail
if ! command -v op >/dev/null 2>&1; then echo "op CLI required" >&2; exit 1; fi
if ! op vault list >/dev/null 2>&1; then echo 'Run: eval $(op signin)' >&2; exit 1; fi
hydrate_one() {
  local tmpl="$1" live="$2"
  [[ ! -f "$tmpl" ]] && { echo "missing template: $tmpl" >&2; exit 1; }
  if git ls-files --error-unmatch -- "$live" >/dev/null 2>&1; then
    local s; s="$(git status --porcelain --untracked-files=no -- "$live" || true)"
    [[ -n "$s" ]] && { echo "refusing to overwrite tracked $live" >&2; exit 1; }
  fi
  op inject -f -i "$tmpl" -o "$live"
  echo "hydrated $live"
}
hydrate_one .env.local.tmpl .env.local
hydrate_one .env.production.tmpl .env.production
