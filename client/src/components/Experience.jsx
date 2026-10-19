import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Experience({ onSelectProjectById }) {
  return (
    <section id="experience" className="py-24 relative bg-canvas-dark/60 dark:bg-canvas-dark/60 light:bg-slate-50 border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider mb-2">
            <span>// 06. PRACTICAL TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Work & <span className="text-amber-500">Internship Experience</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Verified internship roles reconciled from professional records. Demonstrates practical teamwork, real-world bug fixing, and continuous development across frontend and AI engineering.
          </p>
        </div>

        {/* Timeline Container with Vertical Accent Track */}
        <div className="relative border-l-2 border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 ml-4 md:ml-6 space-y-12">
          {experience.map((item, index) => (
            <div key={item.id} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-canvas-dark dark:bg-canvas-dark light:bg-white border-2 border-amber-500 shadow-amber-glow group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 shadow-sm transition-all group-hover:border-amber-500/40">
                
                {/* Header: Role & Organization */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 leading-tight">
                      {item.role}
                    </h3>
                    <span className="text-sm font-mono text-amber-500 dark:text-amber-400 font-semibold">
                      {item.organization}
                    </span>
                  </div>

                  {/* Period & Duration Pill */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{item.period}</span>
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Specific Key Deliverables */}
                <div className="space-y-2 mb-5">
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                    Key Practical Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Skills Used & Linked Project */}
                <div className="pt-4 border-t border-canvas-cardBorder/60 dark:border-canvas-cardBorder/60 light:border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.skillsUsed.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Linked Project Button if available */}
                  {item.linkedProject && (
                    <button
                      onClick={() => onSelectProjectById(item.linkedProject)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-500 hover:text-amber-400 font-semibold"
                    >
                      <span>Inspect Deliverable Project</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
