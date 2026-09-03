const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET || 'secret', {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  });
};

exports.register = async (req, res, next) => {
  try {
    const { full_name, email, phone, password, role = 'buyer' } = req.body;

    if (!full_name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide full_name, email, and password' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Mock/Database insertion
    const token = generateToken('mock-user-id', role);

    res.status(201).json({
      success: true,
      message: 'Registration successful',
      token,
      user: { full_name, email, phone, role }
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide email and password' });
    }

    // Mock/Database verification
    const token = generateToken('mock-user-id', 'buyer');

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: { email, role: 'buyer' }
    });
  } catch (error) {
    next(error);
  }
};
