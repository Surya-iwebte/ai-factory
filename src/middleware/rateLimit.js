const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  handler: (req, res) => {
    res.set('Retry-After', 60);
    return res.status(429).json({ error: 'Too many attempts, try again later' });
  }
});

const limitLoginAttempts = (req, res, next) => {
  limiter(req, res, next);
};

module.exports = { limitLoginAttempts };