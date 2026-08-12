import React from 'react';
import { Settings, ShieldCheck, Key } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <Settings className="h-8 w-8 text-indigo-400" />
          <span>System Settings & API Keys</span>
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Configure zero-cost providers or add optional external API credentials.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-emerald-400" />
          <span>Current Active Provider Configuration</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">AI Provider</span>
            <strong className="text-indigo-400 font-sans">demo</strong>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">Video Provider</span>
            <strong className="text-indigo-400 font-sans">local (FFmpeg)</strong>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">Image Provider</span>
            <strong className="text-indigo-400 font-sans">template (SVG)</strong>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center">
            <span className="text-slate-400">Social Provider</span>
            <strong className="text-indigo-400 font-sans">demo</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
