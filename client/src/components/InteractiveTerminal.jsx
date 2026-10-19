import React, { useState, useEffect } from 'react';
import { Terminal, Cpu, Database, CheckCircle2, Copy, Check, Play, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { checkServerHealth } from '../utils/api';

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState('diagnostics');
  const [copied, setCopied] = useState(false);
  const [serverStatus, setServerStatus] = useState({
    status: 'checking...',
    database: { status: 'checking...' },
    version: '1.0.0',
    uptime: '42m 18s'
  });
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'sys', text: 'vinay-kernel v2.4 initialized.' },
    { type: 'info', text: 'Loaded MERN environment with JWT security & MongoDB.' },
    { type: 'success', text: 'System ready. Type "help" or click presets below.' }
  ]);

  useEffect(() => {
    checkServerHealth().then((health) => {
      setServerStatus(health);
    });
  }, []);

  const runCommand = (cmdText) => {
    const cmd = cmdText.trim().toLowerCase();
    const newLogs = [...terminalLogs, { type: 'input', text: `> ${cmdText}` }];

    if (cmd === 'help') {
      newLogs.push({ type: 'output', text: 'Available commands: "status", "skills", "projects", "contact", "clear"' });
    } else if (cmd === 'status' || cmd === 'vinay.status()') {
      newLogs.push({
        type: 'success',
        text: `STATUS: Graduating 2027 (UCER CSE) | 99.50%ile Young Turks | 200+ DSA | Open for SDE roles`
      });
    } else if (cmd === 'skills' || cmd === 'vinay.skills()') {
      newLogs.push({
        type: 'output',
        text: `STACK: React, Node.js, Express, MongoDB, Tailwind, C++, Python, RESTful APIs, Git`
      });
    } else if (cmd === 'projects' || cmd === 'vinay.projects()') {
      newLogs.push({
        type: 'output',
        text: `PROJECTS: [1] PayRecover AI [2] Swag-e-Swaad (Live MERN) [3] Real-Time Kanban [4] Diagramly`
      });
    } else if (cmd === 'contact' || cmd === 'vinay.contact()') {
      newLogs.push({
        type: 'success',
        text: `CONTACT: ${PERSONAL_INFO.email} | LinkedIn: vinaypal7376 | GitHub: vinay7376`
      });
    } else if (cmd === 'clear') {
      setTerminalLogs([{ type: 'sys', text: 'Terminal cleared.' }]);
      setTerminalInput('');
      return;
    } else {
      newLogs.push({
        type: 'error',
        text: `Command not found: "${cmd}". Try "status", "skills", "projects", or "contact".`
      });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(terminalInput);
    }
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full glass-panel rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1322] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-brand-blue" />
            vinay@system:~ (zsh)
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5 text-xs font-mono">
          <button
            onClick={() => setActiveTab('diagnostics')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'diagnostics' ? 'bg-brand-blue/20 text-brand-blue font-medium' : 'text-slate-400 hover:text-white'
            }`}
          >
            Diagnostics
          </button>
          <button
            onClick={() => setActiveTab('repl')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'repl' ? 'bg-brand-blue/20 text-brand-blue font-medium' : 'text-slate-400 hover:text-white'
            }`}
          >
            Live REPL
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === 'code' ? 'bg-brand-blue/20 text-brand-blue font-medium' : 'text-slate-400 hover:text-white'
            }`}
          >
            Arch.js
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-xs text-slate-300 min-h-[260px] max-h-[340px] overflow-y-auto">
        {activeTab === 'diagnostics' && (
          <div className="space-y-3.5 animate-fadeIn">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/30 border border-white/5">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-brand-blue" />
                <span className="text-slate-300">Backend API Gateway</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {serverStatus.status === 'healthy' ? 'Express REST Active' : 'Online (Ready)'}
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/30 border border-white/5">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-brand-violet" />
                <span className="text-slate-300">Database Layer</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30 text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                {serverStatus.database?.status === 'connected' ? 'MongoDB Connected' : 'Mongoose Service Ready'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2.5 rounded bg-black/20 border border-white/5">
                <div className="text-slate-400">Algorithmic Rank</div>
                <div className="font-semibold text-white mt-0.5 text-xs text-brand-cyan">99.50%ile (National)</div>
              </div>
              <div className="p-2.5 rounded bg-black/20 border border-white/5">
                <div className="text-slate-400">DSA Practice</div>
                <div className="font-semibold text-white mt-0.5 text-xs text-emerald-400">200+ LeetCode / GFG</div>
              </div>
              <div className="p-2.5 rounded bg-black/20 border border-white/5">
                <div className="text-slate-400">Graduation Target</div>
                <div className="font-semibold text-white mt-0.5 text-xs text-amber-400">2027 (UCER Prayagraj)</div>
              </div>
              <div className="p-2.5 rounded bg-black/20 border border-white/5">
                <div className="text-slate-400">Security Architecture</div>
                <div className="font-semibold text-white mt-0.5 text-xs text-brand-violet">JWT / HMAC / Rate-Limit</div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 border-t border-white/5 pt-2 flex items-center justify-between">
              <span>Environment: Node v24 LTS + Vite + Tailwind</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> All systems nominal
              </span>
            </div>
          </div>
        )}

        {activeTab === 'repl' && (
          <div className="space-y-2 animate-fadeIn">
            <div className="space-y-1.5">
              {terminalLogs.map((log, index) => (
                <div key={index} className="leading-relaxed">
                  {log.type === 'sys' && <span className="text-slate-400">{log.text}</span>}
                  {log.type === 'info' && <span className="text-brand-blue">{log.text}</span>}
                  {log.type === 'input' && <span className="text-slate-200 font-semibold">{log.text}</span>}
                  {log.type === 'output' && <span className="text-slate-300">{log.text}</span>}
                  {log.type === 'success' && <span className="text-emerald-400 font-medium">{log.text}</span>}
                  {log.type === 'error' && <span className="text-rose-400">{log.text}</span>}
                </div>
              ))}
            </div>

            {/* Quick command buttons */}
            <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/5">
              <span className="text-[10px] text-slate-400 self-center mr-1">Presets:</span>
              {['status', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => runCommand(cmd)}
                  className="px-2 py-0.5 text-[10px] bg-slate-800/80 hover:bg-brand-blue/20 hover:text-brand-blue text-slate-300 rounded border border-white/10 transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Input prompt */}
            <div className="flex items-center gap-2 pt-2 text-slate-200">
              <span className="text-brand-blue font-bold">&gt;</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command and hit Enter..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-slate-600"
                autoFocus
              />
              <button
                onClick={() => runCommand(terminalInput)}
                className="p-1 hover:text-brand-blue text-slate-400"
                aria-label="Run command"
              >
                <Play className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="relative group animate-fadeIn">
            <button
              onClick={() => copyCode(`// Vinay Pal — Core Developer Profile
const engineer = {
  name: "Vinay Pal",
  degree: "B.Tech CSE (2023 - 2027)",
  college: "United College of Engineering and Research, Prayagraj",
  specialization: "Full-Stack MERN Architecture",
  metrics: {
    youngTurksPercentile: 99.50,
    dsaSolved: 200,
    certifications: ["IBM SkillsBuild MERN", "PBEL Internship"]
  },
  availableForHire: true
};`)}
              className="absolute top-0 right-0 p-1.5 text-slate-400 hover:text-white bg-black/40 rounded border border-white/10 transition-colors"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            <pre className="text-slate-300 leading-relaxed overflow-x-auto text-[11px] pr-8">
              <code>{`// Vinay Pal — Core Developer Profile
const engineer = {
  name: "Vinay Pal",
  degree: "B.Tech CSE (2023 - 2027)",
  college: "United College of Engineering & Research",
  specialization: "Full-Stack MERN Architecture",
  metrics: {
    youngTurksPercentile: 99.50,
    dsaProblemsSolved: 200,
    certifications: ["IBM SkillsBuild MERN", "PBEL Internship"]
  },
  coreStack: ["React 19", "Node.js", "Express", "MongoDB", "Tailwind"],
  availableForHire: true
};`}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
