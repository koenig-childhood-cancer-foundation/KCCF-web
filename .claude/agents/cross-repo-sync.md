# cross-repo-sync

## Purpose

Check AI configuration status across all FFC repositories. Produce an inventory of
which repos have which AI config files, identify repos that need updates, and flag
any repos that are missing required configurations.

## Context

FFC manages ~30 repositories across three GitHub organizations:

- **FreeForCharity** -- charity websites and infrastructure tools (~28 repos)
- **koenig-childhood-cancer-foundation** -- charity website (1 repo)
- **clarkemoyer** -- research sites and personal projects (~8 repos)

Each repo should have a standard set of AI configuration files deployed from the
FFC-IN-AI-Management repository. This agent checks what is present and what is missing.

## Instructions

When invoked, query all repositories across the FFC organizations and check for the
presence of AI configuration files.

### 1. Enumerate Repositories

Use `gh` CLI to list repos:

```bash
# List all repos in each org
gh repo list FreeForCharity --limit 100 --json name,isArchived
gh repo list koenig-childhood-cancer-foundation --limit 100 --json name,isArchived
gh repo list clarkemoyer --limit 100 --json name,isArchived
```

Exclude archived repositories from the audit.

### 2. Check Each Repository

For each active repository, check for the presence of these files:

| File | Required | Purpose |
|------|----------|---------|
| `CLAUDE.md` | Yes | Claude Code instructions |
| `AGENTS.md` | Yes | Universal AI agent baseline |
| `GEMINI.md` | Yes | Google Gemini instructions |
| `.github/copilot-instructions.md` | Yes | GitHub Copilot instructions |
| `.claude/settings.json` | Yes | Claude Code permissions |
| `.claude/rules/` | Recommended | Claude Code behavioral rules |
| `.claude/agents/` | Recommended | Custom agent definitions |
| `.copilot/mcp-config.json` | Recommended | Copilot MCP server config |
| `.github/agents/AI_AGENT_INSTRUCTIONS.md` | Infra repos only | Security instructions |

Use `gh api` to check file existence:

```bash
# Check if a file exists in a repo
gh api repos/<org>/<repo>/contents/CLAUDE.md --jq '.name' 2>/dev/null
```

### 3. Determine Repo Type

Classify each repository:

- **base**: Standard Next.js charity website (has `next.config.js` or `next.config.mjs`)
- **powershell-infra**: PowerShell infrastructure repo (has `.ps1` files in root)
- **other**: Anything else (personal projects, tools, etc.)

### 4. Compare Against Expected

Based on repo type, determine what files should be present and flag gaps.

## Expected Output

Produce an inventory table:

```markdown
## AI Config Inventory

Generated: 2026-02-16

### FreeForCharity

| Repository | Type | CLAUDE.md | AGENTS.md | GEMINI.md | copilot-instructions | .claude/ | Status |
|-----------|------|-----------|-----------|-----------|---------------------|----------|--------|
| FFC-EX-legioninthewoods.org | base | Yes | Yes | Yes | Yes | Yes | Current |
| FFC-EX-example.org | base | Yes | No | No | Yes | No | Needs Update |
| FFC-Cloudflare-Automation | ps-infra | Yes | Yes | Yes | Yes | Yes | Current |

### Summary

| Status | Count |
|--------|-------|
| Current (all files present) | 18 |
| Needs Update (some files missing) | 8 |
| No Config (no AI files at all) | 2 |
| Archived (skipped) | 3 |

### Repos Needing Updates

1. **FFC-EX-example.org** -- Missing: AGENTS.md, GEMINI.md, .claude/
2. **FFC-EX-another.org** -- Missing: .claude/agents/, copilot-instructions.md
```

## Notes

- This agent reads data only -- it does not make changes to any repository.
- To actually deploy updates, use the `Sync-AIConfigs.ps1` script.
- Rate limits: GitHub API has rate limits. If checking many repos, the agent should
  handle 403 responses gracefully and report which repos could not be checked.
