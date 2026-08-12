# SMRITS Content AI

> **Company:** Smrits Software Services  
> **Tagline:** Turn One Tech Idea Into an Entire Content Package.  
> **Secondary Tagline:** Ideas. Scripts. Prompts. Avatars. Videos. Images. Publishing. — All in One AI Workspace.

---

## Overview

SMRITS Content AI is a full-stack AI content operating system designed specifically for tech creators, YouTubers, Instagram creators, SaaS builders, and gadget reviewers.

With a single prompt, SMRITS Content AI generates viral hooks, 10-second vertical scripts, image prompts, branded graphics, MP4 presenter videos, platform-adapted captions, and calendar events.

---

## Features

- ⚡ **Generate Everything Studio (`/create`):** One keyword creates hooks, scripts, video prompts, SVG graphics, captions, & platform posts simultaneously.
- 📡 **Tech Trend Radar (`/trends`):** Automated RSS parser scoring stories (0-100) from top AI blogs and developer forums.
- 🎥 **10s Vertical Video Engine (`/video-studio`):** Local FFmpeg rendering producing 1080x1920 9:16 vertical MP4 reels with animated text overlays.
- 🎨 **Zero-Cost SVG Image Studio (`/image-studio`):** Template-based vector graphics engine applying creator brand colors & code syntax overlays.
- 👤 **Avatar Presenter Studio (`/avatar`):** Authorized presenter profile setup with explicit consent verification.
- 📅 **Content Calendar & Social (`/calendar`, `/social`):** Drag-and-drop event scheduling and simulated/official platform publishing.

---

## Zero-Cost MVP Mode

The application operates seamlessly without any paid third-party API subscriptions:
```env
AI_PROVIDER=demo
IMAGE_PROVIDER=template
VIDEO_PROVIDER=local
AVATAR_PROVIDER=local
VOICE_PROVIDER=browser
STORAGE_PROVIDER=local
SOCIAL_PROVIDER=demo
```

---

## Quick Start

### 1. Install Dependencies
```bash
cd smrits-content-ai
npm install
```

### 2. Database Sync & Seed
```bash
npx prisma db push
node prisma/seed.js
```

### 3. Run Server
```bash
npm run dev
```

Visit `http://localhost:3000`.

---

## Production Build & Verification

To verify production build stability:
```bash
npm run build
```

---

## Future Provider Integrations

To plug in real external APIs, update `.env` variables:
- **OpenAI / Anthropic:** Set `AI_PROVIDER=openai` and add `OPENAI_API_KEY`.
- **Replicate / SD:** Set `IMAGE_PROVIDER=replicate` and add `REPLICATE_API_KEY`.
- **Social Networks:** Add official OAuth client IDs for Instagram, YouTube, LinkedIn, X, and TikTok.

---

Designed & Built for **Smrits Software Services**.
