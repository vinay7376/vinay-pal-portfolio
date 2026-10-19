import React, { useState } from 'react';
import { 
  Network, 
  Database, 
  ShieldCheck, 
  Gauge, 
  Code, 
  GitBranch, 
  Check, 
  Copy, 
  ArrowRight,
  Layers,
  Sparkles,
  Cpu,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import { ENGINEERING_PILLARS } from '../data/portfolioData';

export default function ArchitectureSection() {
  const [selectedPillarIndex, setSelectedPillarIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activePillar = ENGINEERING_PILLARS[selectedPillarIndex];

  const copySnippet = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="py-24 relative border-t border-white/10 bg-[#06080f]/75">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-brand-cyan/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full studio-pill text-xs font-mono text-brand-cyan border border-brand-cyan/30">
            <Network className="w-3.5 h-3.5" />
            <span>Design Decisions &amp; Systems Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Architectural <span className="text-display-cyan">Principles</span> in Practice.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Clean code isn't just about syntax. It's about resilience, idempotency, strict validation, and predictable state transitions.
          </p>
        </div>

        {/* Interactive Architecture Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Tabs on Left */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Core Architectural Pillars
            </h4>

            {ENGINEERING_PILLARS.map((pillar, idx) => {
              const isSelected = selectedPillarIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedPillarIndex(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col space-y-2 ${
                    isSelected
                      ? 'bg-slate-900 border-brand-cyan shadow-glow-blue'
                      : 'studio-glass border-white/5 hover:border-white/20 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                      {pillar.title}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-brand-cyan translate-x-1' : 'text-slate-600'}`} />
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </button>
              );
            })}

            {/* Architecture Comparison: Naive vs Production */}
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3 mt-6">
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                Production vs. Naive Tutorial Approach
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-1">
                <div className="p-2.5 rounded-xl bg-rose-950/20 border border-rose-500/20 text-rose-300 space-y-1">
                  <div className="font-bold flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-rose-400" /> Naive Approach
                  </div>
                  <p className="text-[10px] text-slate-400">Unbounded retries, no idempotency, trusting client inputs without Zod validation.</p>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 space-y-1">
                  <div className="font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Vinay's Standard
                  </div>
                  <p className="text-[10px] text-slate-400">Composite idempotency hashing, HMAC SHA-256 signatures, and rate limiters.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code & Details View on Right */}
          <div className="lg:col-span-7 space-y-4">
            <div className="studio-glass rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Code Panel Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#0a0f1d] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 ml-2 font-semibold">
                    {activePillar.title}.ts
                  </span>
                </div>

                <button
                  onClick={() => copySnippet(activePillar.code)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-slate-400 hover:text-white bg-black/40 rounded-lg border border-white/10 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Content */}
              <div className="p-5 sm:p-6 bg-[#070b16] overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed max-h-[380px]">
                <pre>
                  <code>{activePillar.code}</code>
                </pre>
              </div>

              {/* Explanation & Tags Footer */}
              <div className="p-5 bg-[#0a0f1d] border-t border-white/10 space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activePillar.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activePillar.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-[10px] font-mono bg-white/5 text-slate-300 rounded-md border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
