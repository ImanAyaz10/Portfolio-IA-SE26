// Vercel Serverless Function — wraps the Express backend
// This file allows the entire Express app to run as a single serverless function on Vercel.
import app from '../server/server.js';

export default app;
