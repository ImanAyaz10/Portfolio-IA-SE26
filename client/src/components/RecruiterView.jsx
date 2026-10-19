import React, { useEffect } from 'react';
import { personalInfo, projects, experience } from '../data/portfolioData';
import { X, Briefcase, FileText, Mail, ExternalLink, CheckCircle2, ArrowRight, Copy, Check } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function RecruiterView({ isOpen, onClose, onSelectProjectById, onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const topProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="recruiter-view-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Recruiter Header */}
        <div className="p-6 border-b border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 bg-canvas-dark/60 dark:bg-canvas-dark/60 light:bg-slate-50 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono text-emerald-500 font-bold uppercase tracking-wider">
                90-Second Recruiter Summary
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-[10px] font-mono text-amber-500 font-semibold">
                Available Immediately
              </span>
            </div>

            <h2 id="recruiter-view-title" className="text-xl sm:text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 leading-tight">
              Iman Ayaz — Candidate Executive Summary
            </h2>
            <p className="mt-1 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">
              BS Software Engineering Graduate (LCWU, 2026) | Lahore, Pakistan | Remote & Onsite
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-400 hover:text-slate-100 dark:hover:text-slate-100 light:hover:text-slate-900 transition-colors"
            aria-label="Close Recruiter View"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          
          {/* Quick Pitch & Target Roles */}
          <div className="grid md:grid-cols-12 gap-4 items-stretch">
            
            <div className="md:col-span-8 p-4 rounded-xl bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1 font-bold">
                Elevator Pitch
              </span>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {personalInfo.introduction}
              </p>
            </div>

            <div className="md:col-span-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-wider block mb-1">
                  Target Roles
                </span>
                <ul className="space-y-1 text-xs font-mono text-slate-200 dark:text-slate-200 light:text-slate-800">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Frontend Developer (React)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Software QA / Testing (SQA)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Full-Stack Junior (MERN)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Associate Project Manager</span>
                  </li>
                </ul>
              </div>

              <div className="mt-3 pt-2 border-t border-amber-500/20 text-[10px] font-mono text-slate-400">
                Notice: Immediate joiner
              </div>
            </div>

          </div>

          {/* Top 3 Verified Signature Projects */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-amber-500 font-bold uppercase tracking-wider">
                Top Verified Technical Projects
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                With working demos & repositories
              </span>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {topProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-3.5 rounded-xl bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[9px] font-mono text-amber-500 uppercase block mb-0.5">
                      {p.category} • {p.status}
                    </span>
                    <h4 className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 leading-snug">
                      {p.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {p.problem}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-canvas-cardBorder/60 flex items-center justify-between text-xs font-mono">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProjectById(p.id);
                      }}
                      className="text-amber-500 hover:text-amber-400 font-semibold inline-flex items-center gap-1 text-[11px]"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>

                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-500 hover:text-emerald-400 inline-flex items-center gap-0.5 text-[10px]"
                      >
                        <span>Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Work History (3 Verified Roles) */}
          <div>
            <span className="text-[11px] font-mono text-amber-500 font-bold uppercase tracking-wider block mb-2">
              Verified Practical Experience
            </span>

            <div className="space-y-2">
              {experience.map((exp) => (
                <div
                  key={exp.id}
                  className="p-3 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono"
                >
                  <div>
                    <span className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                      {exp.role}
                    </span>
                    <span className="text-amber-500 font-semibold"> @ {exp.organization}</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {exp.description}
                    </p>
                  </div>

                  <div className="text-[11px] text-slate-500 sm:text-right shrink-0">
                    <div>{exp.period}</div>
                    <div className="text-emerald-500">{exp.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact & Action Buttons */}
          <div className="p-4 rounded-xl bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-500" />
              <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">
                {personalInfo.socials.email}
              </span>
              <button
                onClick={copyEmail}
                className="p-1 rounded bg-canvas-card hover:bg-canvas-cardBorder border border-canvas-cardBorder text-slate-400 hover:text-slate-200"
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenResume();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View & Download Resume</span>
              </button>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-canvas-card border border-canvas-cardBorder text-slate-200 hover:border-amber-500 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-amber-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-canvas-card border border-canvas-cardBorder text-slate-200 hover:border-amber-500 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 bg-canvas-dark/40 dark:bg-canvas-dark/40 light:bg-slate-50 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>STATUS: CANDIDATE_INTERVIEW_READY</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-canvas-card dark:bg-canvas-card light:bg-slate-200 border border-canvas-cardBorder text-slate-300 dark:text-slate-300 light:text-slate-800 hover:text-white transition-colors"
          >
            Close Summary [ESC]
          </button>
        </div>

      </div>
    </div>
  );
}
