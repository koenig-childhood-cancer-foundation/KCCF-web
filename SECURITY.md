# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| main    | :white_check_mark: |

## Security Measures

This repository implements several security measures:

### Automated Security Scanning
- **CodeQL Analysis**: Runs automatically on every push and pull request to the `main` branch
- **Scheduled Scans**: Weekly security scans run every Monday
- **Languages Covered**: JavaScript/TypeScript and GitHub Actions workflows

### Dependency Management
- Dependencies are managed through npm with `package-lock.json` for reproducible builds
- Regular dependency updates are recommended to address security vulnerabilities

### CI/CD Security
- All code changes require CI checks to pass before merging
- Pull requests are verified through automated linting and type checking
- Production deployments only occur from the `main` branch

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it responsibly.

### What to Report
- Security vulnerabilities in the codebase
- Exposed sensitive information
- Vulnerabilities in dependencies
- Security misconfigurations

### How to Report
1. **Do NOT** create a public GitHub issue for security vulnerabilities
2. Contact the maintainers directly via:
   - Email: Use the contact form at [thekccf.org/contact](https://thekccf.org/contact)
   - Subject line should include "Security Vulnerability Report"
3. Include in your report:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fixes (optional)

### What to Expect
- Acknowledgment of your report within 48 hours
- Regular updates on the progress of addressing the vulnerability
- Credit for responsible disclosure (if desired)

### Responsible Disclosure
- Please allow reasonable time for the vulnerability to be addressed before public disclosure
- We aim to address critical vulnerabilities within 7 days
- We will coordinate with you on the timing of any public disclosure

## Security Best Practices for Contributors

When contributing to this project:

1. **Never commit secrets** - Use environment variables for sensitive data
2. **Review dependencies** - Check for known vulnerabilities before adding new packages
3. **Follow secure coding practices** - Sanitize inputs, avoid XSS vulnerabilities
4. **Keep dependencies updated** - Regularly update packages to patch security issues
5. **Use HTTPS** - All external resources should be loaded over HTTPS

## Third-Party Services

This project integrates with:
- **Zeffy** - Donation processing (iframe embed)
- **Monday.com** - Form handling for applications (iframe embed)
- **Mailchimp** - Newsletter subscriptions (iframe embed via list-manage.com)

These services are embedded via iframes and do not require API keys stored in the repository.

## Contact

For security-related inquiries, please contact us through [thekccf.org/contact](https://thekccf.org/contact).
