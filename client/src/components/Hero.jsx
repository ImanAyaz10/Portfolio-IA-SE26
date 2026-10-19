import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, FileText, Mail, Terminal, Sparkles, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Hero({ onOpenResume, onExploreProjects }) {
  const [photoError, setPhotoError] = useState(false);
  const [activeCycleIndex, setActiveCycleIndex] = useState(0);

  const cycleMotifs = [
    { verb: "EXPLORE", desc: "decompose complex real-world requirements" },
    { verb: "BUILD", desc: "engineer maintainable full-stack & AI solutions" },
    { verb: "TEST & REFINE", desc: "validate edge cases and deliver verified software" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCycleIndex((prev) => (prev + 1) % cycleMotifs.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-tech-grid">
      {/* Subtle radial amber gradient in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/10 dark:bg-amber-500/10 light:bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Engineering Log Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 text-xs font-mono shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">LOG::ACTIVE</span>
              <span className="text-slate-600 dark:text-slate-600 light:text-slate-300">|</span>
              <span className="text-amber-500 dark:text-amber-400 light:text-amber-700 font-medium">LCWU SE GRADUATE (2022–2026)</span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 leading-[1.1]">
                Iman Ayaz
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-amber-500 dark:text-amber-400 light:text-amber-600 font-mono">
                Software Engineering Graduate & Builder
              </p>
            </div>

            {/* Specialization Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {personalInfo.specializations.map((spec) => (
                <span
                  key={spec}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700"
                >
                  {spec}
                </span>
              ))}
            </div>

            {/* Authentic Starting Introduction */}
            <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl">
              {personalInfo.introduction}
            </p>

            {/* Distinctive Engineering-Log Motif */}
            <div className="p-3.5 rounded-lg bg-canvas-card/80 dark:bg-canvas-card/80 light:bg-slate-50 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 font-mono text-xs max-w-xl">
              <div className="flex items-center gap-2 text-slate-400 dark:text-slate-400 light:text-slate-500 mb-1">
                <Terminal className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-slate-500 dark:text-slate-500 light:text-slate-400">ENGINEERING_MINDSET</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-amber-500 dark:text-amber-400 light:text-amber-600 font-bold tracking-wide">
                  {cycleMotifs[activeCycleIndex].verb}
                </span>
                <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">
                  → {cycleMotifs[activeCycleIndex].desc}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-semibold text-xs transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <span>Explore Build Log</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-canvas-card dark:bg-canvas-card light:bg-white hover:bg-canvas-cardBorder border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 font-mono text-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <FileText className="w-4 h-4 text-amber-500" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-canvas-card dark:bg-canvas-card light:bg-white hover:bg-canvas-cardBorder border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 font-mono text-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Verification Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-500">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-amber-500 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (@ImanAyaz10)</span>
              </a>

              <span className="text-slate-700 dark:text-slate-700 light:text-slate-300">•</span>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-amber-500 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <span className="text-slate-700 dark:text-slate-700 light:text-slate-300">•</span>

              <div className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Avatar & System Telemetry Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer decorative card */}
              <div className="p-6 rounded-2xl bg-canvas-card dark:bg-canvas-card light:bg-white border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 shadow-xl relative overflow-hidden group">
                
                {/* Technical corner brackets */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-600 dark:text-slate-600 light:text-slate-400">[01]</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-600 dark:text-slate-600 light:text-slate-400">STATUS: VERIFIED</div>

                {/* Profile Photo Area with Graceful Fallback */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto mt-4 mb-6 rounded-2xl overflow-hidden border-2 border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 bg-canvas-dark dark:bg-canvas-dark light:bg-slate-100 flex items-center justify-center shadow-inner">
                  {!photoError ? (
                    <img
                      src={personalInfo.profilePhoto.path}
                      alt={personalInfo.profilePhoto.alt}
                      onError={() => setPhotoError(true)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    // Graceful Technical Monogram Avatar
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-canvas-card to-canvas-dark dark:from-canvas-card dark:to-canvas-dark light:from-slate-100 light:to-slate-200 text-center p-4">
                      <div className="w-20 h-20 rounded-full border-2 border-dashed border-amber-500/50 flex items-center justify-center text-amber-500 font-mono text-2xl font-bold mb-2">
                        IA
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-600">
                        Iman Ayaz
                      </span>
                      <span className="text-[9px] font-mono text-slate-500 dark:text-slate-500 light:text-slate-400 mt-1">
                        LCWU • Software Eng
                      </span>
                    </div>
                  )}

                  {/* Corner Accent Glow */}
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono text-amber-400">
                    SE // 2026
                  </div>
                </div>

                {/* Quick Profile Telemetry Metrics */}
                <div className="space-y-2 border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 pt-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">Signature Capstone:</span>
                    <span className="text-amber-500 dark:text-amber-400 light:text-amber-700 font-semibold">LawBridge (MERN+AI)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">Verified Repositories:</span>
                    <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold">14+ Public Projects</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">Internship Records:</span>
                    <span className="text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold">3 Practical Roles</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 dark:text-slate-400 light:text-slate-500">Target Roles:</span>
                    <span className="text-emerald-500 dark:text-emerald-400 font-semibold">Frontend, SQA, PM</span>
                  </div>
                </div>

                {/* Replace Photo Hint (User-friendly documentation helper) */}
                <div className="mt-4 p-2 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 border border-canvas-cardBorder/60 dark:border-canvas-cardBorder/60 light:border-slate-200 text-[10px] font-mono text-slate-500 dark:text-slate-500 light:text-slate-400 text-center">
                  Drop photo at <code className="text-amber-500">client/public/assets/profile-photo.jpg</code>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
