import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Video, 
  TrendingUp, 
  Wand2, 
  Image as ImageIcon, 
  UserCheck, 
  Calendar, 
  BarChart3, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Layers
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-400 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Zap className="h-5 w-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                SMRITS Content AI
              </span>
              <span className="block text-[10px] text-indigo-400 font-mono tracking-widest uppercase -mt-1">
                Smrits Software Services
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-indigo-400 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-indigo-400 transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-indigo-400 transition-colors">Zero-Cost MVP Mode</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              href="/login"
              className="text-sm font-semibold text-slate-300 hover:text-white px-4 py-2 rounded-lg transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Dashboard</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-600/30 to-purple-600/20 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-inner">
            <Sparkles className="h-3.5 w-3.5" />
            <span>The AI Content Operating System for Tech Creators</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-white mb-8">
            Turn One Tech Idea Into an <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400 bg-clip-text text-transparent">
              Entire Content Package.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover tech trends, generate ideas, create hooks and scripts, build avatar videos and images, and prepare content for every social platform from one AI workspace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/create"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-bold text-base shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
            >
              <Wand2 className="h-5 w-5" />
              <span>Start Creating Now</span>
            </Link>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-semibold text-base hover:bg-slate-850 transition-all flex items-center justify-center gap-2"
            >
              <span>See How It Works</span>
            </a>
          </div>

          {/* Core Workflow Loop Pill */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl">
            <div className="text-xs font-mono text-indigo-400 uppercase tracking-widest mb-4">
              Autonomous Creator Workflow Loop
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-xs font-semibold text-slate-300">
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">IDEA</span>
              <span className="text-slate-600">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">TREND</span>
              <span className="text-slate-600">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">HOOK</span>
              <span className="text-slate-600">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">SCRIPT</span>
              <span className="text-slate-600">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-700 text-indigo-300">IMAGE / VIDEO</span>
              <span className="text-slate-600">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">AVATAR</span>
              <span className="text-slate-600">→</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700">PUBLISH</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 border-t border-slate-800/80 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              7 Simple Steps to Viral Tech Content
            </h2>
            <p className="text-slate-400">
              From single keyword input to multi-platform publishing in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Enter an Idea', desc: 'Type any tech keyword like "New Claude Feature" or pick from Tech Trend Radar.' },
              { num: '02', title: 'Generate Package', desc: 'Get 3 Hooks, 3 Scripts, Prompts, Captions & Graphics instantly.' },
              { num: '03', title: 'Customize Avatar', desc: 'Apply your custom authorized creator presenter avatar and brand kit.' },
              { num: '04', title: 'Render 10s Video', desc: 'Local FFmpeg renders a 1080x1920 vertical video with subtitles.' },
              { num: '05', title: 'Multi-Platform', desc: 'Adapt captions for Instagram, YouTube Shorts, LinkedIn, X & TikTok.' },
              { num: '06', title: 'Schedule & Publish', desc: 'Queue events on your drag-and-drop Content Calendar.' },
              { num: '07', title: 'Analyze & Scale', desc: 'Track performance and generate automated recommendations.' },
            ].map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="text-3xl font-black text-indigo-500 font-mono mb-3">{step.num}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Built Specifically for Tech Creators
            </h2>
            <p className="text-slate-400">
              Everything you need to automate video scripts, prompts, graphics, and social posts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Tech Trend Radar', desc: 'Fetch top stories from official AI blogs, Hacker News & tech RSS feeds with custom trend scoring.' },
              { icon: Sparkles, title: 'AI Idea & Hook Studio', desc: 'Generate 10+ categorized viral hooks (Curiosity, Shock, FOMO, Contrarian) and 10s Reel scripts.' },
              { icon: Video, title: '10s Vertical Video Engine', desc: 'Render 1080x1920 9:16 vertical videos locally using FFmpeg with automated subtitles and brand watermarks.' },
              { icon: UserCheck, title: 'Avatar Presenter Studio', desc: 'Create authorized presenter video representations with pan/zoom motion and explicit consent protection.' },
              { icon: ImageIcon, title: 'Template Image Studio', desc: 'Zero-cost SVG template engine producing high-resolution graphics for Instagram, LinkedIn & X.' },
              { icon: Calendar, title: 'Content Calendar & Social', desc: 'Interactive calendar with platform-specific caption adaptation for YouTube, Instagram, LinkedIn & X.' },
            ].map((feat, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all group">
                <div className="h-12 w-12 rounded-xl bg-indigo-950 border border-indigo-800/60 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <feat.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Zero Cost Guarantee */}
      <section id="pricing" className="py-24 border-t border-slate-800/80 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-semibold mb-6">
            <ShieldCheck className="h-4 w-4" />
            <span>100% Zero-Cost Local MVP Guarantee</span>
          </div>

          <h2 className="text-4xl font-extrabold text-white mb-6">
            FREE MVP MODE
          </h2>

          <div className="text-6xl font-black text-white mb-6 font-mono">
            ₹0 <span className="text-lg font-normal text-slate-400">/ forever</span>
          </div>

          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-base">
            No mandatory paid API subscriptions required. SMRITS Content AI includes deterministic local AI providers, local FFmpeg video rendering, and template image generation right out of the box.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-2xl mx-auto mb-10 text-sm text-slate-300">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 20 Ideas/month</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 20 Scripts/month</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 10 Images/month</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 5 Videos/month</div>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all"
          >
            <span>Launch Free Workspace</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-sm">
          <div>
            <span className="font-bold text-white">SMRITS Content AI</span> — Smrits Software Services
          </div>
          <div className="text-slate-500 text-xs">
            Ideas. Scripts. Prompts. Avatars. Videos. Images. Publishing. — All in One AI Workspace.
          </div>
        </div>
      </footer>
    </div>
  );
}
