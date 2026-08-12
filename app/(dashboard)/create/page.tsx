'use client';

import React, { useState } from 'react';
import { 
  Wand2, 
  Sparkles, 
  Copy, 
  Check, 
  Video, 
  Image as ImageIcon, 
  Share2, 
  Loader2,
  Play,
  Download,
  Flame,
  FileText
} from 'lucide-react';

export default function GenerateEverythingPage() {
  const [topic, setTopic] = useState('5 Secret AI Features in 2026');
  const [niche, setNiche] = useState('AI');
  const [style, setStyle] = useState('Energetic');
  const [duration, setDuration] = useState('10 sec');
  const [loading, setLoading] = useState(false);
  const [renderingVideo, setRenderingVideo] = useState(false);
  const [packageData, setPackageData] = useState<any>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/ai/generate-everything', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, niche, style, duration }),
      });
      const data = await res.json();
      
      // Generate instant free AI image via Pollinations
      const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
        `Cinematic style, ${topic}, high tech viral social media thumbnail`
      )}?width=1080&height=1920&seed=${Math.floor(Math.random() * 100000)}&nologo=true&model=flux`;

      setPackageData({
        ...data,
        imageUrl,
      });
    } catch (err) {
      console.error('Error generating package:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRenderVideo = async () => {
    if (!packageData) return;
    setRenderingVideo(true);

    try {
      const script = packageData.scripts?.[0]?.voiceover || 'Stop scrolling! Here is the breakdown.';
      const res = await fetch('/api/videos/render', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: topic,
          scriptText: script,
        }),
      });
      const data = await res.json();
      setPackageData({
        ...packageData,
        videoUrl: data.videoUrl,
      });
    } catch (err) {
      console.error('Error rendering video:', err);
    } finally {
      setRenderingVideo(false);
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30">
            <Wand2 className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <span>Generate Everything Studio</span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                1-Click Package
              </span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Turn one simple topic into viral hooks, 10s scripts, AI images, video reels, and multi-platform captions instantly.
            </p>
          </div>
        </div>
      </div>

      {/* Input Form Card */}
      <form onSubmit={handleGenerate} className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase text-slate-300 tracking-wider mb-2">
            Target Topic / Content Keyword
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. 5 AI tools every developer needs"
            className="w-full px-4 py-3.5 rounded-2xl glass-input text-white font-medium focus:ring-2 focus:ring-indigo-500 text-sm"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 tracking-wider mb-2">Niche</label>
            <select
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-white text-xs"
            >
              <option value="AI" className="bg-slate-900">AI & Tech</option>
              <option value="Coding" className="bg-slate-900">Software Engineering</option>
              <option value="SaaS" className="bg-slate-900">SaaS & Startups</option>
              <option value="Gadgets" className="bg-slate-900">Gadgets & Devices</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 tracking-wider mb-2">Style</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-white text-xs"
            >
              <option value="Energetic" className="bg-slate-900">Energetic & Fast</option>
              <option value="Educational" className="bg-slate-900">Educational Breakdown</option>
              <option value="Storytelling" className="bg-slate-900">Storytelling Narrative</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 tracking-wider mb-2">Format</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-white text-xs"
            >
              <option value="10 sec" className="bg-slate-900">10 sec Vertical Reel (9:16)</option>
              <option value="15 sec" className="bg-slate-900">15 sec Short Video</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-2xl glass-button-primary font-black text-sm text-white flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-transform"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin text-indigo-200" />
              <span>Generating Free AI Content Package...</span>
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              <span>GENERATE COMPLETE VIRAL PACKAGE</span>
            </>
          )}
        </button>
      </form>

      {/* Generated Outputs Package */}
      {packageData && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Section 1: Viral Hooks */}
          <div className="glass-panel p-6 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Flame className="h-5 w-5 text-orange-400" />
                <span>1. Viral Attention Hooks</span>
              </h3>
              <span className="text-xs font-mono text-indigo-400">Gemini AI / Demo Engine</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packageData.hooks?.map((h: any, idx: number) => (
                <div key={idx} className="p-4 rounded-2xl glass-card flex items-start justify-between gap-3">
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[10px] font-bold uppercase tracking-wider">
                      {h.category}
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white mt-2">
                      &quot;{h.text}&quot;
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(h.text, `hook-${idx}`)}
                    className="p-2 rounded-xl glass-button-secondary shrink-0"
                  >
                    {copiedField === `hook-${idx}` ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 & 3: Script & Free AI Image Thumbnail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Script Column */}
            <div className="lg:col-span-7 glass-panel p-6 rounded-3xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="h-5 w-5 text-indigo-400" />
                <span>2. 10-Second Viral Video Script</span>
              </h3>

              {packageData.scripts?.map((s: any, idx: number) => (
                <div key={idx} className="space-y-3">
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">VOICEOVER AUDIO:</span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                      {s.voiceover}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl glass-card text-xs text-slate-300 space-y-1">
                    <div>🎬 <strong className="text-white">Visual Cues:</strong> {s.visuals}</div>
                    <div>🎯 <strong className="text-white">Call to Action:</strong> {s.cta}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Image Column */}
            <div className="lg:col-span-5 glass-panel p-6 rounded-3xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-purple-400" />
                <span>3. Free AI Image Thumbnail</span>
              </h3>

              <div className="rounded-2xl overflow-hidden glass-card aspect-[9/16] max-h-[380px] mx-auto border border-white/10 relative">
                <img src={packageData.imageUrl} alt="Generated AI Thumbnail" className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl glass-panel text-[11px] font-mono text-center text-white">
                  ⚡ Pollinations.ai Flux Model
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Reel Rendering */}
          <div className="glass-panel p-6 rounded-3xl space-y-4 border border-indigo-500/30">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Video className="h-5 w-5 text-indigo-400" />
                  <span>4. Render 10s Video Reel</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  1080×1920 9:16 vertical reel with captions and watermark.
                </p>
              </div>

              <button
                onClick={handleRenderVideo}
                disabled={renderingVideo}
                className="px-5 py-3 rounded-xl glass-button-primary font-bold text-xs text-white flex items-center justify-center gap-2"
              >
                {renderingVideo ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                <span>{renderingVideo ? 'Rendering Reel...' : 'Render Free Reel Video'}</span>
              </button>
            </div>

            {packageData.videoUrl && (
              <div className="p-4 rounded-2xl glass-card flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Video className="h-5 w-5 text-emerald-400" />
                  <span className="text-xs font-bold text-white">Rendered Video MP4 Ready!</span>
                </div>
                <a
                  href={packageData.videoUrl}
                  download="smrits-reel.mp4"
                  className="px-4 py-2 rounded-xl glass-button-primary text-xs font-bold flex items-center gap-2"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download MP4</span>
                </a>
              </div>
            )}
          </div>

          {/* Section 5: Captions */}
          <div className="glass-panel p-6 rounded-3xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Share2 className="h-5 w-5 text-pink-400" />
              <span>5. Multi-Platform Captions</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl glass-card space-y-2">
                <span className="text-xs font-bold text-pink-400 uppercase">Instagram Caption</span>
                <p className="text-xs text-slate-300 whitespace-pre-wrap">{packageData.captions?.instagram}</p>
              </div>

              <div className="p-4 rounded-2xl glass-card space-y-2">
                <span className="text-xs font-bold text-blue-400 uppercase">LinkedIn Post</span>
                <p className="text-xs text-slate-300 whitespace-pre-wrap">{packageData.captions?.linkedin}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
