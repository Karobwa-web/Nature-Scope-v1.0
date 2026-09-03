# Nature Scope

[![CI](https://github.com/Karobwa-web/Nature-Scope-v1.0/actions/workflows/ci.yml/badge.svg)](https://github.com/Karobwa-web/Nature-Scope-v1.0/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> A trusted multi-vendor wellness marketplace for Uganda and East Africa.

Nature Scope connects health-conscious consumers with verified vendors of organic products, herbal remedies, and spa & wellness services across Uganda and the broader East African community.

---

## Key Features

- **Buyer Experience**: Intuitive discovery, search filters, localized checkout with **MTN MoMo**, **Airtel Money**, and debit/credit cards.
- **Vendor Portal**: Onboarding flow, product & service catalog management, real-time inventory control, order tracking, and earnings/payout ledger.
- **Admin Control**: Vendor KYC verification, catalog moderation, fee & commission management, and analytics reporting.
- **East African Payment Integration**: Direct integration with mobile money APIs and aggregators (PesaPal, Flutterwave, MTN MoMo, Airtel Money) supporting UGX transactions.

---

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons, React Router DOM
- **Backend**: Node.js, Express.js, RESTful API architecture, JWT Authentication
- **Database**: PostgreSQL with relational schema, migrations, and seeds
- **Infrastructure**: Docker & Docker Compose, GitHub Actions CI/CD

---

## Repository Structure

```text
Nature-Scope-v1.0/
├── .github/                  # GitHub Actions CI/CD workflows and issue templates
│   ├── workflows/
│   │   ├── ci.yml            # Continuous Integration (Lint, Test, Build)
│   │   ├── cd.yml            # Continuous Deployment
│   │   └── security-scan.yml # Dependency audit & security scan
│   ├── ISSUE_TEMPLATE/       # Structured bug and feature templates
│   └── PULL_REQUEST_TEMPLATE.md
├── frontend/                 # React + Vite client application
│   ├── src/                  # Pages, components, hooks, utilities
│   ├── public/
│   ├── package.json
│   └── README.md
├── backend/                  # Node.js + Express REST API server
│   ├── src/                  # Controllers, routes, models, services, middleware
│   ├── tests/
│   ├── package.json
│   └── README.md
├── database/                 # PostgreSQL migrations and initial seed data
│   ├── migrations/
│   └── seeds/
├── docs/                     # Project documentation
│   ├── PRD.md                # Comprehensive Product Requirements Document
│   ├── architecture.md       # High-level architecture and system boundaries
│   ├── api-specification.yaml# OpenAPI 3.0 API Specification
│   ├── PAYMENTS.md           # Uganda mobile money & escrow integration guide
│   ├── COMPLIANCE_AND_KYC.md # NDA/UNBS regulations and vendor vetting
│   ├── ROADMAP.md            # 6-week Phase 1 MVP implementation sprint plan
│   └── DEV_SETUP.md          # Local developer setup and running guide
├── docker-compose.yml        # Multi-container orchestration (DB, API, Web)
├── .gitignore                # Optimized repository ignore rules
├── CONTRIBUTING.md           # Contribution guidelines & Git Flow standards
├── LICENSE                   # MIT License
└── README.md                 # Project root overview and onboarding
```

---

## Quickstart

### Prerequisites
- Node.js (v18+)
- Docker & Docker Compose (or local PostgreSQL)

### Running with Docker Compose
```bash
# Clone the repository
git clone https://github.com/Karobwa-web/Nature-Scope-v1.0.git
cd Nature-Scope-v1.0

# Start backend, frontend, and PostgreSQL services
docker compose up -d
```
- **Web App**: `http://localhost:3000`
- **REST API**: `http://localhost:5000/api`
- **Health Check**: `http://localhost:5000/api/health`

For complete local step-by-step installation instructions without Docker, refer to the [Local Development Setup Guide](docs/DEV_SETUP.md).

---

## Documentation Links

- [Product Requirements Document (PRD)](docs/PRD.md)
- [System Architecture](docs/architecture.md)
- [OpenAPI Specification](docs/api-specification.yaml)
- [Payment & Escrow Integration Guide](docs/PAYMENTS.md)
- [Regulatory Compliance & KYC Guidelines](docs/COMPLIANCE_AND_KYC.md)
- [Phase 1 MVP Sprint Plan](docs/ROADMAP.md)
- [Local Development Setup](docs/DEV_SETUP.md)
- [Contributing Guidelines](CONTRIBUTING.md)

---

## Branching Strategy & Git Flow

We follow the standard Git Flow model:
- `main`: Production-ready releases.
- `develop`: Primary integration branch for active development.
- `feature/*`: Feature development branches branched off `develop`.
- `hotfix/*`: Emergency fixes to production.

Please open Pull Requests targeting the `develop` branch. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
