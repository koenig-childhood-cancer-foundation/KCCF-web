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

**To use Copilot for creating PRs from issues:**
1. Navigate to an issue in the repository.
2. Assign Copilot to the issue by selecting `copilot` from the "Assignees" dropdown in the issue sidebar. This is the primary way to invoke Copilot from the GitHub UI.
3. Copilot will automatically analyze the issue and generate a proposed pull request with code changes.
4. Review the generated code changes in the PR before requesting human review.

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

### Setup
1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/KCCF-web.git
   cd KCCF-web
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

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

## Questions?

If you have questions about contributing, you can:
- Open a GitHub issue for discussion
- Contact the maintainers via [thekccf.org/contact](https://thekccf.org/contact)

## Code of Conduct

Please be respectful and inclusive in all interactions. We're here to support children battling cancer and their families.

Thank you for contributing! 💜
