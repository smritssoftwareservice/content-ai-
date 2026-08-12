import React from 'react';
import { FileText, Video } from 'lucide-react';

export default function ScriptStudioPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <FileText className="h-8 w-8 text-indigo-400" />
          <span>Script Studio</span>
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Pacing-optimized 10-second vertical video scripts with visual cues & text overlays.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-bold text-indigo-400">10-SECOND REEL FRAMEWORK</span>
          <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 text-xs font-bold">Pacing Score: 98%</span>
        </div>

        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-amber-400 font-bold block mb-1">0-2 SEC (HOOK):</span>
            <p className="text-slate-200">"Stop scrolling! Claude 3.5 Sonnet just dropped a feature nobody is talking about."</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-indigo-400 font-bold block mb-1">2-7 SEC (VALUE):</span>
            <p className="text-slate-200">"You can now run full interactive React apps inside your conversation artifacts in real-time."</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
            <span className="text-emerald-400 font-bold block mb-1">7-10 SEC (CTA):</span>
            <p className="text-slate-200">"Comment 'AI' below and I'll send you the starter guide!"</p>
          </div>
        </div>
      </div>
    </div>
  );
}
