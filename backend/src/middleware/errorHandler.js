const logger = require('../utils/logger');

// Centralized error handling middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  logger.error(`Error processing ${req.method} ${req.url}`, {
    statusCode,
    message,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
  });

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
    }
  });
};

module.exports = errorHandler;
