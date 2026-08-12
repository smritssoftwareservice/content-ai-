import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/db/prisma';
import { 
  Wand2, 
  TrendingUp, 
  Lightbulb, 
  FileText, 
  Video, 
  Image as ImageIcon, 
  Calendar, 
  Sparkles, 
  ArrowRight,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default async function DashboardPage() {
  const user = await prisma.user.findFirst({
    where: { email: 'creator@smrits.com' },
    include: { profile: true, usage: true },
  });

  const trends = await prisma.trend.findMany({
    take: 4,
    orderBy: { trendScore: 'desc' },
  });

  const usage = user?.usage || { ideasCount: 5, scriptsCount: 3, imagesCount: 2, videosCount: 1 };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 border border-indigo-800/60 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3 border border-indigo-500/30">
            <Zap className="h-3.5 w-3.5" />
            <span>AI Content Studio Active</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white">
            Good morning, {user?.name || 'Alex'} 👋
          </h1>
          <p className="text-slate-300 text-sm mt-1 max-w-xl">
            Channel: <span className="text-indigo-400 font-semibold">{user?.profile?.channelName || 'Tech Pulse AI'}</span> ({user?.profile?.primaryNiche || 'AI'} Niche)
          </p>
        </div>

        <Link
          href="/create"
          className="relative z-10 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/30 hover:scale-[1.02] transition-all flex items-center gap-2"
        >
          <Wand2 className="h-4 w-4" />
          <span>CREATE CONTENT PACKAGE</span>
        </Link>
      </div>

      {/* Usage & Performance Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: 'Ideas Generated', count: usage.ideasCount, limit: 20, icon: Lightbulb, color: 'text-amber-400' },
          { label: 'Scripts Created', count: usage.scriptsCount, limit: 20, icon: FileText, color: 'text-indigo-400' },
          { label: 'Images Rendered', count: usage.imagesCount, limit: 10, icon: ImageIcon, color: 'text-emerald-400' },
          { label: 'Videos Rendered', count: usage.videosCount, limit: 5, icon: Video, color: 'text-purple-400' },
        ].map((stat, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 block mb-1">{stat.label}</span>
              <div className="text-2xl font-black text-white font-mono">{stat.count} <span className="text-xs text-slate-500 font-normal">/ {stat.limit}</span></div>
            </div>
            <div className={`p-3 rounded-xl bg-slate-800/80 ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      {/* Trending Now & AI Recommendation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trend Radar Widget */}
        <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <TrendingUp className="h-5 w-5 text-indigo-400" />
              <span>TRENDING TECH NOW</span>
            </div>
            <Link href="/trends" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300">
              View All Trends →
            </Link>
          </div>

          <div className="space-y-3">
            {trends.map((trend) => (
              <div key={trend.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-all flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 text-[10px] font-bold uppercase">{trend.category}</span>
                    <span className="text-slate-400 text-xs">{trend.source}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">{trend.title}</h4>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="block text-xs font-mono font-bold text-emerald-400">Score {trend.trendScore}</span>
                    <span className="text-[10px] text-slate-400">{trend.freshness}</span>
                  </div>
                  <Link
                    href={`/create?topic=${encodeURIComponent(trend.title)}`}
                    className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all"
                  >
                    Use Trend
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Learning Recommendation Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-indigo-950/60 border border-indigo-800/50 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-3">
              <Sparkles className="h-4 w-4" />
              <span>AI RECOMMENDATION ENGINE</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Your AI News posts are performing +340% higher.
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Based on historical tech creator engagement algorithms, 10-second vertical reels breaking down newly released tools have the highest view retention.
            </p>
          </div>

          <Link
            href="/create?niche=AI&topic=New%20AI%20Tool%20Breakdown"
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
          >
            <span>Generate 10 New AI Ideas</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
