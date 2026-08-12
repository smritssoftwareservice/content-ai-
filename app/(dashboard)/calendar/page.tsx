import React from 'react';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';

export default function ContentCalendarPage() {
  const events = [
    { title: 'Claude 3.5 Sonnet Reel', platform: 'Instagram', date: '2026-08-14', status: 'SCHEDULED' },
    { title: '5 AI Tools Breakdown', platform: 'YouTube', date: '2026-08-16', status: 'READY' },
    { title: 'SaaS Engineering Post', platform: 'LinkedIn', date: '2026-08-18', status: 'DRAFT' },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <CalendarIcon className="h-8 w-8 text-indigo-400" />
            <span>Content Calendar</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Organize, reschedule, & manage your upcoming video and social post queues.
          </p>
        </div>

        <button className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-md">
          <Plus className="h-4 w-4" />
          <span>Schedule Content</span>
        </button>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {events.map((evt, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 text-[10px] font-bold uppercase">{evt.platform}</span>
                <span className="text-[10px] font-bold text-emerald-400">{evt.status}</span>
              </div>
              <h4 className="text-sm font-bold text-white">{evt.title}</h4>
              <span className="text-xs text-slate-400 block">Scheduled: {evt.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
