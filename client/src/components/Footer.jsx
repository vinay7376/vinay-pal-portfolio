import React, { useState, useEffect } from 'react';
import VpLogo from './VpLogo';
import { ArrowUp, Github, Linkedin, Mail, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { checkServerHealth } from '../utils/api';

export default function Footer() {
  const [serverState, setServerState] = useState({ status: 'checking' });

  useEffect(() => {
    checkServerHealth().then(setServerState);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#04060b] text-slate-400 text-xs">
      {/* Ambient glow top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <VpLogo />
            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              Full-Stack MERN Developer and Computer Science Engineering student graduating in 2027 from United College of Engineering and Research (UCER), Prayagraj. Building reliable, high-performance web systems.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open for SDE Roles & Internships
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Navigation</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#about" className="hover:text-brand-blue transition-colors">About &amp; Verified Facts</a></li>
              <li><a href="#skills" className="hover:text-brand-blue transition-colors">Technical Stack</a></li>
              <li><a href="#projects" className="hover:text-brand-blue transition-colors">Featured Engineering Projects</a></li>
              <li><a href="#architecture" className="hover:text-brand-blue transition-colors">Architecture &amp; Principles</a></li>
              <li><a href="#experience" className="hover:text-brand-blue transition-colors">Experience &amp; Timeline</a></li>
              <li><a href="#contact" className="hover:text-brand-blue transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          {/* Col 3: Connect & Credentials */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono">Connect</h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-400" />
                  <span>GitHub (@vinay7376)</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                  <span>LeetCode (200+ Solved)</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Vinay_Pal_Resume.pdf"
                  className="flex items-center gap-1.5 hover:text-brand-blue text-brand-blue/90 transition-colors font-medium"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Vinay Pal. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${serverState.status === 'healthy' ? 'bg-emerald-400' : 'bg-brand-blue'}`} />
              API: {serverState.status === 'healthy' ? 'Healthy (REST & Mongoose)' : 'Online Client'}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel hover:text-white transition-colors border border-white/5 text-slate-400"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
