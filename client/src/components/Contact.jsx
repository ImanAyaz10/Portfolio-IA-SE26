import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, AlertCircle, Copy, Check, MapPin, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    roleOrCompany: '',
    message: '',
    botField: '', // Hidden honeypot field for bot detection
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    messageId: null,
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null, messageId: null });

    // Client-side validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus({ loading: false, success: false, error: 'Please enter your name (at least 2 characters).' });
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setStatus({ loading: false, success: false, error: 'Please provide a valid email address.' });
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus({ loading: false, success: false, error: 'Please enter a message of at least 10 characters.' });
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus({
          loading: false,
          success: true,
          error: null,
          messageId: data.id || 'accepted',
        });
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          subject: '',
          roleOrCompany: '',
          message: '',
          botField: '',
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: data.error || 'Message dispatch failed. Please email Iman directly or use the quick mailto button below.',
          messageId: null,
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'Network connection error or endpoint unreachable. Please click below to send via your email client.',
        messageId: null,
      });
    }
  };

  const mailtoUrl = `mailto:${personalInfo.socials.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry from ' + (formData.name || 'Visitor')
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.roleOrCompany}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-24 relative bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider mb-2">
            <Mail className="w-3.5 h-3.5 text-amber-500" />
            <span>// 09. DIRECT COMMUNICATION DISPATCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Get in <span className="text-amber-500">Touch</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Whether you are discussing an entry-level software engineering role, SQA opportunity, or reviewing a project case study, feel free to drop a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 shadow-sm space-y-6">
              
              <div>
                <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 font-mono mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  I typically respond within 24 hours. Messages submitted here are routed directly to <strong className="text-amber-500 dark:text-amber-400 light:text-amber-700">imanayaz2003@gmail.com</strong>.
                </p>
              </div>

              {/* Email Address & Copy Box */}
              <div className="p-4 rounded-xl bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 flex items-center justify-between gap-3 text-xs font-mono">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="flex items-center gap-2.5 truncate text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-amber-500 font-medium transition-colors"
                  title="Open mail client"
                >
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <span className="truncate">{personalInfo.socials.email}</span>
                </a>

                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-md bg-canvas-card dark:bg-canvas-card light:bg-white hover:bg-canvas-cardBorder dark:hover:bg-canvas-cardBorder light:hover:bg-slate-200 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-400 dark:text-slate-400 light:text-slate-700 shrink-0 transition-colors"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Location & Status */}
              <div className="space-y-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400 dark:text-slate-400 light:text-slate-600">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Lahore, Pakistan (Open to Remote, Hybrid, & Relocation)</span>
                </div>

                <div className="flex items-center gap-2 text-emerald-500 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                  <span>Active candidate seeking 2026 entry-level opportunities</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-canvas-cardBorder/60 dark:border-canvas-cardBorder/60 light:border-slate-200 flex items-center gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-xs font-mono text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-amber-500/50 hover:text-amber-500 transition-colors font-semibold"
                  aria-label="Connect on LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-amber-500" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-xs font-mono text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-amber-500/50 hover:text-amber-500 transition-colors font-semibold"
                  aria-label="View GitHub Profile"
                >
                  <Github className="w-4 h-4 text-amber-500" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Direct Mail Client Quick Action */}
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-amber-500/10 dark:bg-amber-500/10 light:bg-amber-50 border border-amber-500/30 text-amber-500 dark:text-amber-400 light:text-amber-800 hover:bg-amber-500 hover:text-slate-950 font-mono text-xs font-bold transition-all text-center"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Default Email Client Directly</span>
              </a>

            </div>

          </div>

          {/* Right Column: Production Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 shadow-sm space-y-4"
            >
              {/* Spam Honeypot field (hidden from real users, traps bots) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="botField">Do not fill this field if you are human</label>
                <input
                  type="text"
                  id="botField"
                  name="botField"
                  value={formData.botField}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-800 mb-1.5 font-semibold">
                    Your Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-xs font-mono text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-800 mb-1.5 font-semibold">
                    Email Address <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-xs font-mono text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Subject & Company Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="roleOrCompany" className="block text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-800 mb-1.5 font-semibold">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="roleOrCompany"
                    name="roleOrCompany"
                    value={formData.roleOrCompany}
                    onChange={handleChange}
                    placeholder="e.g. TechCorp / Recruiter"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-xs font-mono text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-800 mb-1.5 font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Frontend Opportunity / Capstone Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-xs font-mono text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-slate-300 dark:text-slate-300 light:text-slate-800 font-semibold">
                    Message Content <span className="text-amber-500">*</span>
                  </label>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 light:text-slate-600">
                    {formData.message.length}/3000 chars
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  maxLength={3000}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about the role, technical question, or project inquiry..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-xs font-mono text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              {/* Status Banners */}
              {status.success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 text-xs font-mono flex items-center gap-2 animate-fade-in">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                  <span>Thank you! Your message was accepted by the email provider for delivery to Iman Ayaz.</span>
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 dark:text-amber-400 light:text-amber-800 text-xs font-mono space-y-2 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-amber-500" />
                    <span>{status.error}</span>
                  </div>
                  <div className="pt-1">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Click to Send via Default Email Client</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-bold text-xs transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:opacity-50"
              >
                {status.loading ? (
                  <span>DISPATCHING_MESSAGE...</span>
                ) : (
                  <>
                    <span>Dispatch Communication</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
