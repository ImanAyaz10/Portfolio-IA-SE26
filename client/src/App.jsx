import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BuildLog from './components/BuildLog';
import GitHubShowcase from './components/GitHubShowcase';
import DecisionJournal from './components/DecisionJournal';
import SkillsMatrix from './components/SkillsMatrix';
import Experience from './components/Experience';
import Constellation from './components/Constellation';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import RecruiterView from './components/RecruiterView';
import ResumeModal from './components/ResumeModal';
import { projects } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [recruiterViewOpen, setRecruiterViewOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleSelectProjectById = (id) => {
    const proj = projects.find((p) => p.id === id);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-canvas-dark dark:bg-canvas-dark light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-500 transition-colors duration-200">
      {/* Sticky Top Navigation */}
      <Navbar onOpenRecruiterView={() => setRecruiterViewOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onExploreProjects={scrollToProjects}
        />
        <BuildLog onSelectProject={setSelectedProject} />
        <GitHubShowcase />
        <DecisionJournal />
        <SkillsMatrix onSelectProjectById={handleSelectProjectById} />
        <Experience onSelectProjectById={handleSelectProjectById} />
        <Constellation />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <RecruiterView
        isOpen={recruiterViewOpen}
        onClose={() => setRecruiterViewOpen(false)}
        onSelectProjectById={handleSelectProjectById}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
