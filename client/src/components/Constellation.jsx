import React, { useState } from 'react';
import { constellationNodes } from '../data/portfolioData';
import { Compass, List, Network, ArrowUpRight, GraduationCap, Briefcase, Award, FolderGit2, Code } from 'lucide-react';

export default function Constellation() {
  const [viewMode, setViewMode] = useState('graph'); // 'graph' or 'list'
  const [activeNode, setActiveNode] = useState(null);

  const getNodeColor = (type) => {
    switch (type) {
      case 'education': return '#38bdf8'; // sky blue
      case 'project': return '#f59e0b'; // amber
      case 'skill': return '#10b981'; // emerald
      case 'experience': return '#a855f7'; // purple
      case 'certificate': return '#f43f5e'; // rose
      default: return '#e2e8f0';
    }
  };

  const getNodeIcon = (type) => {
    switch (type) {
      case 'education': return <GraduationCap className="w-4 h-4" />;
      case 'project': return <FolderGit2 className="w-4 h-4" />;
      case 'skill': return <Code className="w-4 h-4" />;
      case 'experience': return <Briefcase className="w-4 h-4" />;
      case 'certificate': return <Award className="w-4 h-4" />;
      default: return <Compass className="w-4 h-4" />;
    }
  };

  return (
    <section id="constellation" className="py-24 relative bg-canvas-dark dark:bg-canvas-dark light:bg-white border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider mb-2">
              <span>// 05. INTERCONNECTED JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              Career <span className="text-amber-500">Constellation</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
              An interactive topological map mapping my university foundation, internships, core skills, and verified projects.
            </p>
          </div>

          {/* Accessible View Mode Toggle */}
          <div className="flex items-center gap-2 p-1 rounded-lg bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300">
            <button
              onClick={() => setViewMode('graph')}
              className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md transition-colors ${
                viewMode === 'graph'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-label="View as interactive graph"
            >
              <Network className="w-3.5 h-3.5" />
              <span>Map View</span>
            </button>

            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-label="View as accessible list"
            >
              <List className="w-3.5 h-3.5" />
              <span>Accessible List</span>
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-6 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]"></span> Education
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span> Projects
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span> Skills
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7]"></span> Internships
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f43f5e]"></span> Credentials
          </span>
        </div>

        {viewMode === 'graph' ? (
          /* Graph View: SVG Canvas */
          <div className="relative w-full h-[460px] rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 overflow-hidden shadow-inner flex items-center justify-center p-4">
            
            {/* SVG Lines connecting nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e5a93c" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Connecting web lines */}
              {constellationNodes.map((node, i) => {
                const nextNode = constellationNodes[(i + 1) % constellationNodes.length];
                const crossNode = constellationNodes[(i + 3) % constellationNodes.length];
                return (
                  <g key={`lines-${node.id}`}>
                    <line
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${nextNode.x}%`}
                      y2={`${nextNode.y}%`}
                      stroke="rgba(229, 169, 60, 0.18)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1={`${node.x}%`}
                      y1={`${node.y}%`}
                      x2={`${crossNode.x}%`}
                      y2={`${crossNode.y}%`}
                      stroke="rgba(100, 116, 139, 0.15)"
                      strokeWidth="1"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Interactive Nodes */}
            {constellationNodes.map((node) => {
              const isHovered = activeNode?.id === node.id;
              const color = getNodeColor(node.type);

              return (
                <div
                  key={node.id}
                  style={{
                    position: 'absolute',
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="z-10"
                >
                  <a
                    href={`#${node.targetSection}`}
                    onMouseEnter={() => setActiveNode(node)}
                    onMouseLeave={() => setActiveNode(null)}
                    onFocus={() => setActiveNode(node)}
                    onBlur={() => setActiveNode(null)}
                    className="group flex flex-col items-center focus:outline-none"
                    aria-label={`${node.label} (${node.type}) - Jump to ${node.targetSection}`}
                  >
                    {/* Circle Node */}
                    <div
                      style={{
                        borderColor: color,
                        boxShadow: isHovered ? `0 0 15px ${color}` : 'none',
                      }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-canvas-dark dark:bg-canvas-dark light:bg-white border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm"
                    >
                      <div style={{ color }}>{getNodeIcon(node.type)}</div>
                    </div>

                    {/* Label Badge */}
                    <div className="mt-2 px-2.5 py-1 rounded-md bg-canvas-dark/95 dark:bg-canvas-dark/95 light:bg-white/95 backdrop-blur-md border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-[11px] font-mono font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 whitespace-nowrap shadow-md group-hover:border-amber-500 transition-colors flex items-center gap-1">
                      <span>{node.label}</span>
                      <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-amber-500" />
                    </div>
                  </a>
                </div>
              );
            })}

            {/* Hint Box at bottom */}
            <div className="absolute bottom-3 left-4 text-[10px] font-mono text-slate-500">
              Interactive Map: Select any node to jump directly to verified section
            </div>
          </div>
        ) : (
          /* Accessible List View */
          <div className="p-6 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 space-y-4">
            <h3 className="text-sm font-mono font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
              Career Nodes & Educational Timeline (List Representation)
            </h3>
            <ul className="divide-y divide-canvas-cardBorder dark:divide-canvas-cardBorder light:divide-slate-200 text-xs font-mono">
              {constellationNodes.map((node) => (
                <li key={node.id} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      style={{ backgroundColor: getNodeColor(node.type) }}
                      className="w-3 h-3 rounded-full"
                    />
                    <div>
                      <span className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900 block">
                        {node.label}
                      </span>
                      <span className="text-slate-500 capitalize">Category: {node.type}</span>
                    </div>
                  </div>

                  <a
                    href={`#${node.targetSection}`}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 text-amber-500 hover:text-amber-400 border border-canvas-cardBorder"
                  >
                    <span>Inspect Section</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </section>
  );
}
