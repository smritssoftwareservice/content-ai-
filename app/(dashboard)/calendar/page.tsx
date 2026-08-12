'use client';

import React, { useState } from 'react';
import { Calendar as CalendarIcon, Plus, Trash2, CheckCircle2, Clock, Share2, AlertCircle } from 'lucide-react';

export default function ContentCalendarPage() {
  const [events, setEvents] = useState([
    { id: '1', title: '5 Secret Features in Claude 3.5', platform: 'Instagram', scheduledAt: '2026-08-15 10:00 AM', status: 'Scheduled' },
    { id: '2', title: 'How I Built a Full Stack SaaS with AI', platform: 'YouTube Shorts', scheduledAt: '2026-08-16 02:00 PM', status: 'Ready' },
    { id: '3', title: 'Why Engineers Are Switching to Cursor', platform: 'LinkedIn', scheduledAt: '2026-08-17 09:00 AM', status: 'Draft' },
  ]);

  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [dateTime, setDateTime] = useState('');

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !dateTime) return;

    setEvents([
      ...events,
      {
        id: Date.now().toString(),
        title,
        platform,
        scheduledAt: dateTime,
        status: 'Scheduled',
      },
    ]);

    setTitle('');
    setDateTime('');
  };

  const handleDelete = (id: string) => {
    setEvents(events.filter((ev) => ev.id !== id));
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <CalendarIcon className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <span>Content Calendar</span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Schedule & Queue
              </span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Plan, queue, and schedule your social media posts across Instagram, YouTube Shorts, LinkedIn, and X.
            </p>
          </div>
        </div>
      </div>

      {/* Manual Publishing Info Banner */}
      <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-300 flex items-center gap-3">
        <AlertCircle className="h-5 w-5 shrink-0 text-amber-400" />
        <span>
          <strong>Manual Publishing Helper Active:</strong> Direct automated publishing requires official API tokens in Social Settings. Use copy & download actions for zero-cost publishing.
        </span>
      </div>

      {/* Add New Scheduled Event Form */}
      <form onSubmit={handleAddEvent} className="glass-panel p-6 rounded-3xl space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Content Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white"
              placeholder="e.g. Claude 3.5 Reel"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Target Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white"
            >
              <option value="Instagram" className="bg-slate-900">Instagram</option>
              <option value="YouTube Shorts" className="bg-slate-900">YouTube Shorts</option>
              <option value="LinkedIn" className="bg-slate-900">LinkedIn</option>
              <option value="X" className="bg-slate-900">X (Twitter)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Date & Time</label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 rounded-2xl glass-button-primary font-bold text-sm text-white flex items-center justify-center gap-2 shadow-lg"
        >
          <Plus className="h-4 w-4" />
          <span>Add Scheduled Event</span>
        </button>
      </form>

      {/* Events List */}
      <div className="glass-panel p-6 rounded-3xl space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Scheduled Queue ({events.length})</h3>

        <div className="space-y-3">
          {events.map((ev) => (
            <div key={ev.id} className="p-4 rounded-2xl glass-card flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{ev.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5 font-mono">
                    <span className="text-indigo-300 font-semibold">{ev.platform}</span>
                    <span>•</span>
                    <span>{ev.scheduledAt}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                  ev.status === 'Scheduled'
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                    : ev.status === 'Ready'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  {ev.status}
                </span>

                <button
                  onClick={() => handleDelete(ev.id)}
                  className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-white/10 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
