# Nature Scope

> A trusted multi-vendor wellness marketplace for Uganda and East Africa.

Nature Scope connects health-conscious consumers with trusted vendors of organic products, herbal remedies, and spa and wellness services. This document captures the product vision, requirements, technical direction, delivery plan, and repository standards that will guide the team from Day 1.

## Document Control

| Field | Details |
| --- | --- |
| Version | 1.0 |
| Date | August 2026 |
| Status | Draft |
| Product manager | Monday Obadiah |
| Project | Nature Scope Multi-Vendor Wellness Marketplace |

## Contents

- [1. Executive Summary](#1-executive-summary)
- [2. Product Vision and Goals](#2-product-vision-and-goals)
- [3. User Personas and Roles](#3-user-personas-and-roles)
- [4. Functional Requirements](#4-functional-requirements)
- [5. Non-Functional Requirements](#5-non-functional-requirements)
- [6. Technical Architecture and Stack](#6-technical-architecture-and-stack)
- [7. Payment and Logistics Integration](#7-payment-and-logistics-integration)
- [8. GitHub Repository Requirements](#8-github-repository-requirements)
- [9. Implementation Roadmap](#9-implementation-roadmap)
- [10. Risks and Mitigation](#10-risks-and-mitigation)
- [11. Appendix](#11-appendix)
- [12. Approval](#12-approval)

## 1. Executive Summary

Nature Scope is a multi-vendor e-commerce marketplace for Uganda and East Africa. It provides a curated and trusted destination for organic products, herbal remedies, and spa and wellness services, building on the established Nature Scope brand in holistic wellness.

The platform will provide distinct experiences for three audiences:

- **Buyers** discovering and purchasing products or booking services.
- **Vendors** listing products, managing orders, and growing their businesses.
- **Administrators** approving vendors, moderating listings, and overseeing platform operations.

The marketplace will support product listings, service bookings, mobile money payments through MTN MoMo and Airtel Money, card payments, and logistics coordination across the region.

### 1.1 Problem Statement

Consumers in Uganda and East Africa often struggle to find authentic, high-quality organic and wellness products in one trusted place. Vendors such as herbalists, organic farmers, and spa owners lack a dedicated platform for reaching their target audiences and often rely on fragmented channels such as WhatsApp and physical markets.

General e-commerce platforms do not adequately address the needs of wellness vendors or the trust requirements of health-conscious buyers.

### 1.2 Opportunity

The wellness economy in East Africa is growing rapidly. Rising health awareness, increasing smartphone adoption, and the widespread use of mobile money create a clear market opportunity for a specialized wellness marketplace.

Nature Scope is positioned to address this opportunity by combining a trusted wellness brand with a curated marketplace experience designed for regional consumers and vendors.

## 2. Product Vision and Goals

### 2.1 Vision

> To become East Africa's most trusted digital home for holistic wellness, where every organic product, herbal remedy, and wellness service is just a click away.

### 2.2 Goals and Success Metrics

| Goal | Target |
| --- | --- |
| Launch | Onboard more than 50 vendors and 500 active users within the first 3 months. |
| Transaction volume | Process more than 1,000 orders within the first 6 months. |
| Vendor retention | Achieve an 80% vendor retention rate after 6 months. |
| Customer satisfaction | Maintain an average platform rating of at least 4.5 stars. |

## 3. User Personas and Roles

The platform supports three primary user roles:

| Role | Description | Key needs |
| --- | --- | --- |
| Buyer | A health-conscious consumer in Uganda or East Africa. | Discover products, verify authenticity, check out easily with mobile money, and track orders. |
| Vendor | A wellness product maker, herbalist, organic farmer, or spa owner. | List products or services, manage inventory, receive payments, and view performance analytics. |
| Administrator | A Nature Scope platform operator. | Approve vendors, moderate listings, manage commissions, and oversee platform health. |

## 4. Functional Requirements

Priority levels are defined as follows:

- **P0:** Must-have for the initial release.
- **P1:** Important follow-up capability.
- **P2:** Nice-to-have capability for a later phase.

### 4.1 Buyer-Facing Features

| ID | Feature | Description | Priority |
| --- | --- | --- | --- |
| FR-B1 | User registration and login | Support email, phone number with OTP, and social login. | P0 |
| FR-B2 | Product and service discovery | Provide search, category, price, rating, and location filters, plus sorting. | P0 |
| FR-B3 | Product detail page | Display images, description, vendor information, reviews, pricing, and an add-to-cart action. | P0 |
| FR-B4 | Shopping cart | Support adding and removing items, updating quantities, and viewing a cart summary. | P0 |
| FR-B5 | Checkout | Collect an address, provide delivery options, and connect to a payment gateway. | P0 |
| FR-B6 | Payments | Support MTN MoMo, Airtel Money, and bank cards through PesaPal or Flutterwave. | P0 |
| FR-B7 | Order tracking | Show real-time order status: Pending, Processing, Shipped, and Delivered. | P1 |
| FR-B8 | Reviews and ratings | Allow buyers to rate products and vendors and write reviews. | P1 |
| FR-B9 | Wishlist | Allow buyers to save favorite products for later. | P2 |
| FR-B10 | Vendor storefront | Show a vendor's products, rating, and profile information. | P1 |
| FR-B11 | Service booking | Allow buyers to view availability and book appointment slots for spa and therapy services. | P1 |

### 4.2 Vendor-Facing Features

| ID | Feature | Description | Priority |
| --- | --- | --- | --- |
| FR-V1 | Vendor registration | Collect business details, product categories, and supporting documents. | P0 |
| FR-V2 | Vendor dashboard | Show sales, orders, earnings, and performance metrics. | P0 |
| FR-V3 | Product management | Add, edit, and delete products, including title, description, price, images, stock, and category. | P0 |
| FR-V4 | Order management | View incoming orders and update their status to Processing, Shipped, or Delivered. | P0 |
| FR-V5 | Payout management | Show earnings and payout history and support withdrawal requests. | P1 |
| FR-V6 | Analytics | Provide sales reports, top-selling products, and customer insights. | P2 |
| FR-V7 | Service management | Allow spa vendors to manage services, availability calendars, and bookings. | P1 |
| FR-V8 | Vendor profile | Provide a public storefront with branding, description, contact information, and social links. | P1 |
| FR-V9 | Review management | Allow vendors to view and respond to customer reviews. | P2 |

### 4.3 Admin-Facing Features

| ID | Feature | Description | Priority |
| --- | --- | --- | --- |
| FR-A1 | Admin dashboard | Show platform-wide KPIs, including total vendors, orders, revenue, and commissions. | P0 |
| FR-A2 | Vendor approval | Review, approve, or reject vendor applications and verify documents. | P0 |
| FR-A3 | Product moderation | Review product listings for quality, authenticity, and compliance. | P0 |
| FR-A4 | Commission management | Set and adjust commission rates by vendor or category. | P1 |
| FR-A5 | Payment reconciliation | Track vendor payouts, platform revenue, and transaction logs. | P1 |
| FR-A6 | User management | View or block buyers and vendors and handle disputes. | P1 |
| FR-A7 | Content management | Manage categories, banners, and promotional content. | P1 |
| FR-A8 | Logistics management | Integrate delivery partners and assign orders to couriers. | P2 |
| FR-A9 | Analytics and reports | Provide sales trends, vendor performance, and customer acquisition data. | P2 |

## 5. Non-Functional Requirements

| ID | Requirement | Description |
| --- | --- | --- |
| NFR-1 | Performance | Page load time should be less than 3 seconds, with API responses under 500 ms. |
| NFR-2 | Scalability | Support at least 100 concurrent users at launch and scale to more than 1,000 users. |
| NFR-3 | Security | Use HTTPS, encrypt user data, securely tokenize payments, and perform regular security audits. |
| NFR-4 | Availability | Target 99.5% uptime under the service-level agreement. |
| NFR-5 | Mobile-first experience | Provide a fully responsive web experience, with an optional native mobile app in Phase 2. |
| NFR-6 | Localization | Support UGX currency and MTN MoMo and Airtel Money integrations. |
| NFR-7 | Data privacy | Apply GDPR-compliant data handling and obtain user consent for marketing communications. |
| NFR-8 | Backup and recovery | Run daily automated database backups and maintain a disaster recovery plan. |

## 6. Technical Architecture and Stack

### 6.1 Custom Build (Primary Stack)

| Layer | Technology | Rationale |
| --- | --- | --- |
| Frontend | React.js (Vite) + Tailwind CSS | Fast, component-based development, mobile-first responsiveness. |
| Backend | Node.js with Express.js | Full-stack JavaScript, rich ecosystem, and modular REST API support. |
| Database | PostgreSQL | Relational integrity for orders, commissions, payouts, and JSON flexibility. |
| Authentication | JWT (JSON Web Tokens) & bcrypt | Stateless and secure authentication. |
| Payments | PesaPal, Flutterwave, and MTN/Airtel APIs | Local mobile money and card transaction support. |
| Containerization | Docker & Docker Compose | Consistent local and staging environments. |
| Storage | Cloudinary / AWS S3 | Cloud storage for vendor banners and product images. |
| CI/CD | GitHub Actions | Automated linting, test suites, and vulnerability scans. |

## 7. Payment and Logistics Integration

### 7.1 Payment Gateways

| Gateway | Supported methods | Notes |
| --- | --- | --- |
| PesaPal | MTN MoMo, Airtel Money, and cards | Widely used in Uganda and supports a redirect flow. |
| Flutterwave | Mobile money and cards | Pan-African coverage with strong API documentation. |
| Pegasus (PegPay) | MTN MoMo and Airtel Money | Local aggregator with real-time settlement. |
| Yo! Uganda | Mobile money | Established local provider. |

### 7.2 Payment Flow

1. The buyer selects mobile money or card payment at checkout.
2. The payment gateway processes the transaction.
3. Funds are held in escrow or settled directly, depending on the gateway arrangement.
4. The platform deducts its commission.
5. The remaining amount is released to the vendor through a scheduled payout.

### 7.3 Logistics and Delivery Options

| Option | Description |
| --- | --- |
| Vendor self-delivery | Vendors manage their own deliveries. This is the simplest MVP option. |
| Platform-managed delivery | The platform partners with local couriers, such as SafeBoda and other courier services, to negotiate bulk rates. |
| Hybrid delivery | Vendors can choose between self-delivery and platform-managed delivery. |

## 8. GitHub Repository Requirements

### 8.1 Repository Structure

```text
nature-scope/
|-- .github/
|   |-- workflows/
|   |   |-- ci.yml                  # Continuous integration
|   |   |-- cd.yml                  # Continuous deployment
|   |   `-- security-scan.yml       # Security vulnerability scanning
|   |-- ISSUE_TEMPLATE/
|   |   |-- bug_report.md
|   |   |-- feature_request.md
|   |   `-- vendor_onboarding.md
|   `-- PULL_REQUEST_TEMPLATE.md
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |-- pages/
|   |   |-- hooks/
|   |   |-- utils/
|   |   `-- styles/
|   |-- public/
|   |-- package.json
|   `-- README.md
|-- backend/
|   |-- src/
|   |   |-- controllers/
|   |   |-- models/
|   |   |-- routes/
|   |   |-- middleware/
|   |   |-- services/
|   |   `-- utils/
|   |-- tests/
|   |-- package.json
|   `-- README.md
|-- database/
|   |-- migrations/
|   `-- seeds/
|-- docs/
|   |-- PRD.md
|   |-- architecture.md
|   |-- api-specification.yaml
|   `-- DEV_SETUP.md
|-- docker-compose.yml
|-- .gitignore
|-- README.md
|-- CONTRIBUTING.md
`-- LICENSE
```

### 8.2 Branching Strategy

| Branch | Purpose |
| --- | --- |
| `main` | Production-ready code. Protected and requires pull request approval. |
| `develop` | Integration branch for feature work. |
| `feature/*` | Individual features, such as `feature/vendor-dashboard`. |
| `hotfix/*` | Emergency fixes for production. |

## 9. Implementation Roadmap

| Phase | Duration | Key deliverables |
| --- | --- | --- |
| Phase 0: Discovery and validation | Weeks 1-2 | Vendor interviews, competitor analysis, and MVP scope definition. |
| Phase 1: MVP build | Weeks 3-8 | Vendor registration, product listing, shopping cart, checkout, mobile money, and basic administration. |
| Phase 2: Beta soft launch | Weeks 9-10 | Invite-only testing with 10 vendors and 50 users, followed by bug fixes. |
| Phase 3: Public launch | Week 12 | Full launch in Kampala and a supporting marketing campaign. |
| Phase 4: Iteration | Months 4-6 | Service bookings, reviews, analytics, and vendor dashboard enhancements. |
| Phase 5: Regional expansion | Year 2 | Expansion to Kenya, Tanzania, and Rwanda, plus a native mobile app. |

## 10. Risks and Mitigation

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Vendor quality control | Damage to the brand's reputation. | Use a rigorous vendor-vetting process and moderate product listings. |
| Payment gateway reliability | Lost sales and frustrated users. | Integrate multiple gateways and provide fallback options. |
| Logistics and delivery failures | Poor customer experience. | Partner with reputable couriers and provide real-time tracking. |
| Low vendor adoption | An empty or limited marketplace. | Recruit anchor vendors before launch and offer 0% commission for the first 3 months. |
| Security breach | Data loss and legal liability. | Use encryption, conduct regular audits, and follow secure coding practices. |

## 11. Appendix

### A. Glossary

| Term | Definition |
| --- | --- |
| MVP | Minimum Viable Product: the simplest version of a product that delivers value. |
| P0, P1, P2 | Priority levels: P0 means must-have, P1 means should-have, and P2 means nice-to-have. |
| Mobile money | A digital wallet service, such as MTN MoMo or Airtel Money, used for payments in Uganda. |
| Multi-vendor | A platform model in which multiple independent sellers list products or services. |
| Split payment | A transaction in which payment is divided between the vendor and the platform commission. |

### B. References

- Dokan Multi-Vendor Documentation
- Sharetribe Marketplace Features
- Spree Commerce Multi-Vendor Architecture
- Pegasus Technologies Payment API
- Uganda Payments Community Resources

---

This PRD is the single source of truth for the Nature Scope project.
