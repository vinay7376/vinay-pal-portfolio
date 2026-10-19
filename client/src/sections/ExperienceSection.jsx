import React from 'react';
import { 
  GraduationCap, 
  Trophy, 
  Award, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Flame, 
  Users,
  Milestone
} from 'lucide-react';
import { TIMELINE_EXPERIENCE } from '../data/portfolioData';

export default function ExperienceSection() {
  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4 text-brand-cyan" />;
      case 'achievement':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'certification':
        return <Award className="w-4 h-4 text-brand-violet" />;
      case 'learning':
        return <Flame className="w-4 h-4 text-rose-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-brand-blue" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full studio-pill text-xs font-mono text-amber-300 border border-amber-500/30">
            <Milestone className="w-3.5 h-3.5" />
            <span>Chronological Journey &amp; Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Verified Credentials &amp; <span className="text-display-amber">Milestones</span>.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A chronological timeline of verified academic progress, national assessments, and hackathons.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central spine line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-brand-cyan via-brand-violet to-emerald-500/40" />

          <div className="space-y-8 relative">
            {TIMELINE_EXPERIENCE.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline node icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-brand-cyan flex items-center justify-center z-10 shadow-glow-cyan">
                    {getIcon(item.type)}
                  </div>

                  {/* Content card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-6 w-full">
                    <div className="studio-glass p-6 rounded-3xl border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 shadow-2xl space-y-2.5 group">
                      {/* Top bar with year and badge */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 px-2.5 py-0.5 rounded-full border border-brand-cyan/30">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                          {item.badge}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <div>
                        <h4 className="text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                          {item.title}
                        </h4>
                        <div className="text-xs text-slate-400 mt-0.5 font-medium">
                          {item.organization}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-300 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
