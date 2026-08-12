'use client';

import React, { useState } from 'react';
import { Image as ImageIcon, Sparkles, Download, Copy, Check, RefreshCw, Wand2 } from 'lucide-react';

export default function ImageStudioPage() {
  const [prompt, setPrompt] = useState('Cyberpunk software engineer coding high tech AI app in dark neon studio');
  const [style, setStyle] = useState('Cinematic');
  const [aspect, setAspect] = useState('9:16');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const [result, setResult] = useState<{
    imageUrl: string;
    prompt: string;
    provider: string;
  }>({
    imageUrl: `https://image.pollinations.ai/prompt/${encodeURIComponent(
      'Cinematic style, Cyberpunk software engineer coding high tech AI app in dark neon studio'
    )}?width=1080&height=1920&seed=849201&nologo=true&model=flux`,
    prompt: 'Cinematic style, Cyberpunk software engineer coding high tech AI app in dark neon studio',
    provider: 'Pollinations.ai Free AI (Flux Engine)',
  });

  const presetPrompts = [
    'Futuristic AI robot creator presenting high-tech viral reel in glowing neon studio',
    '3D isometric glassmorphism workstation with floating code screens and purple gradient lights',
    'Ultra-detailed aesthetic tech influencer holding smartphone with holographic social media metrics',
    'Minimalist modern tech workspace setup with dark background and vibrant teal accent lights',
  ];

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/image/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, style, aspect }),
      });
      const data = await res.json();
      if (data.success) {
        setResult({
          imageUrl: data.imageUrl,
          prompt: data.prompt,
          provider: data.provider,
        });
      }
    } catch (err) {
      console.error('Image generation error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(result.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 glass-panel p-6 rounded-3xl">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
              <ImageIcon className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
                <span>Free AI Image Studio</span>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                  Unlimited Free
                </span>
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Powered by Pollinations.ai & Flux Engine. Generate stunning 8K AI artwork, thumbnails & social graphics for 0$.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Panel */}
        <div className="lg:col-span-6 space-y-6 glass-panel p-6 rounded-3xl">
          <form onSubmit={handleGenerate} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Describe Image Prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                placeholder="Enter prompt description..."
                className="w-full rounded-2xl glass-input p-4 text-sm text-slate-100 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Presets */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                <span>Quick Prompt Inspiration</span>
              </label>
              <div className="space-y-2">
                {presetPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPrompt(p)}
                    className="w-full text-left text-xs p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all truncate"
                  >
                    ✨ {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Style & Aspect Ratio */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Visual Style
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full rounded-xl glass-input p-3 text-xs text-slate-200"
                >
                  <option value="Cinematic" className="bg-slate-900">Cinematic Studio</option>
                  <option value="Cyberpunk" className="bg-slate-900">Cyberpunk Neon</option>
                  <option value="3D Render" className="bg-slate-900">3D Isometric</option>
                  <option value="Photorealistic" className="bg-slate-900">Photorealistic 8K</option>
                  <option value="Anime" className="bg-slate-900">Anime / Digital Art</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Aspect Ratio
                </label>
                <select
                  value={aspect}
                  onChange={(e) => setAspect(e.target.value)}
                  className="w-full rounded-xl glass-input p-3 text-xs text-slate-200"
                >
                  <option value="9:16" className="bg-slate-900">9:16 Vertical (Reels/Shorts)</option>
                  <option value="16:9" className="bg-slate-900">16:9 Landscape (YouTube)</option>
                  <option value="1:1" className="bg-slate-900">1:1 Square (Instagram)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-2xl glass-button-primary font-bold text-sm text-white flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-transform"
            >
              {loading ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin text-indigo-200" />
                  <span>Generating AI Image...</span>
                </>
              ) : (
                <>
                  <Wand2 className="h-4 w-4" />
                  <span>Generate Free AI Image Now</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Preview Panel */}
        <div className="lg:col-span-6 space-y-4 glass-panel p-6 rounded-3xl">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              AI Render Canvas Preview
            </h3>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {result.provider}
            </span>
          </div>

          {/* Render Frame */}
          <div className={`relative rounded-2xl overflow-hidden glass-card border border-white/10 flex items-center justify-center bg-slate-950/80 ${
            aspect === '9:16' ? 'aspect-[9/16] max-h-[540px]' : aspect === '16:9' ? 'aspect-[16/9]' : 'aspect-square'
          } mx-auto transition-all`}>
            {loading ? (
              <div className="text-center p-6 space-y-3">
                <RefreshCw className="h-8 w-8 text-indigo-400 animate-spin mx-auto" />
                <p className="text-xs text-indigo-300 font-semibold">Creating stunning artwork using Flux free tier...</p>
              </div>
            ) : (
              <img
                src={result.imageUrl}
                alt="AI Generated"
                className="w-full h-full object-cover transition-opacity duration-500"
                loading="lazy"
              />
            )}
          </div>

          {/* Prompt Details & Download Actions */}
          <div className="space-y-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-slate-300 flex items-center justify-between gap-2">
              <span className="truncate font-mono text-[11px]">{result.prompt}</span>
              <button
                onClick={handleCopyPrompt}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white shrink-0"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={result.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 rounded-xl glass-button-secondary font-bold text-xs flex items-center justify-center gap-2"
              >
                <span>View Full Size</span>
              </a>
              <a
                href={result.imageUrl}
                download="smrits-ai-image.jpg"
                target="_blank"
                rel="noreferrer"
                className="py-3 rounded-xl glass-button-primary font-bold text-xs text-white flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                <span>Download Image</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
