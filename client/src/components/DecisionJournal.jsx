import React, { useState } from 'react';
import { decisionJournal } from '../data/portfolioData';
import { Cpu, GitCommit, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function DecisionJournal() {
  const [activeTab, setActiveTab] = useState(0);

  const activeEntry = decisionJournal[activeTab] || decisionJournal[0];

  return (
    <section id="decisions" className="py-24 relative bg-canvas-dark/60 dark:bg-canvas-dark/60 light:bg-white border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider mb-2">
            <span>// 03. ARCHITECTURAL THINKING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Engineering <span className="text-amber-500">Decision Journal</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
            Software engineering is a discipline of trade-offs. Here is how I analyze real engineering constraints, evaluate alternatives, and decide what to build.
          </p>
        </div>

        {/* Tab Selector & Detailed Log View */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Decision Tabs (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {decisionJournal.map((entry, index) => (
              <button
                key={entry.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all text-xs font-mono ${
                  activeTab === index
                    ? 'bg-canvas-card dark:bg-canvas-card light:bg-amber-50/70 border-amber-500 text-slate-100 dark:text-slate-100 light:text-slate-900 shadow-sm'
                    : 'bg-canvas-card/50 dark:bg-canvas-card/50 light:bg-white border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-amber-500 dark:text-amber-400 light:text-amber-700 mb-1">
                  <span>LOG #{index + 1} • {entry.project}</span>
                  <span>{entry.date}</span>
                </div>
                <div className="text-sm font-bold leading-snug">
                  {entry.title}
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Deep Architectural Breakdown (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 shadow-md space-y-6">
              
              {/* Header */}
              <div className="border-b border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>PROJECT: {activeEntry.project}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {activeEntry.title}
                </h3>
              </div>

              {/* Context */}
              <div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-500 light:text-slate-400 uppercase tracking-wider block mb-1">
                  Operational Context
                </span>
                <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed bg-canvas-dark dark:bg-canvas-dark light:bg-white p-3.5 rounded-lg border border-canvas-cardBorder/60 dark:border-canvas-cardBorder/60 light:border-slate-200">
                  {activeEntry.context}
                </p>
              </div>

              {/* Selected Decision & Rationale */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-canvas-dark dark:bg-canvas-dark light:bg-white border border-canvas-cardBorder/60 dark:border-canvas-cardBorder/60 light:border-slate-200 space-y-1.5">
                  <div className="text-xs font-mono font-bold text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Selected Architecture</span>
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    {activeEntry.decision}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-canvas-dark dark:bg-canvas-dark light:bg-white border border-canvas-cardBorder/60 dark:border-canvas-cardBorder/60 light:border-slate-200 space-y-1.5">
                  <div className="text-xs font-mono font-bold text-amber-500 dark:text-amber-400 flex items-center gap-1">
                    <GitCommit className="w-3.5 h-3.5" />
                    <span>Technical Rationale</span>
                  </div>
                  <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    {activeEntry.why}
                  </p>
                </div>
              </div>

              {/* Trade-off & Outcome */}
              <div className="p-4 rounded-xl bg-amber-500/5 dark:bg-amber-500/5 light:bg-amber-50 border border-amber-500/20 space-y-3 text-xs font-mono">
                <div>
                  <span className="font-bold text-amber-500 dark:text-amber-400 light:text-amber-800">
                    Calculated Trade-Off:
                  </span>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 mt-0.5">
                    {activeEntry.tradeoff}
                  </p>
                </div>

                <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between">
                  <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">
                    <strong className="text-emerald-500 dark:text-emerald-400">Production Outcome:</strong> {activeEntry.outcome}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
