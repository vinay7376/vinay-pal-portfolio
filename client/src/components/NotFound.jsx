import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import VpLogo from './VpLogo';

export default function NotFound({ onGoHome }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-dark-bg text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-md w-full glass-panel p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6">
        <div className="flex justify-center">
          <VpLogo showText={false} className="w-14 h-14" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-extrabold font-mono text-gradient-blue">404</span>
          <h1 className="text-xl font-bold text-white">Route Not Found</h1>
          <p className="text-xs text-slate-400 leading-relaxed">
            The page or resource you are looking for has been moved, removed, or never existed in this application.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onGoHome}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}
