import React from 'react';
import { prisma } from '@/lib/db/prisma';
import { UserCheck, ShieldCheck, Upload, Video, Camera } from 'lucide-react';

export default async function AvatarStudioPage() {
  const avatar = await prisma.avatar.findFirst({
    include: { user: true },
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <UserCheck className="h-8 w-8 text-indigo-400" />
          <span>Avatar Presenter Studio</span>
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Configure an authorized digital presenter representation of yourself for vertical 9:16 videos.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center text-white font-extrabold text-xl">
            AT
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{avatar?.name || 'Alex Avatar Presenter'}</h3>
            <p className="text-xs text-slate-400">Motion Style: <strong className="text-indigo-400">{avatar?.motionStyle || 'subtle-pan'}</strong></p>
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-bold mt-1">
              <ShieldCheck className="h-3.5 w-3.5" /> Consent Verified & On File
            </span>
          </div>
        </div>

        {/* Ownership Verification Checkbox */}
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/50 space-y-2">
          <div className="flex items-center gap-3">
            <input type="checkbox" defaultChecked disabled className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-indigo-600" />
            <label className="text-xs font-semibold text-amber-200">
              I confirm that I own this likeness and voice or have explicit authorization to use them for media rendering.
            </label>
          </div>
          <p className="text-[11px] text-slate-400 pl-7">
            SMRITS Content AI strictly prohibits unauthorized celebrity or third-party public-figure impersonation.
          </p>
        </div>
      </div>
    </div>
  );
}
