import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  FileText, 
  Github, 
  Linkedin, 
  Code2, 
  Sparkles, 
  Terminal as TerminalIcon,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import InteractiveTerminal from '../components/InteractiveTerminal';

export default function HeroSection() {
  const roles = [
    "Full-Stack MERN Architect",
    "Frontend Performance Engineer",
    "Scalable REST API Designer",
    "Algorithmic Problem Solver"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullRole.substring(0, displayedText.length + 1));
        if (displayedText === fullRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(fullRole.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Ambient Background Illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-tr from-brand-blue/15 via-brand-cyan/10 to-brand-violet/15 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-violet/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full studio-pill border border-emerald-500/30 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Software Engineering Roles • B.Tech CSE '27 (UCER)</span>
            </div>

            {/* Confident, Distinctive Heading */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                Crafting High-Performance Digital Products
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] text-white font-sans leading-[1.05]">
                Vinay <span className="text-display-cyan">Pal</span>.
              </h1>
              
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 font-mono flex items-center">
                  I engineer&nbsp;
                  <span className="text-brand-cyan font-bold tracking-tight">
                    {displayedText}
                  </span>
                  <span className="w-0.5 h-6 sm:h-8 bg-brand-cyan ml-1 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Punchy, Non-Generic Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Full-Stack MERN Engineer specializing in multi-tier web platforms, defensive REST pipelines, and fluid 60 FPS interfaces. Ranked in the <strong className="text-white font-semibold">99.50th percentile</strong> nationally in core CS &amp; Algorithms with <strong className="text-white font-semibold">200+ problems solved</strong> on LeetCode &amp; GFG.
            </p>

            {/* Quick Project Jump Chips */}
            <div className="flex items-center gap-2 flex-wrap text-xs font-mono text-slate-400 pt-1">
              <span className="text-slate-500">Quick Jump:</span>
              <a href="#projects" className="px-2.5 py-1 rounded-lg studio-pill hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors">
                🍽️ Swag-e-Swaad
              </a>
              <a href="#projects" className="px-2.5 py-1 rounded-lg studio-pill hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors">
                🤖 PayRecover AI
              </a>
              <a href="#projects" className="px-2.5 py-1 rounded-lg studio-pill hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors">
                📋 Live Kanban
              </a>
              <a href="#skills" className="px-2.5 py-1 rounded-lg studio-pill hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors">
                ⚡ Tech Matrix
              </a>
            </div>

            {/* CTAs and Direct Connect */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-glow-blue transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 uppercase tracking-wider"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Vinay_Pal_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold text-slate-200 studio-glass hover:bg-white/10 hover:text-white rounded-xl border border-white/15 transition-all duration-300 hover:-translate-y-0.5 uppercase tracking-wider"
              >
                <FileText className="w-4 h-4 text-brand-cyan" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* Social Profiles */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl studio-pill hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile (@vinay7376)"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl studio-pill hover:bg-white/10 text-[#0A66C2] hover:text-sky-400 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl studio-pill hover:bg-white/10 text-amber-400 hover:text-amber-300 transition-colors"
                  aria-label="LeetCode Profile"
                  title="LeetCode (200+ Solved)"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Verified Credentials Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white text-display-cyan">99.50%ile</div>
                <div className="text-xs text-slate-400 font-medium">Young Turks CS Assessment</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white text-display-violet">200+ Solved</div>
                <div className="text-xs text-slate-400 font-medium">LeetCode &amp; GFG Practice</div>
              </div>
              <div className="col-span-2 sm:col-span-1 space-y-0.5">
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white text-display-amber">2027 Grad</div>
                <div className="text-xs text-slate-400 font-medium">B.Tech CSE (UCER Prayagraj)</div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Interactive Terminal Sandbox */}
          <div className="lg:col-span-5 relative">
            {/* Specular edge glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-violet/20 rounded-3xl blur-xl opacity-60 -z-10" />
            
            <InteractiveTerminal />

            {/* Live Telemetry Info */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 px-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Node v24 + Express + MongoDB Service
              </span>
              <span className="text-brand-cyan font-semibold">REST Active</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
