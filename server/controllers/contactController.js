import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ContactMessage } from '../models/ContactMessage.js';
import { isDbConnected } from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', 'data');
const LOCAL_STORAGE_FILE = path.join(DATA_DIR, 'messages.json');

// Simple sanitizer to remove script tags and dangerously nested HTML
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/[<>]/g, (char) => (char === '<' ? '&lt;' : '&gt;'))
    .trim();
}

// Basic email regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Handle new contact form submissions
 */
export async function submitContactMessage(req, res) {
  try {
    const { name, email, subject, message, roleOrCompany, botField } = req.body;

    // 1. Honeypot check: If hidden field is populated, silently drop spam
    if (botField && botField.trim().length > 0) {
      console.warn('[SECURITY] Bot submission caught by honeypot field.');
      return res.status(200).json({
        success: true,
        message: 'Your message has been received! (Filtered)',
      });
    }

    // 2. Field validation
    if (!name || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid name (at least 2 characters).',
      });
    }

    if (!email || !EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    if (!message || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a message of at least 10 characters.',
      });
    }

    // 3. Sanitize inputs
    const cleanData = {
      name: sanitizeInput(name).slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 120),
      subject: sanitizeInput(subject || 'General Inquiry').slice(0, 150),
      message: sanitizeInput(message).slice(0, 3000),
      roleOrCompany: sanitizeInput(roleOrCompany || '').slice(0, 120),
      ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
      createdAt: new Date().toISOString(),
    };

    // 4. Dual-mode persistence
    if (isDbConnected()) {
      const savedDoc = await ContactMessage.create(cleanData);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message was saved securely to MongoDB Atlas.',
        id: savedDoc._id,
        mode: 'mongodb',
      });
    } else {
      // Local file fallback
      if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
      }

      let existing = [];
      if (fs.existsSync(LOCAL_STORAGE_FILE)) {
        try {
          const raw = fs.readFileSync(LOCAL_STORAGE_FILE, 'utf-8');
          existing = JSON.parse(raw);
        } catch {
          existing = [];
        }
      }

      const entry = {
        id: 'msg_' + Date.now(),
        ...cleanData,
      };

      existing.push(entry);
      fs.writeFileSync(LOCAL_STORAGE_FILE, JSON.stringify(existing, null, 2), 'utf-8');

      return res.status(201).json({
        success: true,
        message: 'Thank you! Your message was stored safely in the local system log.',
        id: entry.id,
        mode: 'local_file',
      });
    }
  } catch (err) {
    console.error('[ERROR] submitContactMessage failed:', err);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your message. Please try again later or reach out via LinkedIn.',
    });
  }
}
