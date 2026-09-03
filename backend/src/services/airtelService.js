/**
 * Airtel Money Integration Service (Uganda)
 */
const logger = require('../utils/logger');

class AirtelService {
  async collectPayment({ amount, phone, reference }) {
    logger.info('Initiating Airtel Money Payment', { amount, phone, reference });

    return {
      success: true,
      transactionReference: `AIRTEL-UG-${Date.now()}`,
      status: 'pending',
      instructions: `Please enter your Airtel Money PIN on ${phone} to complete the UGX ${amount} payment.`
    };
  }
}

module.exports = new AirtelService();
