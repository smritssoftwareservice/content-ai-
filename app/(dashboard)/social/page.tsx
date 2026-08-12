import React from 'react';
import { Share2, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function SocialAccountsPage() {
  const accounts = [
    { platform: 'Instagram', name: '@TechPulseAI', connected: true, isDemo: true },
    { platform: 'YouTube', name: 'Tech Pulse AI', connected: true, isDemo: true },
    { platform: 'LinkedIn', name: 'Alex TechCreator', connected: true, isDemo: true },
    { platform: 'X / Twitter', name: '@TechPulseAI', connected: false, isDemo: true },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <Share2 className="h-8 w-8 text-indigo-400" />
          <span>Social Account Connections</span>
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Manage official social API integrations or operate in Demo mode.
        </p>
      </div>

      <div className="space-y-4">
        {accounts.map((acc, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-xl bg-slate-800 flex items-center justify-center font-bold text-white text-xs">
                {acc.platform[0]}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">{acc.platform}</h4>
                <span className="text-xs text-slate-400">{acc.name}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {acc.isDemo && (
                <span className="px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 text-[10px] font-bold">
                  DEMO PROVIDER ACTIVE
                </span>
              )}
              <button className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                acc.connected ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-indigo-600 text-white hover:bg-indigo-500'
              }`}>
                {acc.connected ? 'Connected (Demo)' : 'Connect Account'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
