'use client';

import React, { useState } from 'react';
import { Lightbulb, Sparkles, Wand2, FileText, Image as ImageIcon, Video, Bookmark, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function IdeasPage() {
  const [topic, setTopic] = useState('Claude 3.5 Sonnet');
  const [niche, setNiche] = useState('AI');
  const [platform, setPlatform] = useState('Instagram');
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState<any[]>([
    { id: '1', title: '5 Secret Features in Claude 3.5 You Didn\'t Know', hook: 'Stop using Claude until you watch this video!', description: 'Full breakdown of hidden features.', category: 'AI Tools', viralScore: 94, format: '10s Reel', platform: 'Instagram' },
    { id: '2', title: 'How I Built a Full Stack SaaS in 24 Hours with AI Agents', hook: 'You won\'t believe how fast AI built this SaaS app.', description: 'Step by step developer walkthrough.', category: 'SaaS', viralScore: 91, format: '10s Reel', platform: 'YouTube Shorts' },
    { id: '3', title: 'Why Senior Engineers Are Switching to Cursor IDE', hook: 'Is Cursor IDE replacing VS Code in 2026?', description: 'Testing speed and code output.', category: 'Coding', viralScore: 89, format: '10s Reel', platform: 'TikTok' },
  ]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/ideas/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, niche, platform }),
      });
      const data = await res.json();
      if (data.success && data.ideas) {
        setIdeas(data.ideas);
      }
    } catch (err) {
      console.error('Ideas generation error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Lightbulb className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <span>AI Idea Engine</span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Viral Tech Ideas
              </span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Generate high-probability viral content ideas with hooks, formats, and platform recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Input Generator Form */}
      <form onSubmit={handleGenerate} className="glass-panel p-6 rounded-3xl space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Topic / Keyword</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white"
              placeholder="e.g. New AI Model"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Niche</label>
            <select
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white"
            >
              <option value="AI" className="bg-slate-900">AI & Machine Learning</option>
              <option value="Coding" className="bg-slate-900">Software Engineering</option>
              <option value="SaaS" className="bg-slate-900">SaaS & Startups</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white"
            >
              <option value="Instagram" className="bg-slate-900">Instagram Reels</option>
              <option value="YouTube Shorts" className="bg-slate-900">YouTube Shorts</option>
              <option value="TikTok" className="bg-slate-900">TikTok</option>
              <option value="LinkedIn" className="bg-slate-900">LinkedIn</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-2xl glass-button-primary font-bold text-sm text-white flex items-center justify-center gap-2 shadow-lg"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-amber-200" />
              <span>Generating Viral Ideas...</span>
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>GENERATE IDEAS</span>
            </>
          )}
        </button>
      </form>

      {/* Ideas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ideas.map((idea, idx) => (
          <div key={idx} className="p-6 rounded-3xl glass-panel space-y-4 hover:border-amber-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold uppercase">
                  {idea.niche || idea.category || 'AI'}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400">Viral Score {idea.viralScore}/100</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">{idea.title}</h3>
              <p className="text-xs text-indigo-300 italic mb-2">&quot;{idea.hook}&quot;</p>
              <p className="text-xs text-slate-400 leading-relaxed">{idea.description}</p>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-2">
              <Link
                href={`/create?topic=${encodeURIComponent(idea.title)}`}
                className="flex-1 py-2.5 rounded-xl glass-button-primary font-bold text-xs text-white text-center flex items-center justify-center gap-1.5 shadow-md"
              >
                <Wand2 className="h-3.5 w-3.5" />
                <span>Generate Full Package</span>
              </Link>
              <Link
                href={`/video-studio?title=${encodeURIComponent(idea.title)}`}
                className="p-2.5 rounded-xl glass-button-secondary text-slate-200 hover:text-white"
                title="Create Video"
              >
                <Video className="h-4 w-4 text-purple-400" />
              </Link>
              <Link
                href={`/image-studio?prompt=${encodeURIComponent(idea.title)}`}
                className="p-2.5 rounded-xl glass-button-secondary text-slate-200 hover:text-white"
                title="Create Image"
              >
                <ImageIcon className="h-4 w-4 text-emerald-400" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
