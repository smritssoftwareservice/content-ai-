'use client';

import React, { useState } from 'react';
import { 
  Folder, 
  Search, 
  Filter, 
  FileText, 
  Video, 
  Image as ImageIcon, 
  Trash2, 
  Download, 
  ExternalLink,
  Wand2
} from 'lucide-react';
import Link from 'next/link';

export default function ContentLibraryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('ALL');

  const [items, setItems] = useState([
    {
      id: '1',
      title: '5 Secret Features in Claude 3.5 Sonnet',
      type: 'PACKAGE',
      date: '2026-08-12',
      niche: 'AI',
      url: '/create?topic=5+Claude+3.5+Sonnet+Features+You+Missed',
    },
    {
      id: '2',
      title: 'Cyberpunk Presenter Studio Graphic',
      type: 'IMAGE',
      date: '2026-08-12',
      niche: 'AI',
      url: 'https://image.pollinations.ai/prompt/Cyberpunk%20tech%20presenter?width=1080&height=1920&nologo=true',
    },
    {
      id: '3',
      title: '10s Vertical Reel - Developer Automation',
      type: 'VIDEO',
      date: '2026-08-11',
      niche: 'Coding',
      url: '/video-studio',
    },
  ]);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'ALL' || item.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
            <Folder className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <span>Content Library & Assets</span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Search, filter, view, download, and manage all your generated content packages, scripts, images, and videos.
            </p>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="glass-panel p-4 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search saved content..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs text-white"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          {['ALL', 'PACKAGE', 'IMAGE', 'VIDEO'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                filterType === type
                  ? 'glass-button-primary text-white'
                  : 'glass-button-secondary text-slate-300'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-6 rounded-3xl glass-panel space-y-4 flex flex-col justify-between hover:border-purple-500/40 transition-all">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                  item.type === 'PACKAGE'
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    : item.type === 'IMAGE'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                }`}>
                  {item.type}
                </span>
                <span className="text-[11px] font-mono text-slate-400">{item.date}</span>
              </div>
              <h3 className="text-sm font-bold text-white line-clamp-2">{item.title}</h3>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
              <Link
                href={item.url}
                className="flex-1 py-2.5 rounded-xl glass-button-primary text-xs font-bold text-white text-center flex items-center justify-center gap-1.5"
              >
                <span>Open Asset</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>

              <button
                onClick={() => handleDelete(item.id)}
                className="p-2.5 rounded-xl text-slate-400 hover:text-red-400 hover:bg-white/10 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
