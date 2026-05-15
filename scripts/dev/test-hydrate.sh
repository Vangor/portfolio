#!/usr/bin/env bash
set -uo pipefail
fail=0; ok=0
assert() { local d="$1"; shift; if "$@" >/dev/null 2>&1; then echo "  OK   $d"; ok=$((ok+1)); else echo "  FAIL $d" >&2; fail=$((fail+1)); fi; }
(
  unset OP_SERVICE_ACCOUNT_TOKEN 2>/dev/null || true
  PATH="/tmp/fake-op-bin:$PATH"
  mkdir -p /tmp/fake-op-bin
  printf '#!/usr/bin/env bash\nexit 1\n' > /tmp/fake-op-bin/op
  chmod +x /tmp/fake-op-bin/op
  if bash scripts/dev/hydrate-env.sh >/dev/null 2>&1; then exit 1; else exit 0; fi
)
[ $? -eq 0 ] && { echo "  OK   hydrate exits non-zero w/o auth"; ok=$((ok+1)); } || { echo "  FAIL"; fail=$((fail+1)); }
rm -rf /tmp/fake-op-bin
assert ".env.local is gitignored"      git check-ignore -q .env.local
assert ".env.production is gitignored" git check-ignore -q .env.production
for tmpl in .env.local.tmpl .env.production.tmpl; do
  if git check-ignore -q "$tmpl" 2>/dev/null; then echo "  FAIL $tmpl ignored"; fail=$((fail+1)); else echo "  OK   $tmpl tracked"; ok=$((ok+1)); fi
done
echo; echo "Summary: ok=$ok fail=$fail"
[ $fail -eq 0 ]
