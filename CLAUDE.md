# Claude Code Instructions: KCCF-web

Welcome, Claude! This document provides specific instructions for working on KCCF-web.

**Project:** KCCF-web -- a Free For Charity nonprofit website

See **AGENTS.md** for the full project reference including architecture, commands, conventions, and security rules. This file covers what is different or specific to your capabilities as Claude Code.

---

## Terminal & Tool Usage

You have full terminal access via the Bash tool. Use it for all CLI operations.

**File editing:** Prefer the Edit tool over `sed` or `awk`. Always read a file before editing it.

**File search:** Use Grep and Glob tools instead of `grep`, `find`, or `rg` bash commands.

---

## Timeouts

**Set timeout to 180+ seconds** for these commands:

| Command            | Why                                                |
| ------------------ | -------------------------------------------------- |
| `npm run build`    | Static export can take 30-60s; do not cancel early |
| `npm run test:e2e` | Playwright launches browsers; needs time           |
| `npm install`      | Network-dependent; can be slow on first run        |

**NEVER CANCEL a running build, test, or install command.** Let it finish. If it fails, read the error output.

---

## Pre-Commit Checklist

Run these in order before committing:

```bash
npm run format    # Fix formatting
npm run lint      # Check for lint errors
npm test          # Run unit tests
npm run build     # Verify static export
npm run test:e2e  # Run E2E tests
```

If any step fails, fix the issue and re-run from that step forward.

---

## MCP Servers

You may have access to these MCP servers. Use them when available:

| Server             | What It Provides                                         |
| ------------------ | -------------------------------------------------------- |
| **Playwright MCP** | Browser automation, screenshots, accessibility snapshots |
| **GitHub MCP**     | Issue/PR management, repository operations               |
| **Cloudflare MCP** | DNS records, Pages deployments, Workers                  |
| **Sentry MCP**     | Error tracking, performance monitoring                   |

Check your available tools at the start of each session. If an MCP server is available, prefer it over CLI alternatives for that domain.

---

## Custom Agents

Check `.claude/agents/` for custom agent definitions. Common agents include:

| Agent         | Purpose                               |
| ------------- | ------------------------------------- |
| `dns-audit`   | Audit DNS records for correctness     |
| `site-health` | Check site availability, SSL, headers |
| `pr-reviewer` | Automated PR review checklist         |
| `onboarding`  | New repo setup and configuration      |

Invoke these when the task matches their purpose. If no matching agent exists, proceed with your general capabilities.

---

## Workflow Reminders

- **Always create a branch.** Never commit directly to `main`.
- **Link PRs to issues** with `Fixes #NNN` or `Refs #NNN` in the PR body.
- **Commit messages** use Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- **kebab-case** for all route folder names (SEO requirement).
- **Use `assetPath()`** for all image and asset references (GitHub Pages compatibility).
