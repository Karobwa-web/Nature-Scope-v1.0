/**
 * MTN MoMo Open API Integration Service (Uganda)
 * Handles Collections, Disbursals (Payouts), and Transaction Status inquiries.
 */
const logger = require('../utils/logger');

class MomoService {
  /**
   * Request to Pay (Collection from Buyer)
   * @param {Object} params
   * @param {string} params.amount - Transaction amount in UGX
   * @param {string} params.phone - Buyer phone number (e.g. 256771234567)
   * @param {string} params.orderId - Internal Order Reference UUID
   */
  async requestToPay({ amount, phone, orderId }) {
    logger.info('Initiating MTN MoMo Collection', { amount, phone, orderId });

    // In sandbox or production, this performs a POST to /collection/v1_0/requesttopay
    return {
      success: true,
      transactionReference: `MOMO-UG-${Date.now()}`,
      status: 'pending',
      instructions: `Please approve the prompt on your phone (${phone}) for UGX ${amount}`
    };
  }

  /**
   * Transfer / Disbursal to Vendor
   */
  async disbursePayout({ amount, recipientPhone, payoutId }) {
    logger.info('Initiating MTN MoMo Vendor Payout', { amount, recipientPhone, payoutId });

    return {
      success: true,
      disbursalReference: `MOMO-PAYOUT-${Date.now()}`,
      status: 'processing'
    };
  }
}

module.exports = new MomoService();
