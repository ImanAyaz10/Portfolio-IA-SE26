import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Briefcase, Menu, X, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin } from './BrandIcons';

export default function Navbar({ onOpenRecruiterView }) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub Repos', href: '#github-feed' },
    { name: 'Decisions', href: '#decisions' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Constellation', href: '#constellation' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const themeActionLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-canvas-dark/95 dark:bg-canvas-dark/95 light:bg-white/95 backdrop-blur-md border-b border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1"
          aria-label="IMAN // BUILD LOG Homepage"
        >
          <div className="w-8 h-8 rounded bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 flex items-center justify-center text-amber-500 font-mono text-sm font-bold group-hover:border-amber-500/50 transition-colors shadow-sm">
            IA
          </div>
          <div className="flex flex-col">
            <span className="font-mono font-bold tracking-tight text-sm sm:text-base text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              IMAN <span className="text-amber-500">//</span> BUILD LOG
            </span>
            <span className="font-mono text-[10px] text-emerald-500 dark:text-emerald-500 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              SYS::OPEN_TO_WORK
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-amber-500 dark:hover:text-amber-400 light:hover:text-amber-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1 py-0.5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls & Social Icons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Recruiter Quick View Button */}
          <button
            onClick={onOpenRecruiterView}
            className="flex items-center gap-2 text-xs font-mono font-semibold px-3 py-1.5 rounded-md bg-amber-500/10 dark:bg-amber-500/10 light:bg-amber-50 border border-amber-500/30 text-amber-500 dark:text-amber-400 light:text-amber-700 hover:bg-amber-500 hover:text-slate-950 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            title="Open 90-Second Recruiter Summary"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Recruiter View</span>
          </button>

          {/* Social Links Divider */}
          <div className="h-5 w-[1px] bg-canvas-cardBorder dark:bg-canvas-cardBorder light:bg-slate-300 mx-1" />

          {/* GitHub Profile Button */}
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-amber-500 dark:hover:text-amber-400 light:hover:text-amber-600 hover:border-amber-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="GitHub Profile (@ImanAyaz10)"
            title="Visit GitHub Profile (@ImanAyaz10)"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* LinkedIn Profile Button */}
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-amber-500 dark:hover:text-amber-400 light:hover:text-amber-600 hover:border-amber-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="LinkedIn Profile (Iman Ayaz)"
            title="Visit LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Direct Email Button */}
          <a
            href={`mailto:${personalInfo.socials.email}`}
            className="p-2 rounded-md bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-amber-500 dark:hover:text-amber-400 light:hover:text-amber-600 hover:border-amber-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Send Email to Iman Ayaz (imanayaz2003@gmail.com)"
            title="Email Iman Ayaz (imanayaz2003@gmail.com)"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-amber-500 dark:hover:text-amber-400 light:hover:text-amber-600 hover:border-amber-500/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label={themeActionLabel}
            title={themeActionLabel}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700"
            aria-label={themeActionLabel}
            title={themeActionLabel}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-canvas-card dark:bg-canvas-card light:bg-slate-100 border border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-canvas-card dark:bg-canvas-card light:bg-white border-b border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200 px-4 pt-3 pb-5 space-y-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono p-2.5 rounded bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 text-slate-300 dark:text-slate-300 light:text-slate-800 hover:text-amber-500 border border-canvas-cardBorder/50 dark:border-canvas-cardBorder/50 light:border-slate-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Social Row */}
          <div className="flex items-center justify-around pt-2 border-t border-canvas-cardBorder dark:border-canvas-cardBorder light:border-slate-200">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-amber-500"
              aria-label="GitHub Profile (@ImanAyaz10)"
            >
              <Github className="w-4 h-4 text-amber-500" />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-amber-500"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-amber-500" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="flex items-center gap-1.5 text-xs font-mono text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-amber-500"
              aria-label="Email Iman Ayaz"
            >
              <Mail className="w-4 h-4 text-amber-500" />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenRecruiterView();
            }}
            className="w-full flex items-center justify-center gap-2 text-xs font-mono font-semibold py-2.5 rounded bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Open Recruiter Quick View</span>
          </button>
        </div>
      )}
    </header>
  );
}
