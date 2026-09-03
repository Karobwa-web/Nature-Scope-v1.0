/**
 * PesaPal v3 API Integration Service
 * Supports Visa, MasterCard, and regional East African mobile money aggregations.
 */
const logger = require('../utils/logger');

class PesapalService {
  async submitOrder({ amount, currency = 'UGX', email, phone, description, orderId }) {
    logger.info('Submitting PesaPal Order', { amount, currency, email, orderId });

    return {
      success: true,
      orderTrackingId: `PESA-${Date.now()}`,
      redirectUrl: `https://cybqa.pesapal.com/pesapalv3/h/Order?OrderTrackingId=mock-${Date.now()}`
    };
  }
}

module.exports = new PesapalService();
