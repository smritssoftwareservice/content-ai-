import React from 'react';
import { BarChart3, TrendingUp, Eye, Heart, Share2, MessageSquare } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <BarChart3 className="h-8 w-8 text-indigo-400" />
          <span>Content Analytics & Insights</span>
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Performance metrics across multi-platform video reels & tech breakdowns.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: 'Total Views', count: '348,200', icon: Eye, color: 'text-indigo-400' },
          { label: 'Total Likes', count: '42,100', icon: Heart, color: 'text-rose-400' },
          { label: 'Total Shares', count: '12,400', icon: Share2, color: 'text-emerald-400' },
          { label: 'Comments', count: '3,890', icon: MessageSquare, color: 'text-amber-400' },
        ].map((item, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-1">{item.label}</span>
              <span className="text-2xl font-black text-white font-mono">{item.count}</span>
            </div>
            <div className={`p-3 rounded-xl bg-slate-800/80 ${item.color}`}>
              <item.icon className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-white">Top Performing Content Formats</h3>
        <div className="space-y-3">
          {[
            { format: '10s AI News Breakdown Reels', views: '210,000 views', rate: '92% completion rate' },
            { format: '5 Hidden Tools Comparison', views: '98,000 views', rate: '84% completion rate' },
            { format: 'Full-Stack Developer Tips', views: '40,200 views', rate: '71% completion rate' },
          ].map((row, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">{row.format}</h4>
                <span className="text-xs text-indigo-400">{row.rate}</span>
              </div>
              <span className="text-xs font-mono font-bold text-slate-300">{row.views}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
