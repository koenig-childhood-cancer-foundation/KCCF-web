# copilot-review-cycle

## Purpose

Automate the GitHub Copilot code review feedback loop. Request a Copilot review,
wait for results, fix all inline comments, commit, and repeat until Copilot has
no more feedback. Produce a summary of all rounds when done.

## Context

GitHub Copilot code review runs as a PR check and leaves inline comments on
specific lines. This agent automates the tedious cycle of: read comments, fix
code, commit, re-request review, wait, check again. The goal is a clean Copilot
review with zero inline comments.

## Instructions

### Input

Accept a PR number. If none is provided, detect it from the current branch:

```bash
gh pr view --json number --jq '.number'
```

### Review Cycle Loop

Repeat the following steps until Copilot generates no new inline comments:

#### Step 1: Request a Copilot Review

```bash
gh pr edit <PR_NUMBER> --add-reviewer @me
```

If that doesn't trigger Copilot, use:

```bash
gh api repos/{owner}/{repo}/pulls/{pr}/requested_reviewers \
  -f "reviewers[]=copilot-pull-request-reviewer" 2>/dev/null || true
```

Note: Copilot review may trigger automatically on push. Check if a review is
already in progress before requesting one.

#### Step 2: Wait for the Review to Complete

Poll for the Copilot review workflow to finish:

```bash
gh pr checks <PR_NUMBER> --watch
```

Or poll the reviews API:

```bash
gh api repos/{owner}/{repo}/pulls/{pr}/reviews
```

Wait until the Copilot code review check completes. Do NOT proceed until the
review is finished.

#### Step 3: Read Inline Comments

Fetch all review comments on the PR:

```bash
gh api repos/{owner}/{repo}/pulls/{pr}/comments
```

Filter for comments from `copilot-pull-request-reviewer` or bot accounts
associated with Copilot. Extract:

- The file path
- The line number(s)
- The comment body (the feedback)
- The comment ID

Ignore comments that are:

- Already resolved
- From previous review rounds that you already addressed
- "Duplicate file" warnings caused by git renames showing as delete + add in the PR diff

#### Step 4: Fix the Issues

For each inline comment:

1. Read the referenced file
2. Understand what Copilot is asking for
3. Make the code change to address the feedback
4. Track what you changed and why

Common Copilot feedback patterns:

- **React keys**: Use stable, unique keys. For static arrays, `index` is acceptable.
- **Accessibility**: Add `scope="col"` to `<th>`, add `<caption>` to tables, add `aria-*` attributes.
- **Type safety**: Add proper TypeScript types, avoid `any`.
- **Performance**: Memoize expensive operations, avoid unnecessary re-renders.
- **Security**: Sanitize inputs, avoid `dangerouslySetInnerHTML`.
- **Best practices**: Use semantic HTML, proper event handlers, error boundaries.

#### Step 5: Commit and Push

Stage only the files you changed. Use a conventional commit message:

```
fix: address Copilot review feedback (round N)
```

Where N is the current round number (1, 2, 3, ...).

Push to the PR branch. **Set timeout to 60 seconds for push commands.**

#### Step 6: Check for New Review

After pushing, Copilot will typically re-review automatically. If not, request
a new review (Step 1). Then go back to Step 2.

### Exit Condition

The cycle ends when the Copilot review completes with **no new inline comments**.

### Final Summary

When done, output a markdown summary:

```markdown
## Copilot Review Cycle Summary

**PR:** #NNN — <title>
**Total Rounds:** N
**Total Comments Addressed:** N

### Round 1

- **Comments:** N new inline comments
- **Files Changed:** file1.tsx, file2.tsx
- **Fixes:**
  - file1.tsx: Added `scope="col"` to table headers
  - file2.tsx: Changed React key from `substring` to `index`
- **Commit:** abc1234

### Round 2

- **Comments:** N new inline comments
- ...

### Final Round (Round N)

- **Comments:** 0 — Clean review!
- **Commit:** (none needed)

**Result: Copilot review is clean. PR is ready for human review.**
```

## Important Notes

- **Never cancel long-running commands.** Set timeouts to 180+ seconds for builds.
- **Do not argue with Copilot.** Just fix what it asks for, even if debatable.
- **Track comment IDs** to distinguish new comments from old unresolved threads.
  Copilot sometimes leaves old threads unresolved even after fixes — focus on
  whether the LATEST review generated NEW comments.
- **Duplicate file warnings** from renames are not actionable. Note them in the
  summary but do not try to fix them.
- **Run `pnpm run format` before committing** to avoid formatting-only comments
  on the next round.
- If a Copilot comment is unclear or contradicts a previous fix, use your best
  judgment and note it in the summary.

## Tools

- `gh pr view` — PR metadata
- `gh pr checks` — CI and review status
- `gh api repos/{owner}/{repo}/pulls/{pr}/comments` — Inline review comments
- `gh api repos/{owner}/{repo}/pulls/{pr}/reviews` — Review summaries
- `Read` tool — Read source files before editing
- `Edit` tool — Fix code issues
- `Bash` tool — Git operations (add, commit, push)
- `Grep` / `Glob` tools — Find related code patterns
