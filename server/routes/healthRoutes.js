import express from 'express';
import { isDbConnected } from '../config/db.js';

const router = express.Router();
const startTime = Date.now();

// GET /api/health - Health check and system status
router.get('/', (req, res) => {
  const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);
  
  res.status(200).json({
    status: 'online',
    system: 'IMAN // BUILD LOG API',
    uptimeSeconds,
    database: {
      connected: isDbConnected(),
      mode: isDbConnected() ? 'mongodb_atlas' : 'resilient_local_storage',
    },
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
});

export default router;
