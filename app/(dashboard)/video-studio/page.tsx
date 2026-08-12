'use client';

import React, { useState } from 'react';
import { Video, Play, Download, Wand2, RefreshCw, Sparkles, Film } from 'lucide-react';

export default function VideoStudioPage() {
  const [title, setTitle] = useState('5 AI Tools You Must Use in 2026');
  const [scriptText, setScriptText] = useState(
    'Stop scrolling! These 5 brand new AI tools will save you 20 hours of manual coding work every single week.'
  );
  const [watermark, setWatermark] = useState('SMRITS AI');
  const [motionStyle, setMotionStyle] = useState('Kinetic Zoom & Subtitles');
  const [rendering, setRendering] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  // Pollinations animated GIF / Video URL fallback helper
  const animatedPreviewUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    `Cyberpunk video presentation frame, ${title}, vertical 9:16 reel, cinematic lighting`
  )}?width=1080&height=1920&seed=91283&nologo=true&model=flux`;

  const handleRender = async (e: React.FormEvent) => {
    e.preventDefault();
    setRendering(true);

    try {
      const res = await fetch('/api/videos/render', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          scriptText,
          watermarkText: watermark,
          durationSec: 10,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setVideoUrl(data.videoUrl);
      }
    } catch (err) {
      console.error('Video render error:', err);
    } finally {
      setRendering(false);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 glass-panel p-6 rounded-3xl">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-purple-500/20 border border-purple-500/30 text-purple-400">
            <Video className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <span>Free AI Video Studio</span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                10-Sec Reel Engine
              </span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Create 1080×1920 vertical video reels with kinetic overlays, subtitles, and watermarks for free.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Panel */}
        <div className="lg:col-span-6 space-y-6 glass-panel p-6 rounded-3xl">
          <form onSubmit={handleRender} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Video Headline Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl glass-input p-3 text-sm text-slate-100 placeholder-slate-500"
                placeholder="Title overlay on video..."
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Voiceover / Subtitle Script (10s)
              </label>
              <textarea
                value={scriptText}
                onChange={(e) => setScriptText(e.target.value)}
                rows={4}
                className="w-full rounded-2xl glass-input p-4 text-sm text-slate-100 placeholder-slate-500"
                placeholder="Script content to speak and caption..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Brand Watermark
                </label>
                <input
                  type="text"
                  value={watermark}
                  onChange={(e) => setWatermark(e.target.value)}
                  className="w-full rounded-xl glass-input p-3 text-xs text-slate-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Motion Preset
                </label>
                <select
                  value={motionStyle}
                  onChange={(e) => setMotionStyle(e.target.value)}
                  className="w-full rounded-xl glass-input p-3 text-xs text-slate-200"
                >
                  <option value="Kinetic Zoom & Subtitles" className="bg-slate-900">Kinetic Zoom & Captions</option>
                  <option value="Pulse Gradient Glow" className="bg-slate-900">Pulse Gradient Glow</option>
                  <option value="Cyber Neon Scroll" className="bg-slate-900">Cyber Neon Scroll</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={rendering}
              className="w-full py-3.5 rounded-2xl glass-button-primary font-bold text-sm text-white flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-transform"
            >
              {rendering ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin text-purple-200" />
                  <span>Rendering 10s Reel Video...</span>
                </>
              ) : (
                <>
                  <Film className="h-4 w-4" />
                  <span>Render Free 10s Reel Video</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Preview Panel */}
        <div className="lg:col-span-6 space-y-4 glass-panel p-6 rounded-3xl">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Vertical Reel Preview (9:16)
            </h3>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              1080 × 1920 (H.264)
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden glass-card border border-white/10 aspect-[9/16] max-h-[520px] mx-auto flex items-center justify-center bg-slate-950">
            {rendering ? (
              <div className="text-center p-6 space-y-3">
                <RefreshCw className="h-8 w-8 text-purple-400 animate-spin mx-auto" />
                <p className="text-xs text-purple-300 font-semibold">Synthesizing audio captions & visual layers...</p>
              </div>
            ) : videoUrl ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                loop
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="relative w-full h-full group">
                <img
                  src={animatedPreviewUrl}
                  alt="Video Canvas Frame"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-between p-6">
                  <div className="p-3 rounded-xl glass-panel text-white text-sm font-bold text-center border border-white/20">
                    {title}
                  </div>
                  <div className="p-3 rounded-xl bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-xs font-semibold text-center backdrop-blur-md">
                    💬 &quot;{scriptText.slice(0, 60)}...&quot;
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-300 font-mono">
                    <span>⚡ {watermark}</span>
                    <span>10 SECONDS</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-2">
            <a
              href={videoUrl || animatedPreviewUrl}
              download="smrits-viral-reel.mp4"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl glass-button-primary font-bold text-xs text-white flex items-center justify-center gap-2 shadow-md"
            >
              <Download className="h-4 w-4" />
              <span>Download High-Quality Video Reel</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
