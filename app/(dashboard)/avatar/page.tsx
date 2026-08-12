'use client';

import React, { useState } from 'react';
import { UserCheck, Upload, CheckCircle2, Video, ShieldCheck, RefreshCw, Wand2 } from 'lucide-react';
import Link from 'next/link';

export default function AvatarStudioPage() {
  const [avatarName, setAvatarName] = useState('Alex Presenter');
  const [hasConsent, setHasConsent] = useState(true);
  const [avatarImage, setAvatarImage] = useState<string>(
    'https://image.pollinations.ai/prompt/Photorealistic%20headshot%20of%20a%20modern%20tech%20creator%20in%20studio?width=1080&height=1920&seed=49201&nologo=true'
  );
  const [motionStyle, setMotionStyle] = useState('subtle-pan');
  const [saving, setSaving] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setAvatarImage(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveAvatar = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hasConsent) return;
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      alert('Avatar saved successfully!');
    }, 1000);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <UserCheck className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2">
              <span>Creator Avatar Studio</span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Zero-Cost Motion Engine
              </span>
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Upload your own presenter photo to generate 9:16 vertical videos with subtle pan, zoom, and subtitle motion.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Upload Form */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-3xl space-y-6">
          <form onSubmit={handleSaveAvatar} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Avatar Presenter Name
              </label>
              <input
                type="text"
                value={avatarName}
                onChange={(e) => setAvatarName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white"
                required
              />
            </div>

            {/* Photo Upload Zone */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Upload Creator Portrait Photo
              </label>
              <label className="border-2 border-dashed border-white/15 hover:border-indigo-500/50 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer glass-card transition-all group">
                <Upload className="h-8 w-8 text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-white mb-1">Click to Upload Photo</span>
                <span className="text-[11px] text-slate-400">Supports JPG, PNG or WebP (Portrait 9:16 recommended)</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Motion Style Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Pan & Motion Preset
              </label>
              <select
                value={motionStyle}
                onChange={(e) => setMotionStyle(e.target.value)}
                className="w-full px-4 py-3 rounded-xl glass-input text-xs text-white"
              >
                <option value="subtle-pan" className="bg-slate-900">Subtle Pan & Kinetic Subtitles</option>
                <option value="zoom-in" className="bg-slate-900">Slow Zoom-In & Focus Highlight</option>
                <option value="pulse-glow" className="bg-slate-900">Neon Studio Gradient Pulse</option>
              </select>
            </div>

            {/* Required Consent Checkbox */}
            <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasConsent}
                  onChange={(e) => setHasConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded bg-slate-900 border-white/20 text-indigo-600 focus:ring-indigo-500"
                  required
                />
                <span className="text-xs text-slate-300 leading-relaxed font-medium">
                  I confirm that I own this image/voice or have explicit authorization to use it in video content generation.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={saving || !hasConsent}
              className="w-full py-3.5 rounded-2xl glass-button-primary font-bold text-sm text-white flex items-center justify-center gap-2 shadow-xl"
            >
              {saving ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin text-indigo-200" />
                  <span>Saving Creator Avatar...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Save Creator Avatar</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Live Avatar Preview */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-3xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Avatar Presenter Preview (9:16)
            </h3>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Active Presenter
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden glass-card aspect-[9/16] max-h-[500px] mx-auto border border-white/10 flex items-center justify-center bg-slate-950">
            <img
              src={avatarImage}
              alt="Avatar Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-end p-6">
              <div className="p-3 rounded-xl glass-panel text-white text-center border border-white/20">
                <span className="text-xs font-bold block">{avatarName}</span>
                <span className="text-[10px] text-indigo-300 font-mono">Motion: {motionStyle}</span>
              </div>
            </div>
          </div>

          <Link
            href={`/video-studio?avatarUrl=${encodeURIComponent(avatarImage)}`}
            className="w-full py-3 rounded-xl glass-button-primary font-bold text-xs text-white text-center flex items-center justify-center gap-2 shadow-md"
          >
            <Video className="h-4 w-4" />
            <span>Create 10s Video With This Avatar</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
