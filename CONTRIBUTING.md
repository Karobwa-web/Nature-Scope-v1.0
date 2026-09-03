# Contributing to Nature Scope

Thank you for your interest in contributing to Nature Scope! We welcome contributions to make East Africa's premier wellness marketplace reliable, fast, and accessible.

## Code of Conduct

Please adhere to respectful, inclusive, and professional communication across all issue discussions, pull requests, and code reviews.

## Git Flow & Branching Model

We follow Git Flow:

- `main`: Protected. Holds production-ready releases.
- `develop`: Primary branch for feature integration. All feature PRs should target `develop`.
- `feature/<feature-name>`: Branched from `develop` for individual feature implementations.
- `hotfix/<fix-name>`: Branched from `main` for critical production bug fixes.

### Workflow Steps
1. Fork or clone the repository.
2. Checkout the `develop` branch and pull latest changes:
   ```bash
   git checkout develop
   git pull origin develop
   ```
3. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Commit your changes following conventional commits:
   - `feat: add mtn momo payment verification hook`
   - `fix: correct stock deduction race condition`
   - `docs: update api specification`
5. Push your branch to GitHub and submit a Pull Request targeting `develop`.

## Pull Request Checklist

Every PR must satisfy:
- [ ] Code adheres to ESLint and formatting standards.
- [ ] Automated tests pass (`npm test`).
- [ ] Documentation has been updated for any API or model changes.
- [ ] No secrets or sensitive environment credentials are committed.
- [ ] Received at least one approval from a maintainer.

## Local Development & Testing

Refer to [docs/DEV_SETUP.md](docs/DEV_SETUP.md) for instructions on setting up your local PostgreSQL database, backend API, and frontend Vite client.
