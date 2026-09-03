# Nature Scope System Architecture

This document describes the high-level system architecture, component boundaries, and data flows for the Nature Scope multi-vendor wellness marketplace.

## 1. High-Level Architecture

```text
  +-------------------------------------------------------------+
  |                        Client Layer                         |
  |   Buyers (Web & Mobile Web)       Vendors (Portal)         |
  |   React (Vite) + Tailwind CSS                              |
  +------------------------------+------------------------------+
                                 | HTTPS / REST APIs
                                 v
  +-------------------------------------------------------------+
  |                      API Gateway & Server                   |
  |                      Node.js + Express                      |
  |  - Auth (JWT, Role RBAC)       - Catalog & Search           |
  |  - Vendor Management           - Order & Escrow Management  |
  |  - Payment Webhook Listeners   - Notification Dispatcher    |
  +--------------+-------------------------------+--------------+
                 |                               |
                 v                               v
  +------------------------------+  +---------------------------+
  |       Data Persistence       |  |     External Services     |
  |      PostgreSQL Database     |  | - MTN MoMo Open API       |
  |  - Users & Vendors           |  | - Airtel Money API        |
  |  - Products & Inventory      |  | - PesaPal / Flutterwave   |
  |  - Orders, Payments, Escrow  |  | - Cloudinary (Images)     |
  +------------------------------+  +---------------------------+
```

## 2. Core Subsystems

### 2.1 Identity & Access Management
- Role-Based Access Control (RBAC): `buyer`, `vendor`, `admin`.
- Authentication via JWT bearer tokens in Authorization headers.
- Passwords hashed using `bcryptjs` with configurable work factor.

### 2.2 Product Catalog & Inventory
- Multi-category classification:
  - **Organic Products** (Produce, Herbal supplements, Organic grains)
  - **Natural Remedies** (Herbal tinctures, Traditional remedies, Essential oils)
  - **Spa & Wellness Services** (Massages, Therapy sessions, Consultations)
- Vendors manage stock quantities with optimistic locking on checkout.

### 2.3 Payment & Escrow Settlement
East African localized payment architecture supporting Ugandan Shillings (UGX):
1. **Initiation**: Buyer places order and initiates payment (MTN MoMo, Airtel Money, or Card).
2. **Authorization**: Payment gateway delivers webhook notification upon successful debit.
3. **Escrow Hold**: Funds are recorded in platform escrow ledger.
4. **Fulfillment**: Vendor ships item or fulfills appointment.
5. **Settlement**: Upon delivery confirmation, commission is deducted and vendor net payout is credited to their wallet balance.

## 3. Database Schema Overview

The primary relational entities in PostgreSQL include:
- `users`: User credentials, profile, role, phone number, verification state.
- `vendors`: Business profile, registration status (`pending`, `approved`, `rejected`), commission rate.
- `categories`: Marketplace category hierarchy.
- `products`: Title, description, price (UGX), stock, vendor foreign key.
- `orders`: Customer reference, total amount, shipping address, status (`pending`, `processing`, `shipped`, `delivered`, `cancelled`).
- `order_items`: Line items linking products, quantities, and vendor attribution.
- `payments`: Transaction references, gateway (`mtn_momo`, `airtel_money`, `pesapal`, `flutterwave`), gateway reference ID, status.
- `reviews`: Star ratings (1-5) and feedback for products and vendors.

---

See [PRD.md](file:///C:/Users/user/Desktop/Nature-Scope-v1.0/docs/PRD.md) for full functional requirements.
