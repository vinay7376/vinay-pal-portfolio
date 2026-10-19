import React, { useState, useEffect } from 'react';
import VpLogo from './VpLogo';
import { Menu, X, ArrowUpRight, FileText, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Arsenal & Radar', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Milestones', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'architecture', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-[#050608]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Monogram */}
          <a href="#" className="flex items-center" aria-label="Vinay Pal Portfolio Home">
            <VpLogo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 studio-glass px-4 py-1.5 rounded-full border border-white/10 shadow-md">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/15 shadow-sm text-brand-cyan'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Resume & Let's Talk CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Vinay_Pal_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-slate-300 hover:text-white studio-pill hover:bg-white/10 rounded-xl border border-white/10 transition-colors uppercase tracking-wider"
              title="Download Vinay Pal Resume (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-glow-blue transition-all duration-200 hover:-translate-y-0.5 uppercase tracking-wider"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Vinay_Pal_Resume.pdf"
              className="p-2 text-slate-300 studio-glass rounded-xl border border-white/10"
              aria-label="Download Resume"
            >
              <FileText className="w-4 h-4 text-brand-cyan" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 studio-glass border border-white/10 hover:text-white transition-colors"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden studio-glass border-b border-white/10 px-4 pt-3 pb-6 mt-2 space-y-2 animate-fadeIn">
          <div className="flex items-center gap-2 px-3 py-1.5 mb-2 bg-brand-cyan/10 border border-brand-cyan/30 rounded-lg text-xs text-brand-cyan font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span>Open to Opportunities (2027 Grad)</span>
          </div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Vinay_Pal_Resume.pdf"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 studio-pill border border-white/10"
            >
              <FileText className="w-4 h-4 text-brand-cyan" />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-glow-blue uppercase tracking-wider"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
