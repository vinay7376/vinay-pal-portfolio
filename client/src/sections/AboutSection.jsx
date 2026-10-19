import React from 'react';
import { GraduationCap, Award, Brain, Code, CheckCircle, MapPin, Calendar, HeartHandshake, BookOpen, UserCheck, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, VERIFIED_STATS } from '../data/portfolioData';

export default function AboutSection() {
  const pillars = [
    {
      icon: Code,
      title: "Full-Stack MERN Architecture",
      desc: "Architecting multi-tier web platforms with React, Node.js, Express, and MongoDB, ensuring clean separation of concerns and maintainability."
    },
    {
      icon: Award,
      title: "UI/UX & Frontend Polish",
      desc: "Obsessed with responsiveness, zero layout shift, semantic HTML, and fluid micro-interactions crafted with Tailwind CSS and Framer Motion."
    },
    {
      icon: Brain,
      title: "Algorithmic Problem Solving",
      desc: "Solved 200+ challenges across LeetCode & GeeksforGeeks in C++ and JavaScript. 99.50 national percentile in core CS & DSA."
    },
    {
      icon: HeartHandshake,
      title: "Peer Mentorship & Community",
      desc: "Mentored 20+ juniors in web fundamentals, Git version control, and full-stack software practices at United College of Engineering and Research."
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full studio-pill text-xs font-mono text-brand-blue border border-brand-blue/30">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Academic Rigor &amp; Professional Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Building software with <span className="text-display-cyan">purpose &amp; precision</span>.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A verified look at my academic foundation, software development focus, and engineering values.
          </p>
        </div>

        {/* Split Layout: Bio & Verified Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Biography & Engineering Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="studio-glass p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-brand-cyan" />
                  Computer Science &amp; Engineering Undergrad
                </h3>
                <span className="text-xs font-mono text-brand-cyan bg-brand-cyan/10 px-2.5 py-0.5 rounded-full border border-brand-cyan/20">
                  UCER '27
                </span>
              </div>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am an undergraduate in Computer Science and Engineering at <strong className="text-white">United College of Engineering and Research (UCER), Prayagraj</strong>, graduating in <strong className="text-brand-cyan font-semibold">2027</strong>.
              </p>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                My engineering approach is rooted in practical execution: I don’t build surface-level clones; I build applications with real problem statements, verified data models, secure authentication flows, and bulletproof error boundaries. Whether it’s designing an autonomous recovery pipeline for failed payments in <strong className="text-white">PayRecover AI</strong> or building a multi-stage food delivery ecosystem in <strong className="text-white">Swag-e-Swaad</strong>, I take pride in craftsmanship and reliable code.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                  Prayagraj, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-violet" />
                  B.Tech 2023 — 2027
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  MERN &amp; Distributed Systems
                </span>
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="studio-glass p-5 rounded-2xl border border-white/5 space-y-2.5 hover:border-brand-cyan/40 transition-all duration-300 group">
                    <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Verified Profile Facts */}
          <div className="lg:col-span-5 space-y-4">
            <div className="studio-glass p-6 sm:p-7 rounded-3xl border border-white/10 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">Verified Credentials</span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  100% Authentic
                </span>
              </div>

              <div className="space-y-3.5">
                {VERIFIED_STATS.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1 hover:border-white/15 transition-all">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{stat.label}</span>
                      <span className="text-[10px] font-mono text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded-full border border-brand-cyan/20">
                        {stat.badge}
                      </span>
                    </div>
                    <div className="text-2xl font-bold font-mono text-white text-display-cyan">
                      {stat.value}
                    </div>
                    <p className="text-xs text-slate-400">{stat.description}</p>
                  </div>
                ))}
              </div>

              {/* Code Philosophy Snippet */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/5 font-mono text-xs text-slate-400 space-y-1.5">
                <div className="text-slate-500">// Engineering Principle</div>
                <div className="text-slate-300">
                  <span className="text-brand-cyan">if</span> (feature.hasNoGuardrails) &#123;
                </div>
                <div className="pl-4 text-slate-300">
                  preventExecution(); <span className="text-slate-500">// safety first</span>
                </div>
                <div className="text-slate-300">&#125;</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
