# Nature Scope Backend API

RESTful API backend for the Nature Scope Multi-Vendor Wellness Marketplace, built with Node.js, Express, and PostgreSQL.

## Features
- **JWT Authentication & RBAC**: Roles for `buyer`, `vendor`, and `admin`.
- **Product & Vendor Management**: Full CRUD with relational PostgreSQL storage.
- **Payment & Escrow Logic**: Stubs and integration points for MTN MoMo, Airtel Money, and PesaPal.
- **Security**: Hardened with Helmet, CORS controls, and parameter sanitization.

## Getting Started

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Run tests:
   ```bash
   npm test
   ```

## API Endpoints Overview

- `GET /api/health` - Service health status
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login & JWT issuance
- `GET /api/products` - Browse & filter wellness products
- `GET /api/vendors` - Directory of verified wellness vendors
- `POST /api/orders` - Place marketplace order
- `POST /api/payments/initiate` - Initiate mobile money payment
