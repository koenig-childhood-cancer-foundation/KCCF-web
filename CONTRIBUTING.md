# Contributing to KCCF-web

Thank you for your interest in contributing to the Koenig Childhood Cancer Foundation website! We welcome contributions from the community.

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
