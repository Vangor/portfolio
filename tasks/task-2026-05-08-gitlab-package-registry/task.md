---
title: Switch @vangor / @ops-layer scopes to GitLab Package Registry
status: done
completed_at: 2026-05-08
priority: medium
created_at: 2026-05-08
tags: [packages, gitlab, migration]
---

> 2026-05-17: Marked done — MR !2 merged (switch to gitlab.lan package registry).

# Switch package scopes to gitlab.lan

Part of personal-os/tasks/task-2026-05-08-github-to-gitlab — Phase 2 (NPM packages).

## What
- .npmrc: drop npm.pkg.github.com entries, add gitlab.lan project registry entries for the scopes this repo uses.

  - @ops-layer (task-state, project id 2)
- package.json: replace "@ops-layer/task-state": "file:../ops-layer/lib/taskState" with "^0.1.0".
- Local dev / CI must export GITLAB_NPM_TOKEN before `bun install`.

## Hard rule
DRAFT — do not merge until `@ops-layer/task-state` (and, for repos using it, `@vangor/i18n-sync`) are actually published to gitlab.lan registry. Until then `bun install` will fail to resolve the new versions.

## Pre-merge checklist
- [ ] @ops-layer/task-state v0.1.0 published to gitlab.lan registry (ops-layer MR !12).

- [ ] GITLAB_NPM_TOKEN added to GitLab CI variables for this project (group-level deploy token preferred).
- [ ] `bun install` verified clean against gitlab.lan registry.
