# Nature Scope: Phase 1 MVP Implementation Sprint Plan

Based on Section 9 of the [Product Requirements Document (PRD)](PRD.md), this document breaks down the **6-week MVP build (Weeks 3-8)** into concrete sprints.

---

## Sprint Overview

```text
Week 3: Core Foundation (Auth, User Models, Database Migrations)
Week 4: Catalog & Storefront (Products, Categories, Vendor Profiles)
Week 5: Shopping Cart & Order Management Pipeline
Week 6: Uganda Payment Integrations (MTN MoMo, Airtel, Escrow)
Week 7: Vendor & Admin Portals (KYC Approvals, Payouts)
Week 8: End-to-End Testing, Security Audits, and Staging Deployment
```

---

## Detailed Sprint Backlog

### Sprint 1 (Week 3): Identity, Access & Database Foundation
- [x] Establish PostgreSQL schema migrations (`users`, `vendors`, `categories`, `products`, `orders`, `payments`).
- [ ] Connect backend PostgreSQL connection pool (`backend/src/config/db.js`) to live database.
- [ ] Implement JWT user registration and authentication endpoints with role-based access control (`buyer`, `vendor`, `admin`).
- [ ] Implement password hashing and token expiration handling.
- [ ] Build Frontend Login and Register modal / page.

### Sprint 2 (Week 4): Marketplace Catalog & Search
- [ ] Build CRUD endpoints for products and categories.
- [ ] Add image upload service (Cloudinary / S3) for product photos and vendor banners.
- [ ] Implement category filter pills, price slider, and search debouncing on frontend.
- [ ] Develop vendor storefront page (`/vendors/:id`) showcasing vendor bio, certification badges, and listed remedies.

### Sprint 3 (Week 5): Cart, Checkout & Logistics
- [ ] Build client-side persistent cart state (React Context / LocalStorage).
- [ ] Build multi-vendor order partitioning logic (splitting items by vendor).
- [ ] Implement delivery fee calculator based on district (Kampala urban, Wakiso, Entebbe, upcountry).
- [ ] Create order creation endpoint and database transaction handling.

### Sprint 4 (Week 6): Uganda Mobile Money & Escrow Engine
- [ ] Implement live sandbox test suite for MTN MoMo Open API collections.
- [ ] Implement live sandbox test suite for Airtel Money collections.
- [ ] Set up webhook callback listener with HMAC signature verification.
- [ ] Build escrow state machine (`pending` -> `held` -> `released_to_vendor` or `refunded`).
- [ ] Build USSD push prompt notification UI on frontend checkout.

### Sprint 5 (Week 7): Vendor & Admin Dashboards
- [ ] Vendor portal: Product creation form with stock quantity management.
- [ ] Vendor portal: Incoming order status updater (`processing`, `shipped`, `delivered`).
- [ ] Admin portal: Vendor KYC review interface (approve, reject, request additional documents).
- [ ] Admin portal: Platform fee and commission breakdown dashboard.

### Sprint 6 (Week 8): Hardening, QA & Soft-Launch Prep
- [ ] End-to-end integration testing for checkout and payment webhooks.
- [ ] Run automated security audit (`npm audit` and vulnerability scanning).
- [ ] Configure staging server on cloud provider (AWS / DigitalOcean / local VPS).
- [ ] Soft launch onboarding of the first 10 pilot vendors (organic cooperatives and herbalists).
