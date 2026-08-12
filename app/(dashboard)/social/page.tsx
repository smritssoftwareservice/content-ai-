'use client';

import React, { useState } from 'react';
import { Share2, CheckCircle2, Download, Copy, ExternalLink, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function SocialAccountsPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const accounts = [
    { platform: 'Instagram', name: '@techcreator_ai', connected: true, isDemo: true, followers: '12.4K' },
    { platform: 'YouTube Shorts', name: 'Tech Pulse AI', connected: true, isDemo: true, followers: '45.2K' },
    { platform: 'LinkedIn', name: 'Alex Creator', connected: true, isDemo: true, followers: '8.9K' },
    { platform: 'X (Twitter)', name: '@alex_tech_ai', connected: false, isDemo: true, followers: '15.1K' },
    { platform: 'TikTok', name: '@techpulse', connected: false, isDemo: true, followers: '28.0K' },
  ];

  const sampleCaption = `🚀 Top 5 AI tools in 2026! Save this reel for later 📌 #SMRITSAI #TechCreator #AI`;

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <Share2 className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <span>Social Accounts & Publishing Helper</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Connect official social media accounts or use zero-cost quick publish helpers (Copy Captions & Download Media).
            </p>
          </div>
        </div>
      </div>

      {/* Connected Social Accounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((acc, idx) => (
          <div key={idx} className="p-6 rounded-3xl glass-panel space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-sm font-bold text-white">{acc.platform}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                  acc.connected
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-slate-800 text-slate-400 border border-white/10'
                }`}>
                  {acc.connected ? 'Connected (Demo)' : 'Not Connected'}
                </span>
              </div>
              <p className="text-xs font-mono text-indigo-300">{acc.name}</p>
              <p className="text-xs text-slate-400 mt-1">Audience: <strong>{acc.followers}</strong></p>
            </div>

            {/* Helper Actions */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <button
                onClick={() => copyText(sampleCaption, `cap-${idx}`)}
                className="w-full py-2.5 rounded-xl glass-button-secondary text-xs font-bold flex items-center justify-center gap-2"
              >
                <Copy className="h-3.5 w-3.5" />
                <span>{copied === `cap-${idx}` ? 'Caption Copied!' : 'Copy Post Caption'}</span>
              </button>
              <Link
                href="/video-studio"
                className="w-full py-2.5 rounded-xl glass-button-primary text-xs font-bold text-white text-center flex items-center justify-center gap-2"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Get 10s Video MP4</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
