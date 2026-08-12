import React from 'react';
import { Palette, Check } from 'lucide-react';
import { prisma } from '@/lib/db/prisma';

export default async function BrandKitPage() {
  const brand = await prisma.brandKit.findFirst();

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-black text-white flex items-center gap-3">
          <Palette className="h-8 w-8 text-indigo-400" />
          <span>Brand Kit Studio</span>
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Automate your visual identity across every generated image, video, & subtitle overlay.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Primary Color</label>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl border border-slate-700 shadow-md" style={{ backgroundColor: brand?.primaryColor || '#6366F1' }} />
              <input type="text" defaultValue={brand?.primaryColor || '#6366F1'} className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm font-mono" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Secondary Color</label>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl border border-slate-700 shadow-md" style={{ backgroundColor: brand?.secondaryColor || '#10B981' }} />
              <input type="text" defaultValue={brand?.secondaryColor || '#10B981'} className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm font-mono" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Default Username / Handle</label>
            <input type="text" defaultValue={brand?.username || '@TechPulseAI'} className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm font-medium" />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Watermark Text</label>
            <input type="text" defaultValue={brand?.watermarkText || 'SMRITS AI'} className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm font-medium" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-300 mb-2">Default CTA Text</label>
          <input type="text" defaultValue={brand?.ctaText || 'Follow @TechPulseAI for daily AI breakdowns!'} className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm font-medium" />
        </div>
      </div>
    </div>
  );
}
