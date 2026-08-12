import React from 'react';
import { Terminal } from 'lucide-react';

export default function PromptsPage() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <Terminal className="h-8 w-8 text-indigo-400" />
          <span>Prompt Studio</span>
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Precision Midjourney, Flux, Stable Diffusion, & Sora prompts for tech content assets.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase font-mono">IMAGE PROMPT (Midjourney v6 / Flux)</h3>
        <p className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 leading-relaxed">
          Ultra-detailed cinematic studio photograph of a tech creator presenting a glowing holographic AI interface, neon cyan and purple highlights, 8k resolution, photorealistic, shallow depth of field, 9:16 aspect ratio --ar 9:16 --v 6.0
        </p>
      </div>
    </div>
  );
}
