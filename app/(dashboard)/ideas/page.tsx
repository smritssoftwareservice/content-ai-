import React from 'react';
import { prisma } from '@/lib/db/prisma';
import { Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default async function IdeasPage() {
  const user = await prisma.user.findFirst({
    where: { email: 'creator@smrits.com' },
  });

  const ideas = [
    { id: '1', title: '5 Claude 3.5 Sonnet Features You Missed', category: 'AI Tools', viralScore: 94, format: '10s Reel' },
    { id: '2', title: 'How I Built a Full Stack SaaS in 24 Hours with AI Agents', category: 'SaaS', viralScore: 91, format: '10s Reel' },
    { id: '3', title: 'Why Senior Engineers Are Switching to Cursor IDE', category: 'Coding', viralScore: 89, format: '10s Reel' },
    { id: '4', title: 'Top 3 Open Source AI Models Outperforming GPT-4', category: 'AI News', viralScore: 96, format: '10s Reel' },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <Lightbulb className="h-8 w-8 text-amber-400" />
          <span>AI Idea Engine</span>
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          High-probability viral tech ideas tailored to your channel niche ({user?.name || 'Creator'}).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ideas.map((idea) => (
          <div key={idea.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-amber-950/80 text-amber-400 text-xs font-bold uppercase">{idea.category}</span>
                <span className="text-xs font-mono font-bold text-emerald-400">Viral Score {idea.viralScore}/100</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{idea.title}</h3>
              <p className="text-xs text-slate-400">Recommended Format: <strong>{idea.format}</strong></p>
            </div>

            <Link
              href={`/create?topic=${encodeURIComponent(idea.title)}`}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs text-center flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <Sparkles className="h-4 w-4" />
              <span>Generate Full Package</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
