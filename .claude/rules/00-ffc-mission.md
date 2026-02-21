# Free For Charity Global Rules

## Mission

Free For Charity (FFC) provides free websites and domain management for 501(c)(3) nonprofit organizations. Every repo in this org supports that mission.

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/) format: `<type>: <description>`

- `feat:` -- New feature or page
- `fix:` -- Bug fix
- `docs:` -- Documentation only
- `style:` -- Formatting (no code change)
- `refactor:` -- Code restructuring without behavior change
- `test:` -- Adding or updating tests
- `chore:` -- Build config, dependencies, CI

## PR Workflow

- Always create a branch. Never push directly to `main`.
- Link PRs to issues: `Fixes #NNN` or `Refs #NNN`
- All PRs require CI checks to pass before merge.

## Naming Conventions

- **Web folders**: Always use kebab-case (`privacy-policy/`, not `PrivacyPolicy/`)
- **Reason**: SEO best practice per Google Search Central. Screen readers handle hyphens better.

## Build Commands

- NEVER CANCEL long-running commands (`npm install`, `npm run build`, `npm test`)
- Set timeout to 180+ seconds for builds
- Wait for commands to complete before proceeding

## Code Style

- Follow existing patterns in the codebase
- Don't over-engineer. Keep solutions simple and focused.
- Don't add features beyond what was asked.
