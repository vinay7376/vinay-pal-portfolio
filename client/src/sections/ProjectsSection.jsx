import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import CaseStudyModal from '../components/CaseStudyModal';
import InteractiveKanbanPreview from '../components/InteractiveKanbanPreview';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { fetchProjects } from '../utils/api';
import { Sparkles, Layers, SlidersHorizontal, CheckCircle2, LayoutGrid, Terminal } from 'lucide-react';

export default function ProjectsSection() {
  const [projects, setProjects] = useState(FEATURED_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' or 'kanban-demo'

  useEffect(() => {
    fetchProjects().then((data) => {
      if (data && data.length > 0) {
        setProjects(data);
      }
    });
  }, []);

  const categories = ['All', 'Full-Stack MERN', 'Full-Stack & Applied AI', 'Full-Stack & Real-Time'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative border-t border-white/10 bg-[#05070c]/90">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full studio-pill text-xs font-mono text-brand-blue border border-brand-blue/30">
            <Layers className="w-3.5 h-3.5" />
            <span>Production Systems &amp; Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Engineered for <span className="text-display-cyan">scale &amp; reliability</span>.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Deep dive into end-to-end architectures: cryptographic payment verification, revenue recovery pipelines, and real-time sprint workflows.
          </p>
        </div>

        {/* View Mode Toggle: Grid or Interactive Kanban Simulator */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center bg-black/50 p-1.5 rounded-2xl border border-white/10 text-xs font-medium">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white shadow-glow-blue font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Project Case Studies ({filteredProjects.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('kanban-demo')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'kanban-demo'
                  ? 'bg-blue-600 text-white shadow-glow-blue font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Play Live Kanban Simulator</span>
            </button>
          </div>

          {activeTab === 'projects' && (
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-white/15 text-white border border-white/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main Content Area */}
        {activeTab === 'projects' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={setSelectedCaseStudy}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4 animate-fadeIn">
            <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/30 text-xs text-blue-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
              <span>
                <strong>Live Demonstration:</strong> Advance cards, test checklist recalculations, add custom sprint tasks, and filter by priority directly below.
              </span>
            </div>
            <InteractiveKanbanPreview />
          </div>
        )}

      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
}
