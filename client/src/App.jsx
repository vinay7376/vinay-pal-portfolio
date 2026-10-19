import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ArchitectureSection from './sections/ArchitectureSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';
import NotFound from './components/NotFound';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
  };

  // If someone navigated to an unknown deep path, show the custom 404 page
  if (currentPath !== '/' && !currentPath.startsWith('/#')) {
    return <NotFound onGoHome={navigateHome} />;
  }

  return (
    <div className="relative min-h-screen bg-dark-bg text-slate-100 overflow-x-hidden selection:bg-brand-blue/20 selection:text-brand-blue">
      {/* Background Decorative Mesh & Patterns */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />
      <div className="fixed inset-0 ambient-glow-mesh pointer-events-none -z-10" />

      {/* Fixed Header / Nav */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ArchitectureSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
