# Security Rules

## Secrets and API Tokens

- NEVER expose API tokens or secrets in code, documentation, or comments
- NEVER hardcode secrets in any file
- NEVER include secrets in example files or commit messages
- NEVER echo or print secrets to logs or console output

## GitHub Actions

- ALWAYS use `${{ secrets.SECRET_NAME }}` syntax for secrets
- ALWAYS validate secret presence before use:
  ```yaml
  - name: Validate secrets
    run: |
      if [ -z "${{ secrets.TOKEN_NAME }}" ]; then
        echo "::error::Required secret not set"
        exit 1
      fi
  ```

## Local Development

- Use `.env` files for secrets (excluded from git via `.gitignore`)
- Set secrets as environment variables in `.env` (never run export commands with real tokens)
- ONLY commit `.env.example` with placeholder values (no real tokens)

## If a User Provides a Secret

1. DO NOT write it in any file
2. DO NOT include it in documentation
3. Instruct them to add it to GitHub Secrets or local `.env` file
4. Remind them about secure storage practices

## Files That Must Never Be Committed

- `.env`, `.env.local`, `.env*.local`
- `*.pem`, `*.key`
- `credentials.json`, `secrets.json`
