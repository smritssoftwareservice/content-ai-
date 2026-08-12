'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Zap, 
  LayoutDashboard, 
  Wand2, 
  Lightbulb, 
  TrendingUp, 
  Sparkles, 
  FileText, 
  Terminal, 
  UserCheck, 
  Image as ImageIcon, 
  Video, 
  Calendar as CalendarIcon, 
  Share2, 
  BarChart3, 
  Palette, 
  Settings,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Generate Everything', href: '/create', icon: Wand2, highlight: true },
    { label: 'Image Studio (Free AI)', href: '/image-studio', icon: ImageIcon },
    { label: 'Video Studio', href: '/video-studio', icon: Video },
    { label: 'Idea Engine', href: '/ideas', icon: Lightbulb },
    { label: 'Trend Radar', href: '/trends', icon: TrendingUp },
    { label: 'Hook Generator', href: '/hooks', icon: Sparkles },
    { label: 'Script Studio', href: '/scripts', icon: FileText },
    { label: 'Prompt Studio', href: '/prompts', icon: Terminal },
    { label: 'Avatar Studio', href: '/avatar', icon: UserCheck },
    { label: 'Content Calendar', href: '/calendar', icon: CalendarIcon },
    { label: 'Social Accounts', href: '/social', icon: Share2 },
    { label: 'Analytics', href: '/analytics', icon: BarChart3 },
    { label: 'Brand Kit', href: '/brand', icon: Palette },
    { label: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen text-slate-100 flex flex-col md:flex-row font-sans">
      {/* Mobile Top App Bar */}
      <header className="md:hidden sticky top-0 z-50 h-16 glass-panel px-4 flex items-center justify-between border-b border-white/10">
        <Link href="/dashboard" className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/30">
            <div className="h-full w-full bg-slate-950 rounded-[6px] flex items-center justify-center">
              <Zap className="h-4 w-4 text-indigo-400" />
            </div>
          </div>
          <span className="font-black text-base text-white tracking-wider">SMRITS AI</span>
        </Link>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Desktop Sidebar & Mobile Drawer Navigation */}
      <aside 
        className={`fixed md:sticky top-0 left-0 z-40 h-screen w-72 glass-panel border-r border-white/10 flex flex-col justify-between p-4 transition-transform duration-300 ease-in-out md:translate-x-0 ${
          mobileMenuOpen ? 'translate-x-0 bg-slate-950/95 backdrop-blur-2xl' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Logo Header (Desktop) */}
          <Link href="/dashboard" className="hidden md:flex items-center gap-3 px-3 py-3 mb-4 rounded-2xl glass-card">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-md shadow-indigo-500/30">
              <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Zap className="h-5 w-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <span className="font-black text-lg text-white tracking-tight">SMRITS AI</span>
              <span className="block text-[10px] text-slate-400 font-mono font-medium">Free AI Content Suite</span>
            </div>
          </Link>

          {/* Navigation Links List */}
          <nav className="flex-1 overflow-y-auto space-y-1.5 pr-1 py-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    item.highlight
                      ? 'glass-button-primary text-white shadow-lg'
                      : isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className={`h-4 w-4 ${isActive ? 'text-amber-400' : ''}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Free Tier Status Footer */}
        <div className="mt-3 p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs backdrop-blur-md">
          <div className="flex items-center gap-2 text-amber-400 font-bold mb-1">
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            <span>100% FREE AI ACTIVE</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Pollinations.ai Image & Gemini Free tier engines active. Zero cost generation!
          </p>
        </div>
      </aside>

      {/* Backdrop overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)} 
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Main App Content Container */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="hidden md:flex h-16 glass-panel border-b border-white/10 px-8 items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
            <span>SMRITS Content AI</span>
            <span className="text-slate-600">/</span>
            <span className="text-white font-bold bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
              Free Creation Studio
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/image-studio"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-button-secondary text-xs font-bold"
            >
              <ImageIcon className="h-4 w-4 text-amber-400" />
              <span>Pollinations Image Generator</span>
            </Link>
            <Link
              href="/create"
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-button-primary text-white font-bold text-xs shadow-md"
            >
              <Wand2 className="h-4 w-4" />
              <span>Generate Package</span>
            </Link>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-8 flex-1 overflow-y-auto max-w-7xl w-full mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
