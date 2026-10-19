import React, { useEffect } from 'react';
import { personalInfo, education, experience, skillsData } from '../data/portfolioData';
import { X, Download, FileText, CheckCircle2, GraduationCap, Briefcase, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 bg-canvas-dark/60 dark:bg-canvas-dark/60 light:bg-slate-50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-500" />
            <h2 id="resume-title" className="text-lg sm:text-xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 font-mono">
              Curriculum Vitae // {personalInfo.name}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resume.filePath}
              download={personalInfo.resume.fileName}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-mono text-xs font-bold hover:bg-amber-400 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border border-canvas-cardBorder text-slate-400 hover:text-slate-100"
              aria-label="Close Resume Preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Sheet Preview */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 font-sans">
          
          {/* Header Card */}
          <div className="p-6 rounded-xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-canvas-cardBorder/60 pb-4">
              <div>
                <h1 className="text-2xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {personalInfo.name}
                </h1>
                <p className="text-xs font-mono text-amber-500 font-semibold mt-0.5">
                  {personalInfo.headline}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 sm:text-right space-y-1">
                <div>{personalInfo.location}</div>
                <div>{personalInfo.socials.email}</div>
              </div>
            </div>

            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {personalInfo.introduction}
            </p>
          </div>

          {/* Education */}
          <div className="p-6 rounded-xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 space-y-3">
            <h3 className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h3>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
              <div>
                <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 block">
                  {education.degree}
                </span>
                <span className="text-slate-400">{education.institution} — {education.location}</span>
              </div>
              <span className="text-amber-500">{education.period}</span>
            </div>

            <div className="text-xs text-slate-400 pt-1">
              <strong>Capstone (FYP):</strong> {education.capstone.title} ({education.capstone.scope})
            </div>
          </div>

          {/* Practical Work History */}
          <div className="p-6 rounded-xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 space-y-4">
            <h3 className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Internship & Practical Experience</span>
            </h3>

            <div className="space-y-4 divide-y divide-canvas-cardBorder/60">
              {experience.map((exp, idx) => (
                <div key={exp.id} className={idx > 0 ? 'pt-4' : ''}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono mb-1">
                    <div>
                      <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                        {exp.role}
                      </span>
                      <span className="text-amber-500 font-semibold"> — {exp.organization}</span>
                    </div>
                    <span className="text-slate-400">{exp.period}</span>
                  </div>

                  <ul className="space-y-1 mt-2 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="text-amber-500">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="p-6 rounded-xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 space-y-3">
            <h3 className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider">
              Technical Proficiencies
            </h3>

            <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
              {skillsData.map((cat) => (
                <div key={cat.category}>
                  <span className="text-slate-400 font-semibold block mb-1">
                    {cat.category}:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="px-2 py-0.5 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px]"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Replace Resume Note */}
          <div className="p-3 rounded-lg bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder text-[10px] font-mono text-slate-500 text-center">
            To replace the downloadable PDF, simply drop your updated resume at <code className="text-amber-500">client/public/assets/Iman_Ayaz_Resume.pdf</code>
          </div>

        </div>

      </div>
    </div>
  );
}
