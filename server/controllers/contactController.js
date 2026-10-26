import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';
import { ContactMessage } from '../models/ContactMessage.js';
import { isDbConnected } from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '..', 'data');
const LOCAL_STORAGE_FILE = path.join(DATA_DIR, 'messages.json');

const RECIPIENT_EMAIL = 'imanayaz2003@gmail.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/[<>]/g, (char) => (char === '<' ? '&lt;' : '&gt;'))
    .trim();
}

/**
 * Handle new contact form submissions
 */
export async function submitContactMessage(req, res) {
  try {
    const { name, email, subject, message, roleOrCompany, botField } = req.body || {};

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
      roleOrCompany: sanitizeInput(roleOrCompany || 'Not Specified').slice(0, 120),
      ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
      createdAt: new Date().toISOString(),
    };

    // 4. Persistence backup (local JSON or MongoDB)
    let savedId = null;
    try {
      if (isDbConnected()) {
        const savedDoc = await ContactMessage.create(cleanData);
        savedId = savedDoc._id;
      } else {
        if (!fs.existsSync(DATA_DIR)) {
          fs.mkdirSync(DATA_DIR, { recursive: true });
        }
        let existing = [];
        if (fs.existsSync(LOCAL_STORAGE_FILE)) {
          try {
            existing = JSON.parse(fs.readFileSync(LOCAL_STORAGE_FILE, 'utf-8'));
          } catch {
            existing = [];
          }
        }
        savedId = 'msg_' + Date.now();
        existing.push({ id: savedId, ...cleanData });
        fs.writeFileSync(LOCAL_STORAGE_FILE, JSON.stringify(existing, null, 2), 'utf-8');
      }
    } catch (dbErr) {
      console.warn('[STORAGE] Non-fatal backup persistence warning:', dbErr.message);
    }

    // 5. Real Email Delivery via Resend
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn('[EMAIL] RESEND_API_KEY not configured. Message was saved to backup only.');
      return res.status(503).json({
        success: false,
        configured: false,
        error: 'Email delivery provider is awaiting API key configuration (RESEND_API_KEY). Message was saved to local backup. Please email directly to imanayaz2003@gmail.com.',
        backupId: savedId,
      });
    }

    const resend = new Resend(resendApiKey);
    const sender = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    const emailResult = await resend.emails.send({
      from: sender,
      to: [RECIPIENT_EMAIL],
      reply_to: cleanData.email,
      subject: `[Portfolio Inquiry] ${cleanData.subject} — from ${cleanData.name}`,
      text: `New Portfolio Contact Submission:
Name: ${cleanData.name}
Email: ${cleanData.email}
Company / Role: ${cleanData.roleOrCompany}
Subject: ${cleanData.subject}
Date: ${cleanData.createdAt}

Message:
${cleanData.message}
`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #e5a93c; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #0f172a;">New Portfolio Contact Message</h2>
            <span style="font-size: 12px; color: #64748b; font-family: monospace;">IMAN // BUILD LOG</span>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>From:</strong></td><td style="padding: 6px 0; color: #0f172a;">${cleanData.name}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td><td style="padding: 6px 0; color: #0f172a;"><a href="mailto:${cleanData.email}">${cleanData.email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Company / Role:</strong></td><td style="padding: 6px 0; color: #0f172a;">${cleanData.roleOrCompany}</td></tr>
            <tr><td style="padding: 6px 0; color: #64748b;"><strong>Subject:</strong></td><td style="padding: 6px 0; color: #0f172a;">${cleanData.subject}</td></tr>
          </table>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
            <h4 style="margin: 0 0 8px 0; font-size: 12px; color: #475569; text-transform: uppercase;">Message Content:</h4>
            <p style="margin: 0; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${cleanData.message}</p>
          </div>
          <div style="font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px; text-align: center;">
            Reply directly to this email to contact ${cleanData.name} (${cleanData.email}).
          </div>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error('[RESEND ERROR]', emailResult.error);
      return res.status(400).json({
        success: false,
        error: emailResult.error.message || 'Email provider rejected delivery.',
        backupId: savedId,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message was accepted by the email provider for delivery to Iman Ayaz.',
      id: emailResult.data?.id,
      provider: 'resend',
    });
  } catch (error) {
    console.error('[CONTACT CONTROLLER ERROR]', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing the contact message.',
    });
  }
}
