import mongoose from 'mongoose';

let isConnected = false;

/**
 * Connect to MongoDB Atlas with robust fallback
 * If MONGODB_URI is absent or unreachable, the server falls back
 * to local file-based storage so local testing is never blocked.
 */
export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri || uri.trim() === '') {
    console.log('[DB] No MONGODB_URI found in environment. Running in resilient local fallback storage mode.');
    isConnected = false;
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`[DB] MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (err) {
    console.warn(`[DB] MongoDB Connection failed (${err.message}). Falling back to local storage.`);
    isConnected = false;
    return false;
  }
}

export function isDbConnected() {
  return isConnected;
}
