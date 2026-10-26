import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-canvas-dark dark:bg-canvas-dark light:bg-white border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-canvas-cardBorder/60 dark:border-canvas-cardBorder/60 light:border-slate-200">
          
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              <Terminal className="w-4 h-4 text-amber-500" />
              <span>IMAN // BUILD LOG</span>
            </div>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-[11px]">
              Explore what I build, how I think, and what I am learning.
            </p>
          </div>

          {/* Social & Contact links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-amber-500 hover:border-amber-500/50 transition-colors"
              aria-label="GitHub Profile (@ImanAyaz10)"
              title="Visit GitHub Profile (@ImanAyaz10)"
            >
              <Github className="w-4 h-4 text-amber-500" />
              <span>GitHub (@ImanAyaz10)</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-amber-500 hover:border-amber-500/50 transition-colors"
              aria-label="LinkedIn Profile"
              title="Visit LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-amber-500" />
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-2 rounded-lg bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-amber-500 hover:border-amber-500/50 transition-colors"
              aria-label={`Email Iman (${personalInfo.socials.email})`}
              title={`Email ${personalInfo.socials.email}`}
            >
              <Mail className="w-4 h-4 text-amber-500" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-amber-500 ml-2"
              title="Return to top of page"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom row: Telemetry & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-500 light:text-slate-600">
          <div>
            © {new Date().getFullYear()} Iman Ayaz. Designed & engineered for production quality.
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              SYS::VERIFIED
            </span>
            <span>•</span>
            <span>MERN STACK</span>
            <span>•</span>
            <span>LCWU SE 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
