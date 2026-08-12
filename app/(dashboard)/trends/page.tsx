import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/db/prisma';
import { TrendingUp, Sparkles, ExternalLink, Zap } from 'lucide-react';

export default async function TrendsPage() {
  const trends = await prisma.trend.findMany({
    orderBy: { trendScore: 'desc' },
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-indigo-400" />
          <span>Tech Trend Radar</span>
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Automated RSS feed collection from top AI company blogs, Hacker News & developer hubs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trends.map((trend) => (
          <div key={trend.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md bg-indigo-950 text-indigo-400 text-xs font-bold uppercase">{trend.category}</span>
                <span className="text-xs font-mono font-bold text-emerald-400">Score {trend.trendScore}/100</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-snug">{trend.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">{trend.summary}</p>
              
              <div className="text-[11px] text-slate-400 flex items-center gap-2">
                <span>Source: <strong>{trend.source}</strong></span>
                <span>•</span>
                <span>Freshness: <strong className="text-indigo-400">{trend.freshness}</strong></span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href={trend.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
              >
                <span>Read Source</span>
                <ExternalLink className="h-3 w-3" />
              </a>

              <Link
                href={`/create?topic=${encodeURIComponent(trend.title)}`}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Turn Into Content</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
