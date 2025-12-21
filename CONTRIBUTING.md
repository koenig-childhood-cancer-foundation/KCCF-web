# Contributing to KCCF-web

Thank you for your interest in contributing to the Koenig Childhood Cancer Foundation website! We welcome contributions from the community.

## Overview

**This documentation primarily focuses on contributors with Write access to the repository.** This is our recommended approach for most contributors because it:
- Enables GitHub Copilot code reviews on your pull requests
- Provides AI-assisted feedback to help improve code quality
- Allows better collaboration with maintainers
- Works especially well for new coders learning to contribute

**Choose your approach:** If you'd like to contribute regularly or use Copilot features, see [Requesting Repository Access](#requesting-repository-access) to get Write access (quick and open to all skill levels!). If you prefer to contribute without requesting access or are making a quick one-time contribution, see [Option 2: Fork-Based Workflow](#option-2-fork-based-workflow-external-contributors-without-access).

## AI-Assisted Development

We encourage the use of AI tools, particularly **GitHub Copilot**, to enhance the quality and efficiency of contributions to this project.

### GitHub Copilot for Issue-to-PR Workflow

We prefer using GitHub Copilot's issue-to-PR functionality for creating pull requests. This approach helps to:
- Generate consistent, well-structured code changes
- Ensure comprehensive coverage of the issue requirements
- Reduce manual coding errors
- Accelerate the development process

**⚠️ Important:** To use GitHub Copilot's AI features on pull requests (including `@copilot` mentions and code reviews), you must have **Write access** to this repository. If you're working from a forked repository, Copilot features will be unavailable due to GitHub's cross-repository security restrictions. See the [Choosing Your Contribution Workflow](#choosing-your-contribution-workflow) section below for details on how to request access.

**👋 New to Coding?** We welcome developers at all experience levels! Request Write access to the repository to enable GitHub Copilot code reviews on your PRs - this provides AI-assisted feedback that helps you learn and improve your code quality. See [Requesting Repository Access](#requesting-repository-access) below.

**To use Copilot for creating PRs from issues:**
1. Navigate to an issue in the repository.
2. Assign Copilot to the issue by selecting `copilot` from the "Assignees" dropdown in the issue sidebar. This is the primary way to invoke Copilot from the GitHub UI.
3. Copilot will automatically analyze the issue and generate a proposed pull request with code changes.
4. Review the generated code changes in the PR before requesting human review.

**Note:** Copilot's issue-to-PR workflow automatically creates branches in the main repository, so it will work correctly if you have repository access. If you don't have access and want to use Copilot, request collaborator access from the maintainers.

For more details, see [GitHub's documentation on using Copilot to work on issues](https://docs.github.com/en/copilot/how-tos/use-copilot-for-common-tasks/use-copilot-to-create-or-update-issues).

### Copilot-Based Code Reviews

**All code submissions should undergo Copilot-based reviews when possible.** This feature is available for contributors with Write access or higher. Contributors should:
1. Request a Copilot code review on your pull request by selecting Copilot as a reviewer from the "Reviewers" dropdown, or by commenting `@copilot review` on the PR. For more details, see [GitHub Copilot Code Review documentation](https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review).
2. Review all comments and suggestions provided by Copilot.
3. Address relevant feedback (use your judgment—not all suggestions may apply to the project context).
4. Re-run the Copilot review after making changes.
5. Repeat this process until no additional actionable comments remain.
6. Then request human reviewer approval.

This iterative review process helps ensure that:
- Code quality is higher
- Coding standards are consistently adhered to
- Potential issues are detected early
- Code changes are comprehensively documented

**Note for fork-based contributors:** Copilot code reviews are not available on PRs from forked repositories due to GitHub's security restrictions. Fork contributors should rely on human code reviews or request Write access to enable Copilot reviews.

### Best Practices for Using GitHub Copilot

Follow these best practices when using GitHub Copilot:

1. **Review all suggestions carefully** - Never blindly accept Copilot suggestions; always verify the code is correct and appropriate
2. **Provide clear context** - Write descriptive comments and function names to help Copilot generate better suggestions
3. **Use Copilot Chat for explanations** - Ask Copilot to explain complex code or suggest improvements
4. **Verify security implications** - Review generated code for potential security vulnerabilities
5. **Test generated code thoroughly** - Always test Copilot-generated code before committing
6. **Keep suggestions contextual** - Ensure generated code follows the project's existing patterns and conventions
7. **Use inline suggestions wisely** - Accept partial suggestions when they're helpful, modify or reject when they're not
8. **Leverage Copilot for documentation** - Use it to generate JSDoc comments, README updates, and code documentation

### Integrating Other AI Providers in VS Code

For experienced developers who want to leverage additional AI capabilities, GitHub Copilot in VS Code supports integration with other AI providers. This enables access to models from **OpenAI**, **Google Gemini**, **Anthropic Claude**, and others.

#### Setting Up Alternative AI Providers

GitHub Copilot supports multiple AI models through its model selector feature. Available models vary based on your subscription and GitHub's current offerings.

1. **Install GitHub Copilot Chat Extension**
   - Ensure you have the GitHub Copilot Chat extension installed in VS Code
   - Sign in with your GitHub account that has Copilot access

2. **Access Model Selection**
   - Open the Copilot Chat panel in VS Code
   - Look for the model selector dropdown (typically at the bottom of the chat input)
   - Available models may include GPT-4, Claude, Gemini, and others depending on your subscription tier

3. **Using Claude Models**
   - Select a Claude model from the model picker (availability depends on subscription tier)
   - Claude excels at detailed code explanations, complex refactoring, and nuanced code reviews
   - Use for tasks requiring deep reasoning about code architecture

4. **Using OpenAI Models**
   - GPT-4 and GPT-4o models are the primary models available through Copilot (availability depends on subscription tier)
   - Particularly effective for general coding tasks and broad language support
   - Good for quick iterations and code completion

5. **Using Google Gemini Models**
   - Gemini models may be accessed through the Copilot interface (availability depends on subscription tier)
   - Strong performance on multi-modal tasks and code understanding
   - Useful for analyzing code alongside documentation or images

#### Best Practices for Multi-Model Usage

- **Match the model to the task** - Different models have different strengths; experiment to find what works best for specific tasks
- **Maintain consistency** - When working on a single feature, try to use the same model for consistency
- **Compare outputs** - For critical code changes, consider getting suggestions from multiple models
- **Document your approach** - If you use a specific model for a particular type of task, note it in PR descriptions for team awareness

#### VS Code Configuration Tips

```json
// Example VS Code settings for Copilot (settings.json)
// Adjust languages based on your project needs
{
  "github.copilot.enable": {
    "*": true,
    "typescript": true,
    "typescriptreact": true
  }
}
```

**Note:** Access to alternative AI providers may require specific subscription tiers. GitHub Copilot Individual provides access to core models, while GitHub Copilot Business and Enterprise may offer additional model options. Check your GitHub Copilot subscription details and the [GitHub Copilot documentation](https://docs.github.com/copilot) for currently available models.

## Documentation

Before contributing, familiarize yourself with the project documentation:

- **[README.md](README.md)** - Project overview and quick start guide
- **[CI_CD_DEPLOYMENT.md](CI_CD_DEPLOYMENT.md)** - CI/CD pipeline, deployment process, and troubleshooting
- **[EXTERNAL_SERVICES.md](EXTERNAL_SERVICES.md)** - Third-party service integrations
- **[SECURITY.md](SECURITY.md)** - Security policy and vulnerability reporting

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 10+
- Git
- GitHub account

### Understanding GitHub Repository Access Levels

This project uses GitHub's standard permission model to manage contributions. Understanding these levels helps you know what you can do and how to request appropriate access.

#### GitHub Permission Levels Explained

| Permission Level | Can Read Code | Can Comment | Can Create PRs | Can Push Branches | Can Review PRs | Can Approve PRs | Can Merge PRs | Can Manage Settings |
|-----------------|---------------|-------------|----------------|-------------------|----------------|----------------|--------------|---------------------|
| **Read** (Public) | ✅ | ✅ | ✅ (via fork) | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Triage** | ✅ | ✅ | ✅ (via fork) | ❌ | ✅ (review only) | ❌ | ❌ | ❌ |
| **Write** | ✅ | ✅ | ✅ (direct) | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Maintain** | ✅ | ✅ | ✅ (direct) | ✅ | ✅ | ✅ | ✅ | Limited |
| **Admin** | ✅ | ✅ | ✅ (direct) | ✅ | ✅ | ✅ | ✅ | ✅ |

**Key capabilities by level:**

- **Read (Public)**: Anyone can view public repositories, open issues, and create PRs via forks. This is the default for external contributors.
- **Triage**: Can manage issues and PRs (labels, assignments, close/reopen) and can review PRs (submit reviews with comments and suggestions), but cannot formally approve PRs for merging or push code directly.
- **Write**: Can push branches directly to the repository and create PRs from those branches, and can approve pull requests but cannot merge them. **This is the recommended level for regular contributors** as it enables full GitHub Copilot functionality on PRs.
- **Maintain**: Can do everything Write can do, plus merge PRs and manage some repository settings.
- **Admin**: Full repository control including settings, security, and access management.

**For this project, we primarily use:**
- **Write access**: For regular contributors (enables direct PRs with Copilot reviews)
- **Maintain/Admin access**: For project maintainers and core team members

### Requesting Repository Access

**We encourage new contributors to request Write access**, especially if you:
- Plan to contribute regularly (even small contributions count!)
- Want to use GitHub Copilot for PR reviews and assistance
- Are new to coding and want AI-assisted code reviews
- Want to learn from AI-powered feedback on your code
- Want to collaborate more closely with the team
- Are working on multiple issues over time

**How to request access:**
1. **Open an issue** with the title "Request for Write Access"
2. **Include in the issue:**
   - Your GitHub username
   - Brief introduction (experience level, how you'd like to contribute)
   - Whether you have GitHub Copilot access (not required, but helpful to know)
3. **Wait for approval** - Maintainers will review and grant access as soon as possible
4. **No experience required** - We welcome developers at all skill levels, including those new to coding

**What happens after you get Write access:**
- You can create branches directly in the main repository
- GitHub Copilot features work on your PRs (code reviews, `@copilot` mentions, auto-fixes)
- Maintainers can push commits to your branches to help you
- You can review and approve other contributors' PRs (note: only Maintain/Admin levels can merge PRs)
- You get better visibility into the project's development process

### Which Access Level Do I Need?

**Most contributors need Write access.** Here's a quick guide:

| Your Situation | Recommended Access Level | How to Get It |
|----------------|-------------------------|---------------|
| 🆕 New coder wanting to learn | **Write** | [Request access](#requesting-repository-access) |
| 🔄 Regular contributor | **Write** | [Request access](#requesting-repository-access) |
| 🤖 Want Copilot code reviews | **Write** | [Request access](#requesting-repository-access) |
| 🚀 Quick one-time fix | Read (public) | Use [fork workflow](#option-2-fork-based-workflow-external-contributors-without-access) |
| 👥 Core team member | Maintain or Admin | Contact project leads |
| 📝 Issue triaging only | Triage | Contact maintainers |

**Don't see your situation?** Just [request Write access](#requesting-repository-access) - we're friendly and welcome all contributors!

### Choosing Your Contribution Workflow

#### Option 1: Direct Branch Workflow (Recommended for Most Contributors)

**Best for:**
- Contributors with Write access or higher
- Anyone who wants GitHub Copilot assistance on PRs
- Regular contributors and team members
- New coders who want AI-assisted code reviews

**Requirements:** 
- Write access to the repository (request if you don't have it)

**Setup Process:**
1. Clone the repository directly (not a fork):
   ```bash
   git clone https://github.com/koenig-childhood-cancer-foundation/KCCF-web.git
   cd KCCF-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

**Creating PRs with Direct Branch Workflow:**
1. Create a feature branch in the main repository:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test locally

3. Push to the main repository:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a pull request from your branch to `main` on GitHub

5. Request Copilot code review (see [Copilot-Based Code Reviews](#copilot-based-code-reviews) section)

**✅ Benefits:**
- Full GitHub Copilot functionality (code reviews, `@copilot` mentions, auto-fixes)
- Simpler CI/CD integration
- Maintainers can push to your branch to help
- No cross-repository security restrictions
- Better collaboration with the team

#### Option 2: Fork-Based Workflow (External Contributors Without Access)

**Best for:**
- One-time or occasional contributors
- External contributors who prefer not to request access
- Quick bug fixes or typo corrections
- Contributors not using GitHub Copilot on PRs

**Setup Process:**
1. Fork the repository on GitHub (click "Fork" button)

2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/KCCF-web.git
   cd KCCF-web
   ```

3. Add the upstream repository as a remote:
   ```bash
   git remote add upstream https://github.com/koenig-childhood-cancer-foundation/KCCF-web.git
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

**Creating PRs with Fork Workflow:**
1. Create a feature branch in your fork:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test locally

3. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a pull request from your fork to the main repository on GitHub

**⚠️ Limitations:**
- GitHub Copilot features (`@copilot` mentions, code reviews) **will not work** on the pull request due to GitHub's cross-repository security restrictions (see [Troubleshooting](#github-copilot-cross-repository-pull-requests-error) for details)
- You can still use Copilot in your local IDE (VS Code, JetBrains, etc.) for code suggestions
- Only you can push to your branch (unless you enable "Allow edits from maintainers")
- Human reviewers will need to review your code instead of Copilot

**Workarounds:**
1. **Use Copilot locally:** Copilot works normally in your IDE even on forks
2. **Request Write access:** If you need Copilot on PRs, request repository access (see [Requesting Repository Access](#requesting-repository-access))
3. **Manual review:** Request review from human maintainers

### Quick Start Comparison

| Step | Direct Branch (Write Access) | Fork (No Access) |
|------|------------------------------|------------------|
| 1. Setup | `git clone https://github.com/koenig-childhood-cancer-foundation/KCCF-web.git` | Fork on GitHub, then `git clone https://github.com/YOUR-USERNAME/KCCF-web.git` |
| 2. Branch | `git checkout -b feature/name` | `git checkout -b feature/name` |
| 3. Push | `git push origin feature/name` | `git push origin feature/name` |
| 4. PR | Create PR in main repo | Create PR from fork to main repo |
| 5. Copilot Review | ✅ Works (use `@copilot review`) | ❌ Doesn't work (cross-repo restriction) |
| 6. Collaboration | ✅ Maintainers can push to your branch | ⚠️ Limited (enable "Allow edits" for help) |

## Development Workflow

### Creating a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:
- `feature/` - for new features
- `fix/` - for bug fixes
- `docs/` - for documentation changes
- `refactor/` - for code refactoring

### Making Changes
1. Make your changes in the appropriate files
2. Run linting to check code quality:
   ```bash
   npm run lint
   ```
3. Run the build to verify everything compiles:
   ```bash
   npm run build
   ```
4. Test your changes locally:
   ```bash
   npm run start
   ```

### Committing Changes
Write clear, descriptive commit messages:
```bash
git commit -m "Add: newsletter signup validation"
git commit -m "Fix: mobile navigation menu not closing"
git commit -m "Docs: update README with CI/CD information"
```

## Pull Request Process

### Before Submitting
- [ ] Ensure all CI checks pass locally (`npm run lint && npx tsc --noEmit && npm run build`)
- [ ] Test your changes thoroughly
- [ ] Update documentation if needed
- [ ] Keep changes focused and atomic

### Submitting a Pull Request

**For Direct Branch Workflow (Write Access):**
1. Push your branch to the main repository:
   ```bash
   git push origin feature/your-feature-name
   ```
2. Open a Pull Request against the `main` branch on GitHub
3. Fill out the PR template with:
   - Clear description of changes
   - Related issue numbers (if applicable)
   - Screenshots for UI changes
4. Wait for CI checks to pass
5. **Request Copilot review first** (see [Copilot-Based Code Reviews](#copilot-based-code-reviews))
6. Address Copilot feedback and re-run review if needed
7. Then request review from human maintainers

**For Fork Workflow (No Write Access):**
1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. Open a Pull Request from your fork to the main repository's `main` branch
3. Fill out the PR template (same as above)
4. Wait for CI checks to pass
5. Request review from human maintainers (Copilot reviews won't work on fork-based PRs)

### Understanding CI Checks

When you submit a Pull Request, GitHub Actions automatically runs the following checks:

**CI Job** (must pass):
1. **Lint** - ESLint code quality checks
2. **Type Check** - TypeScript type validation
3. **Build** - Production build verification

**CodeQL Security Scan** (must pass):
- Scans JavaScript/TypeScript for security vulnerabilities
- Scans GitHub Actions workflow files

**Deployment**: Only runs on `main` branch after merge (not on PRs).

If any check fails, review the logs in the GitHub Actions tab of your PR. For detailed troubleshooting, see [CI_CD_DEPLOYMENT.md](CI_CD_DEPLOYMENT.md#monitoring--troubleshooting).

### After Review
- Address any feedback from reviewers
- Make requested changes in new commits
- Re-request review when ready

## Code Style Guidelines

### TypeScript
- Use TypeScript for all source files
- Define proper types for props and state
- Avoid using `any` type

### React
- Use functional components with hooks
- Keep components focused and reusable
- Use meaningful component and prop names

### CSS/Tailwind
- Use Tailwind CSS utility classes
- Follow responsive design patterns
- Support dark mode with `dark:` variants

### File Organization
- Place page components in `src/app/<route>/`
- Place reusable components in `src/components/`
- Place contexts in `src/contexts/`
- Place constants in `src/constants/`

## Testing

Currently, the project uses:
- ESLint for code quality
- TypeScript for type checking
- Production build verification

When adding new features, ensure they work across:
- Different screen sizes (responsive design)
- Light and dark modes
- With and without cookies enabled

## Troubleshooting

### "I don't have Write access to the repository"

**Problem:** You want to contribute but don't have permission to push branches to the main repository.

**Solution:** Request Write access! See [Requesting Repository Access](#requesting-repository-access) for instructions. We welcome contributors at all skill levels and will review your request as soon as possible.

**Alternative:** If you prefer not to request access or need to contribute immediately, use the [Fork-Based Workflow](#option-2-fork-based-workflow-external-contributors-without-access), but note that GitHub Copilot reviews won't be available on your PRs.

### GitHub Copilot "Cross-Repository Pull Requests" Error

**Problem:** When you try to use `@copilot` on a pull request, you see:
> ⚠️ **Copilot isn't available for cross-repository pull requests**

**Cause:** You created a pull request from a forked repository. GitHub restricts Copilot AI features on cross-repository PRs for security reasons (prevents data leakage, privilege escalation, and unauthorized access).

**Solutions:**

1. **Request Write Access (Recommended):**
   - Open an issue with title "Request for Write Access" (see [Requesting Repository Access](#requesting-repository-access))
   - Include your GitHub username and brief introduction
   - Once granted, close your fork-based PR
   - Clone the main repository directly: `git clone https://github.com/koenig-childhood-cancer-foundation/KCCF-web.git`
   - Create a new branch in the main repository
   - Reapply your changes and create a new PR
   - GitHub Copilot will now work on your PR

2. **Continue with Fork (For One-Time Contributors):**
   - Use GitHub Copilot in your local IDE (VS Code, JetBrains, etc.) - this still works for local code suggestions
   - Accept Copilot's suggestions locally and push to your fork
   - Request review from human reviewers instead of `@copilot`
   - Note: `@copilot review` and other PR-based Copilot features will remain unavailable

3. **Migrate Fork to Branch (If You Already Have Access):**
   - If you have repository access but accidentally created a fork, you can migrate your commits:
   
   **Prerequisites:** You need to have both your fork and the main repository set up locally.
   
   ```bash
   # Step 1: In your fork directory, note your commit SHAs
   # Run this BEFORE switching to the main repository:
   git log --oneline
   # Copy the SHA(s) of your commits (e.g., abc1234, def5678)
   
   # Step 2: Clone the main repository (if you haven't already)
   # In a different directory:
   git clone https://github.com/koenig-childhood-cancer-foundation/KCCF-web.git kccf-main
   cd kccf-main
   
   # Step 3: Add your fork as a remote to reference its commits
   git remote add fork https://github.com/YOUR-USERNAME/KCCF-web.git
   git fetch fork
   
   # Step 4: Create a new branch in the main repository
   git checkout -b feature/your-feature-name main
   
   # Step 5: Cherry-pick your commits using the SHAs you noted earlier
   # Single commit:
   git cherry-pick abc1234
   # Multiple individual commits:
   git cherry-pick abc1234 def5678 ghi9012
   # Range of consecutive commits:
   git cherry-pick abc1234^..def5678
   
   # Step 6: Verify your changes with git remote -v and git log
   git remote -v  # Should show 'origin' pointing to main repository
   git log --oneline -5  # Verify your commits are present
   
   # Step 7: Push to main repository
   git push origin feature/your-feature-name
   ```

### Other Common Issues

| Issue | Solution |
|-------|----------|
| Build fails locally | Run `npm install` to ensure dependencies are up to date |
| ESLint errors | Run `npm run lint` to see all issues; fix before committing |
| TypeScript errors | Run `npx tsc --noEmit` to check for type errors |
| Port 3000 in use | Stop other services or use `PORT=3001 npm run dev` |
| Changes not reflecting | Clear `.next` cache and restart dev server |

## Questions?

If you have questions about contributing, you can:
- Open a GitHub issue for discussion
- Contact the maintainers via [thekccf.org/contact](https://thekccf.org/contact)

## Code of Conduct

Please be respectful and inclusive in all interactions. We're here to support children battling cancer and their families.

Thank you for contributing! 💜
