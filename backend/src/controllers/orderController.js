exports.createOrder = async (req, res, next) => {
  try {
    const { items, delivery_address, delivery_phone, delivery_method, notes } = req.body;

    if (!items || !items.length || !delivery_address || !delivery_phone) {
      return res.status(400).json({
        success: false,
        message: 'Please provide items list, delivery_address, and delivery_phone'
      });
    }

    const orderId = `ORD-UG-${Date.now()}`;
    const subtotal = items.reduce((sum, item) => sum + (item.price_ugx * item.quantity), 0);
    const delivery_fee = 5000;
    const total_amount_ugx = subtotal + delivery_fee;

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: {
        order_id: orderId,
        items,
        subtotal,
        delivery_fee,
        total_amount_ugx,
        status: 'pending_payment',
        delivery_address,
        delivery_phone
      }
    });
  } catch (error) {
    next(error);
  }
};
