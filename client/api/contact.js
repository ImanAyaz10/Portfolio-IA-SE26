import { Resend } from 'resend';

function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/[<>]/g, (char) => (char === '<' ? '&lt;' : '&gt;'))
    .trim();
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECIPIENT_EMAIL = 'imanayaz2003@gmail.com';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: `Method ${req.method} not allowed. Please use POST.`,
    });
  }

  try {
    const { name, email, subject, message, roleOrCompany, botField } = req.body || {};

    if (botField && botField.trim().length > 0) {
      console.warn('[SECURITY] Bot submission caught by honeypot field.');
      return res.status(200).json({
        success: true,
        message: 'Your message has been received! (Filtered)',
      });
    }

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

    const cleanData = {
      name: sanitizeInput(name).slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 120),
      subject: sanitizeInput(subject || 'Portfolio Inquiry').slice(0, 150),
      roleOrCompany: sanitizeInput(roleOrCompany || 'Not Specified').slice(0, 120),
      message: sanitizeInput(message).slice(0, 3000),
      timestamp: new Date().toISOString(),
    };

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn('[CONTACT API] RESEND_API_KEY is not configured in environment variables.');
      return res.status(503).json({
        success: false,
        configured: false,
        error: 'Email delivery service is awaiting API key configuration (RESEND_API_KEY). Please send your message directly to imanayaz2003@gmail.com.',
      });
    }

    const resend = new Resend(apiKey);
    const sender = process.env.RESEND_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>';

    const emailResponse = await resend.emails.send({
      from: sender,
      to: [RECIPIENT_EMAIL],
      reply_to: cleanData.email,
      subject: `[Portfolio Inquiry] ${cleanData.subject} — from ${cleanData.name}`,
      text: `New Portfolio Contact Submission:
Name: ${cleanData.name}
Email: ${cleanData.email}
Role/Company: ${cleanData.roleOrCompany}
Subject: ${cleanData.subject}
Date: ${cleanData.timestamp}

Message:
${cleanData.message}
`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #e5a93c; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #0f172a; font-size: 20px;">New Portfolio Contact Message</h2>
            <span style="font-size: 12px; color: #64748b; font-family: monospace;">IMAN // BUILD LOG</span>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 120px;"><strong>From:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${cleanData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${cleanData.email}" style="color: #d97706;">${cleanData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Company / Role:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${cleanData.roleOrCompany}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Subject:</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${cleanData.subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Date:</strong></td>
              <td style="padding: 8px 0; color: #64748b; font-size: 12px;">${cleanData.timestamp}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <h3 style="margin-top: 0; margin-bottom: 8px; font-size: 13px; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Message Content:</h3>
            <p style="margin: 0; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${cleanData.message}</p>
          </div>

          <div style="font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px; text-align: center;">
            You can directly click "Reply" in your email client to respond to <strong>${cleanData.name}</strong> (${cleanData.email}).
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error('[RESEND ERROR]', emailResponse.error);
      return res.status(400).json({
        success: false,
        error: emailResponse.error.message || 'Email delivery failed at provider level.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message was accepted by the email provider for delivery to Iman Ayaz.',
      id: emailResponse.data?.id,
      provider: 'resend',
    });
  } catch (error) {
    console.error('[SERVER ERROR]', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected internal error occurred while processing your message.',
    });
  }
}
