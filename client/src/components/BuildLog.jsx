import React, { useState, useMemo } from 'react';
import { projects, categories } from '../data/portfolioData';
import { Search, Filter, ExternalLink, ArrowUpRight, CheckCircle2, Clock, Code2, Sparkles, BookOpen } from 'lucide-react';
import { Github } from './BrandIcons';

export default function BuildLog({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all'); // all, demo, repo

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (selectedCategory !== 'all' && project.category !== selectedCategory) {
        return false;
      }
      // Status filter
      if (statusFilter === 'demo' && !project.demo) {
        return false;
      }
      if (statusFilter === 'repo' && !project.github) {
        return false;
      }
      // Search query (title, tagline, tech stack, problem)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesTagline = project.tagline.toLowerCase().includes(query);
        const matchesTech = project.techStack.some((t) => t.toLowerCase().includes(query));
        const matchesProblem = project.problem.toLowerCase().includes(query);
        return matchesTitle || matchesTagline || matchesTech || matchesProblem;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, statusFilter]);

  return (
    <section id="projects" className="py-24 relative bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-500 dark:text-amber-400 light:text-amber-700 tracking-wider mb-2">
              <span>// 02. SIGNATURE EXPERIENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              Engineering <span className="text-amber-500">Build Log</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl">
              Projects structured as technical case studies. Explore problems solved, architectural decisions, verified repositories, and live systems.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-400">
            TOTAL_ENTRIES: <span className="text-amber-500 font-bold">{projects.length}</span> | MATCHING: <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-bold">{filteredProjects.length}</span>
          </div>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="p-4 rounded-xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 mb-8 space-y-4 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by technology (e.g. React, Groq, YOLO, scikit-learn) or project name..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-xs font-mono text-slate-200 dark:text-slate-200 light:text-slate-800 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 hover:text-slate-300"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Quick Status Toggles */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-500 light:text-slate-400 hidden sm:inline">Status:</span>
              <button
                onClick={() => setStatusFilter('all')}
                className={`text-xs font-mono px-2.5 py-1.5 rounded-md transition-colors ${
                  statusFilter === 'all'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 text-slate-400 hover:text-slate-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setStatusFilter('demo')}
                className={`text-xs font-mono px-2.5 py-1.5 rounded-md transition-colors ${
                  statusFilter === 'demo'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 text-slate-400 hover:text-slate-200'
                }`}
              >
                Live Demo Available
              </button>
              <button
                onClick={() => setStatusFilter('repo')}
                className={`text-xs font-mono px-2.5 py-1.5 rounded-md transition-colors ${
                  statusFilter === 'repo'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 text-slate-400 hover:text-slate-200'
                }`}
              >
                Verified Repo
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-canvas-cardBorder/60 dark:border-canvas-cardBorder/60 light:border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-mono px-3 py-1.5 rounded-md transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500/15 dark:bg-amber-500/15 light:bg-amber-100 text-amber-500 dark:text-amber-400 light:text-amber-800 border border-amber-500/40 font-semibold'
                    : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-200 dark:hover:text-slate-200 light:hover:text-slate-900 bg-canvas-dark/50 dark:bg-canvas-dark/50 light:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Case Studies Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 space-y-3">
            <Code2 className="w-8 h-8 text-slate-500 mx-auto" />
            <h3 className="text-base font-mono text-slate-300 dark:text-slate-300 light:text-slate-700">No matching projects found</h3>
            <p className="text-xs text-slate-500">Try adjusting your search query or switching categories.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setStatusFilter('all');
              }}
              className="mt-2 text-xs font-mono text-amber-500 underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className={`group flex flex-col justify-between rounded-xl bg-canvas-card dark:bg-canvas-card light:bg-white border transition-all duration-300 hover:shadow-lg ${
                  project.featured
                    ? 'border-amber-500/40 dark:border-amber-500/40 light:border-amber-300/80 shadow-amber-glow/5'
                    : 'border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 hover:border-slate-700'
                }`}
              >
                {/* Card Top: Metadata & Badges */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 text-slate-400 dark:text-slate-400 light:text-slate-600 uppercase">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {project.statusBadge === 'completed' && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-500 dark:text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{project.status}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-amber-500 dark:group-hover:text-amber-400 light:group-hover:text-amber-600 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-2 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Problem -> Solution Pattern Summary */}
                  <div className="mt-4 p-3 rounded-lg bg-canvas-dark/70 dark:bg-canvas-dark/70 light:bg-slate-50 border border-canvas-cardBorder/50 dark:border-canvas-cardBorder/50 light:border-slate-200 space-y-2 text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-amber-500 dark:text-amber-400 light:text-amber-600 font-bold tracking-wider uppercase block">
                        Problem
                      </span>
                      <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] leading-relaxed line-clamp-2">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-emerald-500 dark:text-emerald-400 font-bold tracking-wider uppercase block">
                        Solution & Contribution
                      </span>
                      <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] leading-relaxed line-clamp-2">
                        {project.myContribution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 text-slate-500">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer: Action Links */}
                <div className="px-6 py-4 border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-canvas-dark/30 dark:bg-canvas-dark/30 light:bg-slate-50/50 rounded-b-xl text-xs font-mono">
                  {/* Case Study Deep Dive Modal Trigger */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-amber-500 hover:text-amber-400 font-semibold transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-500"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Case Study Log</span>
                  </button>

                  {/* External links */}
                  <div className="flex items-center gap-3">
                    {/* View Source Code Link to verified GitHub repository */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-amber-500 transition-colors"
                        title={`View Source Code for ${project.title} on GitHub`}
                        aria-label={`View Source Code for ${project.title} on GitHub`}
                      >
                        <Github className="w-3.5 h-3.5 text-amber-500" />
                        <span>View Source Code</span>
                      </a>
                    )}

                    {/* Live Demo Link only when verified deployment exists */}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 font-semibold"
                        title={`Open Live Demo for ${project.title}`}
                        aria-label={`Open Live Demo for ${project.title}`}
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
