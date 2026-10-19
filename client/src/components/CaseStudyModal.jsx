import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Layers, Activity, Cpu } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const techList = project.technologies || project.techStack || [];
  const overviewText = project.overview || project.summary || '';
  const problemText = project.problem || project.problemStatement || '';
  const contributionText = project.contribution || project.myContribution || '';
  const featureList = project.features || project.keyFeatures || [];
  const challengeList = project.challenges || project.challengesAndSolutions || [];
  const metricList = project.metrics || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] studio-glass bg-[#080d1a]/95 rounded-3xl border border-white/15 shadow-2xl flex flex-col overflow-hidden z-10">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#060a14]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
              {project.badge || project.category}
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          {/* Subtitle / Value Proposition */}
          <p className="text-base text-slate-200 font-medium leading-relaxed">
            {overviewText}
          </p>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-glow-blue transition-colors uppercase tracking-wider"
              >
                <span>Open Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-200 studio-pill hover:bg-white/10 rounded-xl border border-white/10 transition-colors uppercase tracking-wider"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Metrics Bar */}
          {metricList.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-black/40 rounded-2xl border border-white/5">
              {metricList.map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-xs text-slate-400 font-medium">{m.label}</div>
                  <div className="text-xl font-bold text-brand-cyan font-mono">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Image Previews if available */}
          {project.images && project.images.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-cyan" />
                Application Previews &amp; Architecture Screenshots
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.images.map((img, i) => (
                  <div key={i} className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/50 group">
                    <img
                      src={img}
                      alt={`${project.title} preview ${i + 1}`}
                      className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Problem Statement & Contribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                The Problem
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {problemText}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-brand-cyan font-bold text-xs uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                My Engineering Contribution
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {contributionText}
              </p>
            </div>
          </div>

          {/* Implemented Features */}
          {featureList.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Verified Implemented Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureList.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-black/30 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="text-xs text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Challenges & Solutions */}
          {challengeList.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-brand-violet" />
                Technical Challenges &amp; Solutions
              </h4>
              <div className="space-y-3">
                {challengeList.map((c, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-1">
                    <div className="font-bold text-xs text-brand-violet">{c.title || c.challenge}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{c.desc || c.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          {techList.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-white/10">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {techList.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-slate-300 border border-white/10 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end px-6 py-3 border-t border-white/10 bg-[#060a14]">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold rounded-xl bg-white/10 text-white hover:bg-white/15 transition-colors uppercase tracking-wider"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
