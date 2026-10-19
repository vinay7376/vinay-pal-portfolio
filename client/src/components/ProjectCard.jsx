import React from 'react';
import { ExternalLink, Github, ArrowRight, Eye, Sparkles, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, onOpenCaseStudy }) {
  if (!project) return null;

  const hasImage = project.images && project.images.length > 0;
  const mainImage = hasImage ? project.images[0] : null;
  const techList = project.technologies || project.techStack || [];
  const overviewText = project.overview || project.summary || '';

  return (
    <div className="studio-glass rounded-3xl overflow-hidden border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 flex flex-col group shadow-2xl">
      
      {/* Visual Window / Mockup Container */}
      <div className="relative w-full h-56 bg-slate-950 overflow-hidden border-b border-white/10">
        
        {/* Top Browser Bar Mockup */}
        <div className="absolute top-0 left-0 right-0 z-20 px-3 py-2 bg-slate-950/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-2 text-slate-300 font-semibold">{project.title}</span>
          </div>
          <span className="text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded text-[10px]">
            {project.badge || project.category}
          </span>
        </div>

        {/* Screenshot Image or Visual Placeholder */}
        {mainImage ? (
          <div className="w-full h-full pt-8 overflow-hidden">
            <img
              src={mainImage}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        ) : (
          <div className="w-full h-full pt-8 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0c1427] to-[#060a14] relative">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-2">
              <Sparkles className="w-6 h-6 text-brand-cyan" />
            </div>
            <div className="text-sm font-bold text-white tracking-tight">{project.title}</div>
            <div className="text-xs text-slate-400 text-center mt-1 max-w-xs">{project.subtitle || project.tagline}</div>
          </div>
        )}

        {/* Top Right Direct Links */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 z-20">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-black/80 hover:bg-black text-slate-300 hover:text-white border border-white/20 transition-colors shadow-md"
              title="View Source on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white border border-blue-400/40 transition-colors shadow-glow-blue"
              title="Open Live Deployment"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Project Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-brand-cyan uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            {project.metrics && project.metrics.length > 0 && (
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                {project.metrics[0].value} {project.metrics[0].label}
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors tracking-tight">
            {project.title}
          </h3>

          <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
            {overviewText}
          </p>
        </div>

        {/* Technologies Pills */}
        <div className="space-y-3 pt-3 border-t border-white/10">
          <div className="flex flex-wrap gap-1.5">
            {techList.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-[11px] font-mono bg-white/5 text-slate-300 rounded-lg border border-white/10"
              >
                {tech}
              </span>
            ))}
            {techList.length > 4 && (
              <span className="px-2 py-1 text-[11px] font-mono text-slate-500">
                +{techList.length - 4} more
              </span>
            )}
          </div>

          {/* Trigger Case Study Button */}
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-white bg-white/5 hover:bg-brand-cyan/20 hover:text-brand-cyan hover:border-brand-cyan/40 rounded-xl border border-white/10 transition-all duration-200 uppercase tracking-wider"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect Architecture &amp; Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
