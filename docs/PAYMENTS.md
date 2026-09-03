# Nature Scope Payment Integration Guide

This guide details the integration architecture, workflows, credentials, and webhook mechanisms for regional payment providers supporting Ugandan Shillings (UGX).

---

## 1. Supported Payment Gateways

| Gateway | Channels | Use Case | Settlement |
| :--- | :--- | :--- | :--- |
| **MTN Mobile Money (MoMo)** | USSD push prompts | Direct collection from MTN subscribers across Uganda | Real-time to platform escrow |
| **Airtel Money** | USSD PIN prompts | Direct collection from Airtel subscribers across Uganda | Real-time to platform escrow |
| **PesaPal v3** | Visa, MasterCard, Pan-African MoMo | Cardholders and diaspora purchases | T+1 settlement |
| **Flutterwave** | Cards, Bank Transfers, MoMo | Regional expansion fallback (Kenya, Rwanda, Tanzania) | T+1 settlement |

---

## 2. Payment & Escrow Workflow

Nature Scope operates a multi-vendor trust model where funds are held safely until delivery confirmation:

```text
[ Buyer Checkout ]
       |
       v
[ Initiate Payment API ] ---> (MTN MoMo / Airtel Money / PesaPal)
       |
       v (User approves PIN prompt on phone)
[ Webhook Listener ] --------> Verified Transaction
       |
       +---> Set Order Status: 'processing'
       +---> Credit Escrow Ledger: 'held'
       |
[ Vendor Dispatches Order via Courier (SafeBoda/Local Courier) ]
       |
       v
[ Buyer Confirms Delivery ]
       |
       v
[ Escrow Release Execution ]
       +---> Platform Commission (10%) deducted to Nature Scope Account
       +---> Net Vendor Amount (90%) disbursed via MoMo Disbursals API
```

---

## 3. MTN MoMo Open API Setup (Uganda)

### Prerequisites
1. Register at [MTN MoMo Developer Portal](https://momodeveloper.mtn.com/).
2. Subscribe to **Collections** (for customer purchases) and **Disbursements** (for vendor payouts).
3. Primary and Secondary Subscription Keys.

### Environment Variables
```env
MTN_MOMO_PRIMARY_KEY=your_subscription_key
MTN_MOMO_USER_ID=uuid_generated_for_api_user
MTN_MOMO_API_KEY=api_key_created_for_user
MTN_MOMO_TARGET_ENVIRONMENT=sandbox # or 'mtnuganda' for live production
MTN_MOMO_CALLBACK_URL=https://api.naturescope.ug/api/payments/callbacks/momo
```

### Flow
- **Step 1: Get Access Token**: `POST /collection/token/` with Basic Auth (`API_USER:API_KEY`).
- **Step 2: Request to Pay**: `POST /collection/v1_0/requesttopay`
  ```json
  {
    "amount": "28000",
    "currency": "EUR", // sandbox uses EUR or UGX in production
    "externalId": "ORD-UG-1725376200",
    "payer": {
      "partyIdType": "MSISDN",
      "partyId": "256771234567"
    },
    "payerMessage": "Payment for Nature Scope Organic Goods",
    "payeeNote": "Nature Scope Escrow"
  }
  ```
- **Step 3: Verification**: Listen to callback URL or poll `GET /collection/v1_0/requesttopay/{referenceId}`.

---

## 4. Airtel Money API Setup

### Authentication & Token Exchange
1. Register on the Airtel Africa Developer Portal.
2. Exchange `client_id` and `client_secret` for a Bearer token:
   `POST /auth/oauth2/token`
3. Execute C2B Collection:
   `POST /merchant/v1/payments/`
4. Payload:
   ```json
   {
     "reference": "ORD-UG-1725376200",
     "subscriber": {
       "country": "UG",
       "currency": "UGX",
       "msisdn": "750000000"
     },
     "transaction": {
       "amount": 28000,
       "country": "UG",
       "currency": "UGX",
       "id": "TX-12345"
     }
   }
   ```

---

## 5. PesaPal v3 Setup (Card & Aggregator)

1. Base URL (Live): `https://pay.pesapal.com/v3`
2. Base URL (Sandbox): `https://cybqa.pesapal.com/pesapalv3`
3. Register IPN (Instant Payment Notification) URL: `https://api.naturescope.ug/api/payments/callbacks/pesapal`
4. Authentication: Submit `consumer_key` and `consumer_secret` to `/api/Auth/RequestToken` to receive JWT.
5. Create Order: Submit order request to `/api/Transactions/SubmitOrderRequest` and redirect buyer to the `redirect_url`.
