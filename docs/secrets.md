# Secrets & Environment Variables

Secrets are managed via [1Password](https://1password.com) and injected locally using the `op` CLI.  
**Never commit `.env.local` or `.env.production`** — they are gitignored.

## Templates

| Template | Live file | Purpose |
|---|---|---|
| `.env.local.tmpl` | `.env.local` | Development secrets (Vite dev server) |
| `.env.production.tmpl` | `.env.production` | Production secrets (build / deploy) |

Both templates are tracked in git and contain `op://` references instead of real values.

## Hydrating env files

Requires the [1Password CLI](https://developer.1password.com/docs/cli/) (`op`) and an active session.

```bash
# Sign in (first time or after session expiry)
eval $(op signin)

# Hydrate both .env.local and .env.production
bun run hydrate
```

Or manually for one file:

```bash
op inject -f -i .env.local.tmpl -o .env.local
op inject -f -i .env.production.tmpl -o .env.production
```

## Running commands with injected secrets

```bash
bun run with-op <command>
# e.g. bun run with-op bun run dev
```

## Vault

1Password vault ID: `4etverg`  
Item: `Portfolio PostHog` → field `api_key`

## Testing the hydrate setup

```bash
bun run hydrate:test
```

Expected output: `Summary: ok=5 fail=0`
