import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Cpu, Layers, GitBranch, ShieldCheck } from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 flex items-start justify-between gap-4 bg-canvas-dark/40 dark:bg-canvas-dark/40 light:bg-slate-50">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-slate-200 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-400 dark:text-slate-400 light:text-slate-700 uppercase">
                {project.category}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-500 dark:text-emerald-400">
                <CheckCircle2 className="w-3 h-3" />
                <span>{project.status}</span>
              </span>
              {project.type && (
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 light:text-slate-400">
                  • {project.type}
                </span>
              )}
            </div>

            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 leading-tight">
              {project.title}
            </h2>
            <p className="mt-1 text-xs sm:text-sm font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-400 hover:text-slate-100 dark:hover:text-slate-100 light:hover:text-slate-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* Quick Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 font-mono text-xs">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition-colors"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-amber-500 transition-colors"
                title={`Inspect Source Code for ${project.title} on GitHub`}
              >
                <Github className="w-3.5 h-3.5 text-amber-500" />
                <span>View Source Code (GitHub)</span>
              </a>
            )}

            <div className="ml-auto text-[11px] text-slate-500 dark:text-slate-500 light:text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Verified Artifact</span>
            </div>
          </div>

          {/* Section: Problem & Objective */}
          <div>
            <h3 className="text-xs font-mono font-bold text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
              <span>01 // Problem & Context</span>
            </h3>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-sm bg-canvas-dark/40 dark:bg-canvas-dark/40 light:bg-slate-50 p-4 rounded-xl border border-canvas-cardBorder/40">
              {project.problem}
            </p>
          </div>

          {/* Section: Architecture & Solution */}
          <div>
            <h3 className="text-xs font-mono font-bold text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
              <span>02 // Solution & Architecture</span>
            </h3>
            <div className="bg-canvas-dark/40 dark:bg-canvas-dark/40 light:bg-slate-50 p-4 rounded-xl border border-canvas-cardBorder/40 space-y-3">
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-sm">
                {project.solution}
              </p>

              {project.architecture && (
                <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                  {Object.entries(project.architecture).map(([key, desc]) => (
                    <div key={key} className="p-3 rounded-lg bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder/60 dark:border-canvas-cardBorder/60 light:border-slate-200">
                      <span className="text-amber-500 font-bold uppercase tracking-wider block mb-1">
                        [{key}]
                      </span>
                      <span className="text-slate-400 dark:text-slate-400 light:text-slate-600 leading-snug">
                        {desc}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Section: Individual Contribution & Team Note */}
          <div>
            <h3 className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 tracking-wider uppercase mb-1.5">
              03 // My Implementation & Contributions
            </h3>
            <div className="bg-canvas-dark/40 dark:bg-canvas-dark/40 light:bg-slate-50 p-4 rounded-xl border border-canvas-cardBorder/40 space-y-2">
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-sm">
                {project.myContribution}
              </p>
              {project.teamNote && (
                <div className="text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-400 pt-1 border-t border-canvas-cardBorder/40">
                  <span className="text-amber-500 font-semibold">Attribution Note: </span>
                  {project.teamNote}
                </div>
              )}
            </div>
          </div>

          {/* Section: Engineering Decisions & Trade-Offs */}
          {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
            <div>
              <h3 className="text-xs font-mono font-bold text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-amber-500" />
                <span>04 // Verified Engineering Decisions & Trade-offs</span>
              </h3>
              <div className="space-y-3">
                {project.engineeringDecisions.map((dec, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 text-xs font-mono space-y-2"
                  >
                    <div className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 text-sm">
                      {dec.decision}
                    </div>
                    <div className="text-slate-400 dark:text-slate-400 light:text-slate-600">
                      <strong className="text-emerald-500 dark:text-emerald-400">Rationale: </strong>
                      {dec.rationale}
                    </div>
                    <div className="text-slate-400 dark:text-slate-400 light:text-slate-600">
                      <strong className="text-amber-500 dark:text-amber-400">Trade-off: </strong>
                      {dec.tradeoff}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Challenges & Lessons Learned */}
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400 light:text-slate-600 tracking-wider uppercase mb-1.5">
              05 // Challenges & Lessons Learned
            </h3>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed text-xs font-mono bg-canvas-dark/40 dark:bg-canvas-dark/40 light:bg-slate-50 p-4 rounded-xl border border-canvas-cardBorder/40">
              {project.challengesAndLessons}
            </p>
          </div>

          {/* Section: Verified Tech Stack */}
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400 light:text-slate-600 tracking-wider uppercase mb-2">
              06 // Verified Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-xs font-mono text-amber-500 dark:text-amber-400 light:text-amber-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 bg-canvas-dark/40 dark:bg-canvas-dark/40 light:bg-slate-50 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>PROJECT_ID: {project.id}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-canvas-card dark:bg-canvas-card light:bg-slate-200 border border-canvas-cardBorder text-slate-300 dark:text-slate-300 light:text-slate-800 hover:text-white transition-colors"
          >
            Close Log [ESC]
          </button>
        </div>

      </div>
    </div>
  );
}
