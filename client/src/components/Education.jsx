import React from 'react';
import { education } from '../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-canvas-dark dark:bg-canvas-dark light:bg-white border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
            <span>// 07. ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Academic <span className="text-amber-500">Education</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Four-year software engineering degree from Lahore College for Women University (LCWU) establishing core computer science principles, software architecture, and quality assurance discipline.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Degree Card (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
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

                <span className="text-xs font-mono px-3 py-1 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 w-fit">
                  {education.period}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mb-4">
                <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                  {education.institution}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>{education.location}</span>
                </span>
                <span>•</span>
                <span className="text-emerald-500 font-bold">{education.status}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-6">
                {education.overview}
              </p>

              {/* Coursework Grid */}
              <div className="space-y-3 mb-6">
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 font-bold uppercase tracking-wider block">
                  Core Computer Science & Software Engineering Coursework:
                </span>
                <div className="grid sm:grid-cols-2 gap-2 text-xs font-mono">
                  {education.keyCourses.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-white border border-canvas-cardBorder/50 dark:border-canvas-cardBorder/50 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-800 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capstone Box */}
              <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-bold text-amber-500 dark:text-amber-400">
                    FINAL YEAR CAPSTONE (FYP): {education.capstone.title}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-500 font-bold">
                    {education.capstone.role}
                  </span>
                </div>
                <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                  {education.capstone.scope}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Academic Highlights & Link to Certifications (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="p-6 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-mono font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-500" />
                <span>Curricular Focus</span>
              </h3>
              
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                Emphasis on Object-Oriented Analysis, Software Quality Assurance, Data Structures, Modern Web Architecture, and Applied Machine Learning.
              </p>

              <div className="p-3.5 rounded-xl bg-canvas-dark dark:bg-canvas-dark light:bg-white border border-canvas-cardBorder/60 dark:border-canvas-cardBorder/60 light:border-slate-200 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 space-y-1.5">
                <div className="text-amber-500 font-bold">LCWU SE 2022–2026</div>
                <div>Department of Computer Science & Software Engineering</div>
                <div className="text-[11px] text-emerald-500">Graduating Cohort 2026</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 shadow-sm space-y-3">
              <h3 className="text-sm font-mono font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Technical Honors</span>
              </h3>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                Recognized with the Pak Angels Top Performer Award in Generative AI development and multiple verified frontend certifications.
              </p>
              <a
                href="#certifications"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-500 hover:text-amber-400 font-bold"
              >
                <span>View All Certifications</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
