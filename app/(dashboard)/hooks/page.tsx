import React from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

export default function HooksPage() {
  const hooks = [
    { category: 'Curiosity', text: "You're probably using Claude 3.5 Sonnet wrong. Here's why." },
    { category: 'Shock', text: 'This new AI update changes everything for full-stack developers!' },
    { category: 'Question', text: 'Did you know Next.js 15 can render React 19 server components automatically?' },
    { category: 'FOMO', text: "Don't fall behind! Every software team is adopting local AI agents in 2026." },
    { category: 'Contrarian', text: 'Why I stopped using standard VS Code extensions and switched to Cursor.' },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-indigo-400" />
          <span>Viral Hook Generator</span>
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          10+ high-retention opening hooks for short vertical video reels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hooks.map((h, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 hover:border-slate-700 transition-all">
            <span className="px-2.5 py-1 rounded-md bg-indigo-950 text-indigo-400 text-xs font-bold uppercase">{h.category}</span>
            <p className="text-sm font-bold text-white leading-snug">"{h.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
