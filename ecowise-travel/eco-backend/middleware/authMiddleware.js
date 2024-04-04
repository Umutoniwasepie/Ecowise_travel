const jwt = require('jsonwebtoken');
const { User } = require('../models');

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded); // Add this line to log decoded token

    // Check if user exists
    const user = await User.findByPk(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'Invalid token: User not found' });
    }

    // Attach user object to request for further processing
    req.user = user;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Middleware to protect routes that require authentication
const protectRoutes = (req, res, next) => {
  // List of routes that require authentication
  const protectedRoutes = ['/api/users', '/api/reviews']; // Add more routes as needed

  // Check if the requested route requires authentication
  if (protectedRoutes.includes(req.path)) {
    // Call the verifyToken middleware for authentication
    return verifyToken(req, res, next);
  }

  // If the route is not protected, move to the next middleware or route handler
  next();
};

module.exports = { verifyToken, protectRoutes };
