'use client';

import React, { useState } from 'react';
import { Palette, CheckCircle2, RefreshCw, ShieldCheck } from 'lucide-react';

export default function BrandKitPage() {
  const [logoUrl, setLogoUrl] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#6366F1');
  const [secondaryColor, setSecondaryColor] = useState('#10B981');
  const [watermarkText, setWatermarkText] = useState('SMRITS AI');
  const [ctaText, setCtaText] = useState('Follow for more tech updates!');
  const [username, setUsername] = useState('@techcreator');
  const [saving, setSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert('Brand Kit settings updated!');
    }, 800);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
            <Palette className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Brand Kit Studio</h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Configure your brand colors, logo, watermark, and CTA overlays applied across generated graphics and videos.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSave} className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Primary Brand Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="h-10 w-16 rounded-lg bg-slate-900 border border-white/20 cursor-pointer"
              />
              <input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs font-mono text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Secondary Brand Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="h-10 w-16 rounded-lg bg-slate-900 border border-white/20 cursor-pointer"
              />
              <input
                type="text"
                value={secondaryColor}
                onChange={(e) => setSecondaryColor(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl glass-input text-xs font-mono text-white"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Brand Watermark Text
            </label>
            <input
              type="text"
              value={watermarkText}
              onChange={(e) => setWatermarkText(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Creator Social Handle
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            Default Video & Graphic Call to Action (CTA)
          </label>
          <input
            type="text"
            value={ctaText}
            onChange={(e) => setCtaText(e.target.value)}
            className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white"
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full py-3.5 rounded-2xl glass-button-primary font-bold text-sm text-white flex items-center justify-center gap-2 shadow-xl"
        >
          {saving ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin text-pink-200" />
              <span>Updating Brand Kit...</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="h-4 w-4" />
              <span>Save Brand Kit</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
