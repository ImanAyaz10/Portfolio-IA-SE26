import express from 'express';
import { submitContactMessage } from '../controllers/contactController.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

// POST /api/contact - Submit contact form with rate-limiting
router.post('/', contactLimiter, submitContactMessage);

export default router;
