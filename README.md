Nature Scope — your multi-vendor wellness marketplace for Uganda and East Africa. It includes everything from product vision down to detailed GitHub repository requirements to guide development team from Day 1.

---
Nature Scope

Version: 1.0
Date: August 2026
Status: Draft
Product Manager: [Monday Obadiah]
Project: Nature Scope Multi-Vendor Wellness Marketplace

---

1. Executive Summary

Nature Scope is a multi-vendor e-commerce marketplace that connects health-conscious consumers across Uganda and East Africa with trusted vendors of organic products, herbal remedies, and spa & wellness services. The platform builds on the established Nature Scope brand in holistic wellness, offering a curated, trusted destination for products and services that support physical and mental wellbeing.

The platform will feature distinct interfaces for Buyers, Vendors (Sellers), and Administrators. It will support product listings, service bookings, mobile money payments (MTN MoMo, Airtel Money), and logistics coordination across the region.

1.1 Problem Statement

Consumers in Uganda and East Africa struggle to find authentic, high-quality organic and wellness products in one trusted place. Vendors (herbalists, organic farmers, spas) lack a dedicated platform to reach their target audience, relying on fragmented channels like WhatsApp and physical markets. General e-commerce platforms do not cater to the specific needs of wellness vendors or the trust requirements of health-conscious buyers.

1.2 Opportunity

The wellness economy in East Africa is growing rapidly. With rising health awareness, increasing smartphone penetration, and the ubiquity of mobile money, there is a clear market gap for a specialized wellness marketplace. Nature Scope is uniquely positioned to fill this gap, leveraging its brand equity in holistic wellness.

---

2. Product Vision & Goals

2.1 Vision

To become East Africa's most trusted digital home for holistic wellness — where every organic product, herbal remedy, and wellness service is just a click away.

2.2 Goals (Success Metrics)

· Launch: Onboard 50+ vendors and 500+ active users within 3 months of launch.
· Transaction Volume: Process 1,000+ orders in the first 6 months.
· Vendor Retention: Achieve 80% vendor retention rate after 6 months.
· Customer Satisfaction: Maintain a 4.5+ star average rating across platform.

---

3. User Personas & Roles

The platform supports three primary user roles:

Role Description Key Needs
Buyer Health-conscious consumer in Uganda/East Africa Discover products, trust authenticity, easy checkout with mobile money, track orders
Vendor Wellness product maker, herbalist, spa owner List products, manage inventory, receive payments, analytics dashboard
Admin Nature Scope platform operator Approve vendors, moderate listings, manage commissions, oversee platform health

---

4. Functional Requirements

4.1 Buyer-Facing Features

# Feature Description Priority
FR-B1 User Registration/Login Email, phone (OTP), or social login P0
FR-B2 Product/Service Discovery Search, filters (category, price, rating, location), sorting P0
FR-B3 Product Detail Page Images, description, vendor info, reviews, pricing, add to cart P0
FR-B4 Shopping Cart Add/remove items, quantity updates, cart summary P0
FR-B5 Checkout Address collection, delivery option selection, payment gateway P0
FR-B6 Payment MTN MoMo, Airtel Money, bank card (via PesaPal/Flutterwave) P0
FR-B7 Order Tracking Real-time order status (Pending → Processing → Shipped → Delivered) P1
FR-B8 Reviews & Ratings Rate products and vendors, write reviews P1
FR-B9 Wishlist Save favorite products for later P2
FR-B10 Vendor Storefront View all products from a specific vendor, see vendor rating and info P1
FR-B11 Service Booking For spa/therapy services: view availability, book appointment slots P1

4.2 Vendor-Facing Features
[9/3/2026 2:26 PM] M. O. Ndabananiye: # Feature Description Priority
FR-V1 Vendor Registration Application form with business details, product categories, documents P0
FR-V2 Vendor Dashboard Overview of sales, orders, earnings, and performance metrics P0
FR-V3 Product Management Add/edit/delete products: title, description, price, images, stock, category P0
FR-V4 Order Management View incoming orders, update status (processing, shipped, delivered) P0
FR-V5 Payout Management View earnings, payout history, withdrawal requests P1
FR-V6 Analytics Sales reports, top-selling products, customer insights P2
FR-V7 Service Management For spa vendors: manage service listings, availability calendar, bookings P1
FR-V8 Vendor Profile Public storefront with branding, description, contact info, social links P1
FR-V9 Review Management View and respond to customer reviews P2

4.3 Admin-Facing Features

# Feature Description Priority
FR-A1 Admin Dashboard Platform-wide KPIs: total vendors, orders, revenue, commissions P0
FR-A2 Vendor Approval Review and approve/reject vendor applications, verify documents P0
FR-A3 Product Moderation Review product listings for quality, authenticity, and compliance P0
FR-A4 Commission Management Set and adjust commission rates per vendor or category P1
FR-A5 Payment Reconciliation Track vendor payouts, platform revenue, transaction logs P1
FR-A6 User Management View/block buyers and vendors, handle disputes P1
FR-A7 Content Management Manage categories, banners, promotional content P1
FR-A8 Logistics Management Partner delivery integration, order assignment to couriers P2
FR-A9 Analytics & Reports Sales trends, vendor performance, customer acquisition data P2

---

5. Non-Functional Requirements

# Requirement Description
NFR-1 Performance Page load time < 3 seconds; API response < 500ms
NFR-2 Scalability Support 100+ concurrent users at launch; scale to 1,000+
NFR-3 Security HTTPS, encrypted user data, secure payment tokenization, regular security audits
NFR-4 Availability 99.5% uptime (SLA)
NFR-5 Mobile-First Fully responsive; optional native mobile app (Phase 2)
NFR-6 Localization Support UGX currency; MTN MoMo & Airtel Money integration
NFR-7 Data Privacy GDPR-compliant data handling; user consent for marketing
NFR-8 Backup Daily automated database backups; disaster recovery plan

---

6. Technical Architecture & Stack

6.1 Recommended Tech Stack (Option A: Custom Build)

Layer Technology Rationale
Frontend React.js / Next.js Fast, SEO-friendly, component-based UI
Backend Node.js + Express.js Full-stack JavaScript, large ecosystem, REST API
Database PostgreSQL Robust relational DB, supports complex queries, JSON fields
Authentication JWT (JSON Web Tokens) Stateless, scalable auth
Payments PesaPal / Flutterwave + MTN/Airtel APIs Local payment gateways with mobile money support
Hosting AWS / Google Cloud / Local (e.g., Rackspace) Scalable cloud infrastructure
Search Elasticsearch / Meilisearch Fast product search with filters
File Storage AWS S3 / Cloudinary Product images and media
CI/CD GitHub Actions Automated testing and deployment

6.2 Alternative: WordPress + Dokan (Faster MVP)

Layer Technology
CMS WordPress
E-commerce WooCommerce
Multi-Vendor Dokan Pro
Hosting Managed WordPress hosting
Payments WooCommerce-compatible gateways (PesaPal, Flutterwave)

Recommendation: Start with WordPress + Dokan for a faster, cost-effective MVP (4–6 weeks to launch). Transition to a custom build (Node.js + React) in Year 2 as the platform scales.

---

7. Payment & Logistics Integration (Uganda-Specific)

7.1 Payment Gateways

Gateway Supported Methods Notes
PesaPal MTN MoMo, Airtel Money, Cards Widely used in Uganda; supports redirect flow
Flutterwave Mobile Money, Cards Pan-African; strong API documentation
Pegasus (PegPay) MTN MoMo, Airtel Money Local aggregator; real-time settlement
Yo! Uganda Mobile Money Established local provider

Payment Flow:
[9/3/2026 2:26 PM] M. O. Ndabananiye: 1. Buyer selects mobile money or card at checkout.
2. Payment gateway processes transaction.
3. Funds are held in escrow (or directly settled).
4. Platform deducts commission.
5. Remaining amount is released to vendor (scheduled payout).

7.2 Logistics & Delivery

Option Description
Vendor Self-Delivery Vendors manage their own delivery (simplest for MVP)
Platform-Managed Delivery Partner with local couriers (SafeBoda, courier services) for bulk rates
Hybrid Vendors can choose self-delivery or platform delivery

---

8. GitHub Repository Requirements

8.1 Repository Structure

The project will be hosted on GitHub with the following structure:

nature-scope/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml              # Continuous Integration
│   │   ├── cd.yml              # Continuous Deployment
│   │   └── security-scan.yml   # Security vulnerability scanning
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   ├── feature_request.md
│   │   └── vendor_onboarding.md
│   └── PULL_REQUEST_TEMPLATE.md
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── styles/
│   ├── public/
│   ├── package.json
│   └── README.md
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── utils/
│   ├── tests/
│   ├── package.json
│   └── README.md
├── database/
│   ├── migrations/
│   └── seeds/
├── docs/
│   ├── PRD.md                   # This document
│   ├── architecture.md
│   ├── api-specification.yaml   # OpenAPI spec
│   └── DEV_SETUP.md             # Local development setup guide[reference:19]
├── docker-compose.yml
├── .gitignore[reference:20]
├── README.md[reference:21]
├── CONTRIBUTING.md[reference:22]
└── LICENSE
8.2 Branching Strategy

Branch Purpose
main Production-ready code; protected, requires PR approval
develop Integration branch for all feature work
feature/* Individual features (e.g., feature/vendor-dashboard)
hotfix/* Emergency fixes to production

Git Flow:

1. Developers create feature/* branches from develop.
2. Open Pull Request to develop with at least one reviewer.
3. After testing, merge develop → main for releases.
4. Tag releases with semantic versioning (v1.0.0, v1.1.0, etc.).

8.3 CI/CD Pipeline (GitHub Actions)

Workflow: ci.yml — Runs on every push to develop and main:

· Lint code (ESLint for JS/TS)
· Run unit tests
· Run integration tests
· Build frontend and backend
· Security scan (npm audit, Snyk)

Workflow: cd.yml — Runs on merge to main:

· Build Docker images
· Push to container registry
· Deploy to staging environment
· Run smoke tests
· Promote to production after approval

8.4 Issue Tracking

All work will be tracked via GitHub Issues with the following labels:

Label Purpose
bug Something isn't working
feature New feature request
enhancement Improvement to existing feature
documentation Docs-related work
priority:high Must-do immediately
priority:medium Important but not blocking
priority:low Nice-to-have
good-first-issue For new contributors

Issue Template (for features) will include:

· User Story: As a [role], I want [goal] so that [benefit].
· Acceptance Criteria: List of conditions that must be met.
· Technical Notes: Relevant technical details.
· Design/Mockups: Link to Figma.

8.5 Pull Request Requirements

Each PR must include:

· Description: What does this PR do? Why?
· Testing: How was this tested? (manual, automated)
· Screenshots: For UI changes.
· Checklist:
  ☐ Code follows style guidelines
  ☐ Tests added/updated
  ☐ Documentation updated
  ☐ No new vulnerabilities introduced
· Reviewers: At least one reviewer required before merge.

8.6 Code Quality Standards

· Frontend: React/Next.js best practices; component-based architecture; reusable UI components.
[9/3/2026 2:26 PM] M. O. Ndabananiye: · Backend: RESTful API design; proper error handling; input validation; logging.
· Database: Use migrations for schema changes; write efficient queries; index frequently queried fields.
· Testing: Minimum 70% test coverage (unit + integration).
· Documentation: Inline comments for complex logic; API endpoints documented in OpenAPI.

8.7 Repository Access & Permissions

Role Permissions
Owner (Product Manager) Full admin: manage repo, settings, secrets, workflows
Lead Developer Write access to main, develop; manage PRs
Developers Write access to develop; create feature branches; open PRs
Freelancers/Contractors Read access to develop; write to feature branches (invited as collaborators)

8.8 Initial Repository Setup Checklist

☐ Create repository: nature-scope (private initially)
☐ Initialize with README.md including project overview and setup instructions
☐ Add .gitignore (Node.js + React template)
☐ Set up branch protection rules for main and develop:
  · Require pull request reviews
  · Require status checks to pass (CI)
  · Require conversation resolution
☐ Configure GitHub Actions workflows (ci.yml, cd.yml)
☐ Set up issue and PR templates
☐ Invite team members and collaborators
☐ Add CONTRIBUTING.md
☐ Add LICENSE (e.g., MIT for open-source components, proprietary for core)

---

9. Implementation Roadmap

Phase Duration Key Deliverables
Phase 0: Discovery & Validation Weeks 1-2 Vendor interviews, competitor analysis, MVP scope definition
Phase 1: MVP Build Weeks 3-8 Vendor registration, product listing, shopping cart, checkout, mobile money, basic admin
Phase 2: Beta Soft-Launch Weeks 9-10 Invite-only testing with 10 vendors, 50 users; bug fixes
Phase 3: Public Launch Week 12 Full launch in Kampala; marketing campaign
Phase 4: Iteration Months 4-6 Service bookings, reviews, analytics, vendor dashboard enhancements
Phase 5: Regional Expansion Year 2 Kenya, Tanzania, Rwanda; native mobile app

---

10. Risks & Mitigation

Risk Impact Mitigation
Vendor quality control Brand reputation damage Rigorous vetting process; product moderation
Payment gateway reliability Lost sales, frustrated users Multiple gateway integration; fallback options
Logistics/delivery failures Poor customer experience Partner with reputable couriers; real-time tracking
Low vendor adoption Empty marketplace Recruit anchor vendors pre-launch; 0% commission for 3 months
Security breach Data loss, legal liability Encryption, regular audits, secure coding practices

---

11. Appendix

A. Glossary

Term Definition
MVP Minimum Viable Product — the simplest version that delivers value
P0/P1/P2 Priority levels: P0 = must-have, P1 = should-have, P2 = nice-to-have
Mobile Money Digital wallet service (MTN MoMo, Airtel Money) used for payments in Uganda
Multi-Vendor Platform model where multiple independent sellers list products
Split Payment Transaction where payment is divided between vendor and platform commission

B. References

· Dokan Multi-Vendor Documentation
· Sharetribe Marketplace Features
· Spree Commerce Multi-Vendor Architecture
· Pegasus Technologies Payment API
· Uganda Payments Community Resources

---

12. Approval

Role Name Signature Date
Product Manager [Monday Obadiah]  
Lead Developer [Artificial Intelligence]  
Business Owner [Nature Scope]  

---

This PRD is your single source of truth for the Nature Scope project.l
