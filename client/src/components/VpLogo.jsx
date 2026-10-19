import React from 'react';

export default function VpLogo({ className = "w-10 h-10", showText = true }) {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className={`relative ${className} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        {/* Ambient glow behind logo */}
        <div className="absolute inset-0 bg-brand-blue/30 rounded-xl blur-md group-hover:bg-brand-violet/40 transition-colors duration-500" />
        
        <svg
          viewBox="0 0 100 100"
          className="relative w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <linearGradient id="vpBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.6)" />
              <stop offset="100%" stopColor="rgba(192, 132, 252, 0.2)" />
            </linearGradient>
          </defs>

          {/* Shield Base */}
          <rect
            x="6"
            y="6"
            width="88"
            height="88"
            rx="22"
            fill="#0b1120"
            stroke="url(#vpBorder)"
            strokeWidth="2.5"
            className="transition-all duration-300 group-hover:stroke-brand-blue"
          />

          {/* V Path */}
          <path
            d="M26 30 L45 70 L53 70 L62 48"
            stroke="url(#vpGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* P Path */}
          <path
            d="M56 70 L56 30 L70 30 C78 30 83 35 83 43 C83 51 78 56 70 56 L56 56"
            stroke="url(#vpGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Accent dot */}
          <circle cx="50" cy="78" r="3" fill="#38bdf8" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-bold tracking-tight text-white group-hover:text-brand-blue transition-colors text-base sm:text-lg flex items-center gap-1.5 font-sans">
            Vinay Pal
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          </span>
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
            Full-Stack SDE
          </span>
        </div>
      )}
    </div>
  );
}
