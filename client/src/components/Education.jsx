import React from 'react';
import { education, certifications } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-canvas-dark dark:bg-canvas-dark light:bg-white border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider mb-2">
            <span>// 07. FOUNDATION & ACCREDITATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Academic <span className="text-amber-500">Education & Certifications</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Formal Software Engineering degree from Lahore College for Women University (LCWU) supplemented with verified technical certifications and high-performance training awards.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Formal Education & Capstone (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Degree Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-amber-500 dark:text-amber-400 font-bold uppercase tracking-wider block">
                      Bachelor of Science
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {education.degree}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono px-2.5 py-1 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {education.period}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
                <span className="font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {education.institution}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-500" />
                  <span>{education.location}</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                {education.overview}
              </p>

              {/* Coursework Grid */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                  Core Computer Science & Software Engineering Coursework:
                </span>
                <div className="grid sm:grid-cols-2 gap-2 text-xs font-mono">
                  {education.keyCourses.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-white border border-canvas-cardBorder/50 dark:border-canvas-cardBorder/50 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capstone Box */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-amber-500 dark:text-amber-400">
                    FINAL YEAR CAPSTONE (FYP): {education.capstone.title}
                  </span>
                  <span className="text-[10px] text-slate-400">LEAD ROLE</span>
                </div>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {education.capstone.scope}
                </p>
              </div>

            </div>

          </div>

          {/* Right Column: Verified Certifications (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 font-mono flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Verified Credentials</span>
              </h3>
              <span className="text-[10px] font-mono text-slate-500">
                {certifications.length} ENTRIES
              </span>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl bg-canvas-card dark:bg-canvas-card light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 shadow-sm transition-all hover:border-amber-500/40"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-xs font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 leading-snug">
                      {cert.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 dark:text-amber-400 border border-amber-500/20 shrink-0">
                      {cert.status}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-slate-400 mb-2">
                    <span className="text-amber-500">{cert.issuer}</span> • <span>{cert.date}</span>
                  </div>

                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 text-[11px] font-mono text-slate-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>All certificate details cross-checked against public verified achievements.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
