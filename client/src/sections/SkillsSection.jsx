import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  RefreshCw, 
  ExternalLink,
  ChevronRight,
  GitBranch,
  Lock,
  Boxes
} from 'lucide-react';

const SKILLS_DATABASE = [
  // Frontend
  {
    name: "React 19 & React 18",
    category: "Frontend",
    level: "Advanced Architecture",
    brandColor: "#00D8FE",
    icon: "⚛️",
    productionUsage: "Engineered dynamic dish sizing modals and instant cart hashing in Swag-e-Swaad; created optimistic state transitions in Real-Time Kanban.",
    pattern: "Custom Hooks, Context Providers, Memoized Pure Components"
  },
  {
    name: "JavaScript (ES6+)",
    category: "Languages & Tools",
    level: "Core Competency",
    brandColor: "#F7DF1E",
    icon: "⚡",
    productionUsage: "Asynchronous concurrency, closure patterns, event loop optimization, and functional array pipelines across full-stack repositories.",
    pattern: "Async/Await, Promises, Functional Composition, Prototypes"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Advanced UI/UX",
    brandColor: "#38BDF8",
    icon: "🎨",
    productionUsage: "Designed bespoke dark studio design systems, micro-interactions, responsive typography, and glassmorphic elevation without CSS bloat.",
    pattern: "Design Tokens, Fluid Typography, Component Utility Abstractions"
  },
  {
    name: "Next.js (App Router)",
    category: "Frontend",
    level: "Intermediate",
    brandColor: "#FFFFFF",
    icon: "▲",
    productionUsage: "Built Diagramly architecture canvas with client-side Excalidraw vector bundles and SSR-disabled dynamic imports.",
    pattern: "Dynamic Imports, App Router Layouts, Route Handlers"
  },
  {
    name: "Redux & State Management",
    category: "Frontend",
    level: "Proficient",
    brandColor: "#764ABC",
    icon: "🔄",
    productionUsage: "Managed multi-step order configurations and global shopping cart state synchronization across client pages.",
    pattern: "Predictable State Tree, Immutable Reducers, Action Dispatchers"
  },
  {
    name: "Framer Motion",
    category: "Frontend",
    level: "Proficient",
    brandColor: "#EA4C89",
    icon: "✨",
    productionUsage: "Implemented 60 FPS layout animations, modal transitions, and drag-and-drop task physics with zero frame jitter.",
    pattern: "Layout Spring Physics, AnimatePresence, Gesture Handlers"
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    level: "Advanced Runtime",
    brandColor: "#68A063",
    icon: "🟢",
    productionUsage: "Built non-blocking event-driven backend services handling concurrent API requests and payment webhook verifications.",
    pattern: "Event Loop Profiling, Stream Piping, Native Crypto Modules"
  },
  {
    name: "Express.js",
    category: "Backend",
    level: "Advanced REST",
    brandColor: "#E2E8F0",
    icon: "🚀",
    productionUsage: "Structured modular routing, centralized error handlers, tiered rate limiters, and defensive request pipelines.",
    pattern: "Middleware Pipelines, Error Boundaries, Route Factories"
  },
  {
    name: "RESTful API Engineering",
    category: "Backend",
    level: "Advanced Design",
    brandColor: "#38BDF8",
    icon: "🌐",
    productionUsage: "Designed idempotent endpoints, standard HTTP status codes, structured JSON error bodies, and query filtering parameters.",
    pattern: "Contract-First Design, Pagination, Idempotency Hashing"
  },
  {
    name: "JWT & RBAC Security",
    category: "Backend",
    level: "Proficient",
    brandColor: "#C084FC",
    icon: "🛡️",
    productionUsage: "Implemented stateless Bearer token authentication with role-based access control separating customer and admin dashboards.",
    pattern: "Signed JWT Tokens, Authorization Middleware, Secret Guarding"
  },
  {
    name: "Zod & Server Validation",
    category: "Backend",
    level: "Advanced Defensive",
    brandColor: "#3B82F6",
    icon: "✅",
    productionUsage: "Enforced strict schema validation and typing for transaction recovery actions in PayRecover AI and contact forms.",
    pattern: "Runtime Type Inference, Fail-Fast Parsing, Sanitization"
  },
  {
    name: "Socket.IO (Real-Time)",
    category: "Backend",
    level: "Intermediate",
    brandColor: "#010101",
    icon: "📡",
    productionUsage: "Engineered real-time bi-directional task sync and multi-stage delivery order tracking notifications.",
    pattern: "Room Broadcasting, Connection Heartbeats, Event Multiplexing"
  },

  // Databases
  {
    name: "MongoDB",
    category: "Databases",
    level: "Advanced NoSQL",
    brandColor: "#47A248",
    icon: "🍃",
    productionUsage: "Designed resilient document schemas with compound indexing for sub-10ms query execution across collections.",
    pattern: "Document Denormalization, Atomic $inc Updates, Aggregations"
  },
  {
    name: "Mongoose ODM",
    category: "Databases",
    level: "Advanced Modeling",
    brandColor: "#880000",
    icon: "📦",
    productionUsage: "Built strict schema constraints, pre-save sanitization hooks, index definitions, and connection disconnect handlers.",
    pattern: "Schema Middleware, Model Statics, Virtual Population"
  },
  {
    name: "MySQL",
    category: "Databases",
    level: "Proficient Relational",
    brandColor: "#00758F",
    icon: "🐬",
    productionUsage: "Normalized transactional data models with foreign key constraints, ACID compliance, and indexed joins.",
    pattern: "Entity Relationship Modeling, Transaction Isolation, Joins"
  },

  // Languages & Core Tools
  {
    name: "C++ (OOP & STL)",
    category: "Languages & Tools",
    level: "Algorithmic Rigor",
    brandColor: "#00599C",
    icon: "⚙️",
    productionUsage: "Solved 200+ competitive programming challenges; achieved 99.50%ile in the Young Turks National CS Assessment.",
    pattern: "STL Containers, Memory Optimization, Complex Algorithms"
  },
  {
    name: "Python",
    category: "Languages & Tools",
    level: "Proficient",
    brandColor: "#3776AB",
    icon: "🐍",
    productionUsage: "Automated test data generation, scripting, and backend API integration tests for workforce analytics.",
    pattern: "Data Scripting, FastAPI Services, Automated Testing"
  },
  {
    name: "Git & GitHub",
    category: "Languages & Tools",
    level: "Advanced Workflow",
    brandColor: "#F05032",
    icon: "🐙",
    productionUsage: "Feature branching, pull requests, semantic commits, and team collaboration mentoring 20+ student developers.",
    pattern: "Git Flow, Interactive Rebase, Clean Commit History"
  },
  {
    name: "Postman",
    category: "Languages & Tools",
    level: "Proficient Testing",
    brandColor: "#FF6C37",
    icon: "📮",
    productionUsage: "Authored automated API test collections, environment variable environments, and webhook payload mock tests.",
    pattern: "Collection Runner, Pre-request Scripts, Mock Servers"
  }
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(SKILLS_DATABASE[0]);
  const [interactiveMode, setInteractiveMode] = useState('pipeline'); // 'pipeline' | 'frontend' | 'dsa'
  const [simulatedStage, setSimulatedStage] = useState(0);

  const categories = ['All', 'Frontend', 'Backend', 'Databases', 'Languages & Tools'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS_DATABASE
    : SKILLS_DATABASE.filter(s => s.category === activeCategory);

  const pipelineSteps = [
    { title: "Incoming Request", desc: "Client sends HTTP POST /api/checkout with payload", time: "0ms", status: "Received" },
    { title: "Security Barrier", desc: "Helmet headers + Rate Limiter (5 req/15m) + Honeypot Check", time: "+2ms", status: "Verified" },
    { title: "Zod Schema Parser", desc: "Strict schema parse strips unexpected fields & validates types", time: "+4ms", status: "Sanitized" },
    { title: "HMAC Signature Check", desc: "Razorpay crypto HMAC SHA-256 signature calculated & matched", time: "+7ms", status: "Authenticated" },
    { title: "MongoDB Persistence", desc: "Compound indexed write with idempotency lock key", time: "+11ms", status: "Committed" },
  ];

  const advancePipeline = () => {
    setSimulatedStage((prev) => (prev + 1) % pipelineSteps.length);
  };

  return (
    <section id="skills" className="py-24 relative border-t border-white/10 bg-[#06080e]/80">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="space-y-3 mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full studio-pill text-xs font-mono text-brand-cyan border border-brand-cyan/30">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Architecture &amp; Capability Radar</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-sans">
            Not just a list of keywords. <br className="hidden sm:inline" />
            <span className="text-display-cyan">Engineering depth in action</span>.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Explore how theoretical Computer Science rigor meets high-throughput full-stack execution across the MERN ecosystem.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE CAPABILITY RADAR (THE SHOWSTOPPER) */}
        {/* ========================================================================= */}
        <div className="studio-glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl mb-12">
          
          {/* Radar Header & Switchboard */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Live Architectural Switchboard
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Interact with the real engineering patterns Vinay implements in production systems.
              </p>
            </div>

            {/* Switchboard Mode Buttons */}
            <div className="flex items-center bg-black/50 p-1.5 rounded-xl border border-white/10 text-xs font-medium">
              <button
                onClick={() => setInteractiveMode('pipeline')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  interactiveMode === 'pipeline'
                    ? 'bg-blue-600 text-white shadow-glow-blue font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                1. Request Pipeline
              </button>
              <button
                onClick={() => setInteractiveMode('frontend')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  interactiveMode === 'frontend'
                    ? 'bg-blue-600 text-white shadow-glow-blue font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2. Reactive UI Engine
              </button>
              <button
                onClick={() => setInteractiveMode('dsa')}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  interactiveMode === 'dsa'
                    ? 'bg-blue-600 text-white shadow-glow-blue font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                3. Algorithmic Rigor
              </button>
            </div>
          </div>

          {/* Interactive Screen Display */}
          <div className="pt-6">
            
            {/* MODE 1: REQUEST LIFECYCLE PIPELINE */}
            {interactiveMode === 'pipeline' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono text-slate-400">
                  <span className="text-brand-cyan">Pattern: Idempotent &amp; Defensive REST Pipeline</span>
                  <button
                    onClick={advancePipeline}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/15 text-white rounded-lg transition-colors border border-white/10"
                  >
                    <Play className="w-3 h-3 text-brand-cyan" />
                    <span>Advance Stage (Stage {simulatedStage + 1}/5)</span>
                  </button>
                </div>

                {/* Visual Pipeline Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {pipelineSteps.map((step, idx) => {
                    const isPassed = idx <= simulatedStage;
                    const isCurrent = idx === simulatedStage;
                    return (
                      <div
                        key={idx}
                        onClick={() => setSimulatedStage(idx)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-brand-blue/15 border-brand-cyan shadow-glow-blue text-white'
                            : isPassed
                            ? 'bg-black/40 border-emerald-500/30 text-slate-300'
                            : 'bg-black/20 border-white/5 text-slate-500'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                          <span>0{idx + 1}</span>
                          <span className={isPassed ? 'text-emerald-400' : 'text-slate-600'}>
                            {step.time}
                          </span>
                        </div>
                        <div className="font-semibold text-xs">{step.title}</div>
                        <div className="text-[10px] mt-1 text-slate-400 line-clamp-2 leading-tight">
                          {step.desc}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Active Stage Deep Inspection */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-slate-300 flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                  <div className="space-y-1">
                    <span className="text-white font-semibold">Active Pipeline Stage: {pipelineSteps[simulatedStage].title}</span>
                    <p className="text-slate-400 text-[11px]">
                      {pipelineSteps[simulatedStage].desc}
                    </p>
                    <div className="text-[10px] text-emerald-400 pt-1">
                      ✓ Enforced by Vinay across Express, Zod, and Mongoose controllers
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODE 2: REACTIVE UI & FRONTEND ENGINE */}
            {interactiveMode === 'frontend' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-brand-cyan flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Frame Performance</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">60 FPS Flat</div>
                  <p className="text-xs text-slate-400">
                    Optimized React component rendering trees with zero unnecessary re-renders via useMemo and useCallback.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-brand-violet flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Optimistic Mutations</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">0ms Latency</div>
                  <p className="text-xs text-slate-400">
                    Client state mutates instantly upon user drag/click with graceful rollback if backend API returns an error.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>WCAG AA Accessibility</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-white">100% Keyboard Nav</div>
                  <p className="text-xs text-slate-400">
                    Explicit `:focus-visible` states, semantic headings, and `@media (prefers-reduced-motion)` compliance.
                  </p>
                </div>
              </div>
            )}

            {/* MODE 3: ALGORITHMIC RIGOR */}
            {interactiveMode === 'dsa' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-lg font-bold font-mono text-brand-cyan">99.50%ile</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Young Turks National Assessment</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-lg font-bold font-mono text-emerald-400">200+ Solved</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">LeetCode &amp; GFG Problems</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-lg font-bold font-mono text-amber-400">C++ STL &amp; JS</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Primary Problem-Solving Stack</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                    <div className="text-lg font-bold font-mono text-brand-violet">20+ Mentored</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Junior College Developers Guided</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/20 to-purple-950/20 border border-brand-blue/20 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span>
                    Core focus: Dynamic Programming, Graph Traversals (BFS/DFS), Binary Tree Inversions, Heaps, and Sliding Window.
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href="https://leetcode.com/u/vinay7376/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 rounded-lg border border-amber-500/30 transition-colors"
                    >
                      LeetCode Profile
                    </a>
                    <a
                      href="https://auth.geeksforgeeks.org/user/vinay7376/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 rounded-lg border border-emerald-500/30 transition-colors"
                    >
                      GFG Profile
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE ARSENAL MATRIX WITH REAL PRODUCTION CONTEXT */}
        {/* ========================================================================= */}
        <div className="space-y-6">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Boxes className="w-5 h-5 text-brand-cyan" />
                Verified Technology Arsenal
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Click any technology below to inspect exactly where and how Vinay implemented it.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap bg-black/40 p-1 rounded-xl border border-white/10 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeCategory === cat
                      ? 'bg-white/15 text-white font-semibold border border-white/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Interactive Skill Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredSkills.map((skill, idx) => {
              const isSelected = selectedSkill.name === skill.name;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedSkill(skill)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-slate-900 border-brand-cyan shadow-glow-blue scale-[1.02]'
                      : 'studio-glass hover:border-white/20 text-slate-300'
                  }`}
                >
                  <div className="space-y-2 w-full">
                    <div className="flex items-center justify-between">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                        {skill.category}
                      </span>
                    </div>

                    <div className="font-bold text-sm text-white group-hover:text-brand-cyan transition-colors">
                      {skill.name}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 w-full">
                    <span className="font-mono text-brand-blue">{skill.level}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-brand-cyan' : 'text-slate-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Skill Live Deep-Dive Drawer */}
          {selectedSkill && (
            <div className="studio-glass p-6 rounded-2xl border border-brand-cyan/40 bg-gradient-to-r from-blue-950/20 via-black/40 to-indigo-950/20 shadow-2xl space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedSkill.icon}</span>
                  <div>
                    <h4 className="text-lg font-bold text-white flex items-center gap-2">
                      {selectedSkill.name}
                      <span className="text-xs font-mono text-brand-cyan px-2 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30">
                        {selectedSkill.level}
                      </span>
                    </h4>
                    <span className="text-xs text-slate-400 font-mono">Domain: {selectedSkill.category}</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Project Implementation</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                  <span className="font-mono text-brand-blue uppercase tracking-wider text-[11px] font-semibold">
                    Real Production Usage
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedSkill.productionUsage}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                  <span className="font-mono text-brand-violet uppercase tracking-wider text-[11px] font-semibold">
                    Architectural Patterns Applied
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedSkill.pattern}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
