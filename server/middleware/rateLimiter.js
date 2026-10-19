import rateLimit from 'express-rate-limit';

const windowMinutes = parseInt(process.env.RATE_LIMIT_WINDOW_MINUTES || '15', 10);
const maxRequests = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '10', 10);

/**
 * Rate limiter specifically for contact form submissions to prevent abuse and spam
 */
export const contactLimiter = rateLimit({
  windowMs: windowMinutes * 60 * 1000,
  max: maxRequests,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Too many messages submitted from this IP. Please wait a few minutes before trying again.',
  },
});

/**
 * General API limiter for health checks and general requests
 */
export const apiLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 150,
  standardHeaders: true,
  legacyHeaders: false,
});
