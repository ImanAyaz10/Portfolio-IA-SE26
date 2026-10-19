import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import { apiLimiter } from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middleware
app.use(helmet());

// Cross-Origin Resource Sharing
const allowedOrigins = (process.env.CLIENT_URL || 'http://localhost:5173,http://localhost:3000')
  .split(',')
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
        return callback(null, true);
      }
      return callback(new Error(`CORS policy blocked access from origin: ${origin}`), false);
    },
    credentials: true,
  })
);

// Body parser
app.use(express.json({ limit: '50kb' }));

// Apply general rate limiting to all API routes
app.use('/api', apiLimiter);

// API Routes
app.use('/api/health', healthRoutes);
app.use('/api/contact', contactRoutes);

// Root informative endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'IMAN // BUILD LOG API',
    version: '1.0.0',
    status: 'active',
    documentation: '/api/health',
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Cannot ${req.method} ${req.originalUrl}. Route not found.`,
  });
});

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error('[UNHANDLED ERROR]', err.message);
  res.status(err.status || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' 
      ? 'An internal server error occurred.' 
      : err.message,
  });
});

// Initialize database and start listening
async function startServer() {
  await connectDB();
  
  app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`⚡ IMAN // BUILD LOG Server listening on port ${PORT}`);
    console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
    console.log(`🛡️ Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`====================================================`);
  });
}

startServer();

export default app;
