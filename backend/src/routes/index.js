const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes');
const vendorRoutes = require('./vendorRoutes');
const orderRoutes = require('./orderRoutes');
const paymentRoutes = require('./paymentRoutes');

// API Health Check
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Nature Scope API v1.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Route registration
router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/vendors', vendorRoutes);
router.use('/orders', orderRoutes);
router.use('/payments', paymentRoutes);

module.exports = router;
