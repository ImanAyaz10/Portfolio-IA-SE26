import React from 'react';
import { certifications } from '../data/portfolioData';
import { Award, ShieldCheck, Calendar, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 relative bg-canvas-dark/40 dark:bg-canvas-dark/40 light:bg-slate-50 border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>// 08. VERIFIED CREDENTIALS & HONORS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              Certifications & <span className="text-amber-500">Honors</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
              Professional credentials, high-performance recognitions, and specialized technical training across Frontend Engineering and Generative AI.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-400">
            TOTAL_ACCREDITATIONS: <span className="text-amber-500 font-bold">{certifications.length}</span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const isTopPerformer = cert.title.toLowerCase().includes('top performer');

            return (
              <div
                key={cert.id}
                className={`flex flex-col justify-between p-6 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-white border transition-all duration-300 hover:shadow-lg ${
                  isTopPerformer
                    ? 'border-amber-500/50 dark:border-amber-500/50 light:border-amber-400 shadow-amber-glow/10'
                    : 'border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 hover:border-amber-500/40'
                }`}
              >
                <div>
                  {/* Top Row: Issuer & Status Badge */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase font-semibold">
                      {cert.issuer}
                    </span>

                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                        isTopPerformer
                          ? 'bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20'
                      }`}
                    >
                      {isTopPerformer ? (
                        <>
                          <Sparkles className="w-3 h-3 text-amber-500" />
                          <span>Honor Award</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <span>{cert.status}</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 leading-snug mb-2">
                    {cert.title}
                  </h3>

                  {/* Issue Date */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>Issued {cert.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Credential Verification Link / Badge */}
                <div className="mt-6 pt-4 border-t border-canvas-cardBorder/60 dark:border-canvas-cardBorder/60 light:border-slate-100 flex items-center justify-between text-xs font-mono">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-amber-500 hover:text-amber-400 font-semibold transition-colors"
                      aria-label={`Verify ${cert.title} credential`}
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Verified Record</span>
                    </span>
                  )}

                  <span className="text-[10px] text-slate-500 font-mono">
                    ID: {cert.id}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audit Statement */}
        <div className="mt-8 p-4 rounded-xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>All certifications verified against academic and internship completion records.</span>
          </div>
          <span className="text-slate-500">ISSUER_VERIFIED::TRUE</span>
        </div>

      </div>
    </section>
  );
}
