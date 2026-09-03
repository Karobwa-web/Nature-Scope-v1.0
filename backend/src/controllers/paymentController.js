const momoService = require('../services/momoService');
const airtelService = require('../services/airtelService');
const pesapalService = require('../services/pesapalService');

exports.initiatePayment = async (req, res, next) => {
  try {
    const { order_id, amount_ugx, phone, email, gateway } = req.body;

    if (!order_id || !amount_ugx || !gateway) {
      return res.status(400).json({
        success: false,
        message: 'order_id, amount_ugx, and gateway are required'
      });
    }

    let paymentResult;
    switch (gateway) {
      case 'mtn_momo':
        paymentResult = await momoService.requestToPay({
          amount: amount_ugx,
          phone: phone || '256770000000',
          orderId: order_id
        });
        break;

      case 'airtel_money':
        paymentResult = await airtelService.collectPayment({
          amount: amount_ugx,
          phone: phone || '256750000000',
          reference: order_id
        });
        break;

      case 'pesapal':
      case 'card':
        paymentResult = await pesapalService.submitOrder({
          amount: amount_ugx,
          email: email || 'buyer@example.com',
          phone,
          orderId: order_id
        });
        break;

      default:
        return res.status(400).json({
          success: false,
          message: `Unsupported payment gateway: ${gateway}. Choose from mtn_momo, airtel_money, pesapal.`
        });
    }

    res.json({
      success: true,
      gateway,
      result: paymentResult
    });
  } catch (error) {
    next(error);
  }
};
