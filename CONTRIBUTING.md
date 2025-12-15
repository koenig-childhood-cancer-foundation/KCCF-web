# Contributing to KCCF-web

Thank you for your interest in contributing to the Koenig Childhood Cancer Foundation website! We welcome contributions from the community.

## AI-Assisted Development

We encourage the use of AI tools, particularly **GitHub Copilot**, to enhance the quality and efficiency of contributions to this project.

### GitHub Copilot for Issue-to-PR Workflow

We prefer using GitHub Copilot's issue-to-PR functionality for creating pull requests. This approach helps to:
- Generate consistent, well-structured code changes
- Ensure comprehensive coverage of the issue requirements
- Reduce manual coding errors
- Accelerate the development process

**⚠️ Important:** To use GitHub Copilot's AI features on pull requests (including `@copilot` mentions and code reviews), you must have **write access** to this repository. If you're working from a forked repository, Copilot features will be unavailable due to GitHub's cross-repository security restrictions. See the [Fork vs Branch workflow section](#fork-vs-branch-understanding-the-workflow) below for details.

**To use Copilot for creating PRs from issues:**
1. Navigate to an issue in the repository.
2. Assign Copilot to the issue by selecting `copilot` from the "Assignees" dropdown in the issue sidebar. This is the primary way to invoke Copilot from the GitHub UI.
3. Copilot will automatically analyze the issue and generate a proposed pull request with code changes.
4. Review the generated code changes in the PR before requesting human review.

**Note:** Copilot's issue-to-PR workflow automatically creates branches in the main repository, so it will work correctly if you have repository access. If you don't have access and want to use Copilot, request collaborator access from the maintainers.

For more details, see [GitHub's documentation on using Copilot to work on issues](https://docs.github.com/en/copilot/how-tos/use-copilot-for-common-tasks/use-copilot-to-create-or-update-issues).

### Copilot-Based Code Reviews

**All code submissions should undergo Copilot-based reviews.** Contributors should:
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

## Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm 10+
- Git

### Fork vs Branch: Understanding the Workflow

**⚠️ Important: GitHub Copilot Cross-Repository Limitation**

When working with pull requests created from forked repositories, you may encounter the following error when trying to use GitHub Copilot features:

> ⚠️ **Copilot isn't available for cross-repository pull requests**

This is a **security feature** implemented by GitHub, not a bug. Here's what you need to know:

#### Why Does This Happen?

GitHub restricts Copilot's AI features (including `@copilot` mentions, Copilot code reviews, and Copilot autofix) on pull requests that originate from **forked repositories** (cross-repository PRs) for the following security reasons:
- **Prevents data leakage** between unrelated repositories
- **Protects against privilege escalation** and unauthorized access
- **Enforces repository boundaries** for open-source contributions
- **Prevents accidental code exposure** in projects where you may not have full write access

#### Two Contribution Workflows

##### Option 1: Branch-Based Workflow (Recommended for Copilot Users)

**Best for:** Contributors who need GitHub Copilot AI assistance on pull requests

**Requirements:** You need **write/push access** to the repository (you must be added as a collaborator)

**Process:**
1. Request repository access by opening an issue or contacting the maintainers
2. Once granted access, clone the repository directly (not a fork):
   ```bash
   git clone https://github.com/koenig-childhood-cancer-foundation/KCCF-web.git
   cd KCCF-web
   ```
3. Create a feature branch in the main repository:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Make your changes and push to the main repository:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request from your branch to `main`

**✅ Benefits:**
- Full GitHub Copilot functionality available (including `@copilot` mentions and code reviews)
- Simpler CI/CD integration
- Maintainers can directly push to your branch if needed
- No cross-repository restrictions

##### Option 2: Fork-Based Workflow (External Contributors)

**Best for:** External contributors without repository access, or contributors not using Copilot features

**Process:**
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/KCCF-web.git
   cd KCCF-web
   ```
3. Create a feature branch in your fork
4. Make your changes and push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request from your fork to the main repository

**⚠️ Limitations:**
- GitHub Copilot features (`@copilot` mentions, code reviews) **will not work** on the pull request
- You can still use Copilot in your local IDE (VS Code, JetBrains, etc.)
- Only you can push to your branch (unless you enable "Allow edits from maintainers")

**Workarounds for Fork-Based Contributors:**
1. **Use Copilot locally:** GitHub Copilot works normally in your IDE (VS Code, JetBrains, etc.) even when working on a fork. Accept Copilot's suggestions locally, then push to your fork.
2. **Manual code review:** Request review from human reviewers instead of using `@copilot review`
3. **Switch to branch-based workflow:** If you need Copilot features on the PR, request repository access from maintainers

#### Which Workflow Should I Use?

| Situation | Recommended Workflow |
|-----------|---------------------|
| Regular contributor / Team member | **Branch-based** (request access) |
| Need GitHub Copilot on PRs | **Branch-based** (request access) |
| First-time or occasional contributor | **Fork-based** (no access needed) |
| Quick fixes or small changes | **Fork-based** (no access needed) |
| Working on sensitive/experimental features | **Branch-based** (with proper branch protection) |

### Setup

#### For Branch-Based Workflow (After Getting Repository Access)
1. Clone the repository directly:
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

#### For Fork-Based Workflow (External Contributors)
1. Fork the repository on GitHub
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
1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. Open a Pull Request against the `main` branch
3. Fill out the PR template with:
   - Clear description of changes
   - Related issue numbers (if applicable)
   - Screenshots for UI changes
4. Wait for CI checks to pass
5. Request review from maintainers

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

### GitHub Copilot "Cross-Repository Pull Requests" Error

**Problem:** When you try to use `@copilot` on a pull request, you see:
> ⚠️ **Copilot isn't available for cross-repository pull requests**

**Cause:** You created a pull request from a forked repository. GitHub restricts Copilot AI features on cross-repository PRs for security reasons.

**Solutions:**

1. **Request Repository Access (Recommended for Regular Contributors):**
   - Open an issue requesting collaborator access
   - Once granted, close your fork-based PR
   - Clone the main repository (not your fork)
   - Create a new branch in the main repository
   - Reapply your changes and create a new PR
   - GitHub Copilot will now work on your PR

2. **Continue with Fork (For One-Time Contributors):**
   - Use GitHub Copilot in your local IDE (VS Code, JetBrains, etc.) - this still works
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
