# Claude Code Instructions: KCCF-web

Welcome, Claude! This document provides specific instructions for working on KCCF-web.

**Project:** KCCF-web -- a Free For Charity nonprofit website

See **AGENTS.md** for the full project reference (architecture, commands, conventions, security, current-vs-planned toolchain). This file covers what is specific to your capabilities as Claude Code. Where the two differ, AGENTS.md's "Current vs. desired state" note governs — describe and use the repo **as it is today**.

---

## Terminal & Tool Usage

You have full terminal access via the Bash tool. Use it for all CLI operations.

**File editing:** Prefer the Edit tool over `sed` or `awk`. Always read a file before editing it.

**File search:** Use Grep and Glob tools instead of `grep`, `find`, or `rg` bash commands.

---

## Timeouts

**Set timeout to 180+ seconds** for these commands:

| Command         | Why                                                |
| --------------- | -------------------------------------------------- |
| `npm run build` | Static export can take 30-60s; do not cancel early |
| `npm install`   | Network-dependent; can be slow on first run        |

**NEVER CANCEL a running build, test, or install command.** Let it finish. If it fails, read the error output.

---

## Pre-Commit Checklist

Run the commands that exist today, in order:

```bash
npm run lint      # ESLint
npm test          # Jest unit/component tests
npm run build     # Verify the static export
```

If any step fails, fix the issue and re-run from that step forward.

> **Planned (not yet in this repo):** `npm run format` (Prettier) and `npm run test:e2e` (Playwright). Do not run them until they exist — see AGENTS.md and `TECHNICAL_DEBT.md` / issue #412.

---

## MCP Servers

You may have access to these MCP servers. Use them when available (check your tools at the start of each session):

| Server             | What It Provides                                         |
| ------------------ | -------------------------------------------------------- |
| **GitHub MCP**     | Issue/PR management, repository operations               |
| **Playwright MCP** | Browser automation, screenshots, accessibility snapshots |
| **Cloudflare MCP** | DNS records, Pages deployments, Workers                  |

If an MCP server is available, prefer it over CLI alternatives for that domain.

---

## Custom Agents

Check `.claude/agents/` for custom agent definitions. Available in this repo:

| Agent                 | Purpose                                   |
| --------------------- | ----------------------------------------- |
| `pr-reviewer`         | Automated PR review checklist             |
| `copilot-review-cycle`| Drive the Copilot review/fix loop         |
| `cross-repo-sync`     | Sync shared config across FFC repos       |
| `dns-audit`           | Audit DNS records for correctness         |
| `site-health`         | Check site availability, SSL, headers     |
| `onboarding`          | New repo setup and configuration          |

Invoke these when the task matches their purpose. If no matching agent exists, proceed with your general capabilities.

---

## Workflow Reminders

- **Always create a branch.** Never commit directly to `main`.
- **Link PRs to issues** with `Fixes #NNN` or `Refs #NNN` in the PR body.
- **Commit messages** use Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`.
- **kebab-case** for all route folder names (SEO requirement).
- **Assets:** reference images with root-relative paths (e.g. `/images/foo.webp`) via `next/image`; `basePath` is handled by `next.config.ts`. There is **no** `assetPath()` helper in this repo.
- **Squash merges are disabled** on this repo — merge via merge commit. Conversation resolution is required before merge.
