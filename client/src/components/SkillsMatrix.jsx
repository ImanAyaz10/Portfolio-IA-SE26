import React, { useState } from 'react';
import { skillsData, projects } from '../data/portfolioData';
import { Layers, CheckCircle2, Sparkles, ExternalLink, ArrowRight, Code } from 'lucide-react';

export default function SkillsMatrix({ onSelectProjectById }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Find projects that use the selected skill
  const linkedProjects = selectedSkill
    ? projects.filter((p) => p.techStack.some((t) => t.toLowerCase().includes(selectedSkill.name.toLowerCase())))
    : [];

  return (
    <section id="skills" className="py-24 relative bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider mb-2">
            <span>// 04. EVIDENCE-LINKED COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Technical <span className="text-amber-500">Skills Matrix</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            No arbitrary percentage bars. Skills are organized by domain and directly linked to verified codebase implementations. Click any technology to inspect where it was used.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 font-mono">
                    {category.category}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 light:text-slate-400">
                    {category.skills.length} TECHNOLOGIES
                  </span>
                </div>

                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    const hasProjects = skill.projects.length > 0;

                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(isSelected ? null : skill)}
                        className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all text-left flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-sm'
                            : 'bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-amber-500/50'
                        }`}
                        title={hasProjects ? `Click to inspect verified projects using ${skill.name}` : skill.name}
                      >
                        <span>{skill.name}</span>
                        {hasProjects && (
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isSelected ? 'bg-slate-950' : 'bg-emerald-500'
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Legend note */}
              <div className="mt-4 pt-3 border-t border-canvas-cardBorder/50 dark:border-canvas-cardBorder/50 light:border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Verified in public repo
                </span>
                <span>Click pill to inspect</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Evidence Drawer / Inspector */}
        {selectedSkill && (
          <div className="p-6 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-amber-50/50 border-2 border-amber-500/40 shadow-lg animate-fade-in space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-amber-500" />
                <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 font-mono">
                  Evidence for: <span className="text-amber-500">{selectedSkill.name}</span>
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  (Proficiency Status: {selectedSkill.level})
                </span>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="text-xs font-mono text-slate-400 hover:text-slate-100 dark:hover:text-slate-100 light:hover:text-slate-900"
              >
                CLOSE [×]
              </button>
            </div>

            {linkedProjects.length > 0 ? (
              <div className="space-y-3">
                <p className="text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Directly applied and verified in {linkedProjects.length} projects:
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {linkedProjects.map((p) => (
                    <div
                      key={p.id}
                      className="p-3.5 rounded-xl bg-canvas-dark dark:bg-canvas-dark light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-[10px] font-mono text-amber-500 uppercase mb-1">
                          {p.category}
                        </div>
                        <h4 className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 leading-snug">
                          {p.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                          {p.tagline}
                        </p>
                      </div>

                      <button
                        onClick={() => onSelectProjectById(p.id)}
                        className="mt-3 inline-flex items-center gap-1 text-[11px] font-mono text-amber-500 hover:text-amber-400 font-semibold"
                      >
                        <span>View Project Case Study</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-xs font-mono text-slate-400">
                Practiced through academic coursework at LCWU and foundational software engineering lab assignments.
              </p>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
