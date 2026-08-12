import { AIProvider, AITextRequest, AITextResponse } from '../../lib/ai/types';

export class DemoAIProvider implements AIProvider {
  name = 'demo';

  async generateText(input: AITextRequest): Promise<AITextResponse> {
    const topic = input.prompt || 'New AI feature launch';
    const style = input.style || 'Energetic';
    const niche = input.niche || 'AI';

    switch (input.type) {
      case 'ideas':
        return {
          success: true,
          provider: 'DEMO MODE',
          data: [
            {
              id: 'idea-1',
              title: `5 Secret Features in ${topic} You Didn't Know`,
              hook: `Stop using ${topic} until you watch this video!`,
              format: '10-sec Reel',
              platform: 'Instagram',
              niche: niche,
              viralScore: 95,
            },
            {
              id: 'idea-2',
              title: `${topic} vs Industry Benchmark: Full Comparison`,
              hook: `Is ${topic} actually worth the hype? Let's test it.`,
              format: '10-sec Reel',
              platform: 'YouTube Shorts',
              niche: niche,
              viralScore: 91,
            },
            {
              id: 'idea-3',
              title: `How to Automate Your Workflow with ${topic} in 60 Seconds`,
              hook: `This 1 trick with ${topic} will save you 10 hours a week!`,
              format: '10-sec Reel',
              platform: 'TikTok',
              niche: niche,
              viralScore: 88,
            },
          ],
        };

      case 'hooks':
        return {
          success: true,
          provider: 'DEMO MODE',
          data: [
            { category: 'Curiosity', text: `You're probably using ${topic} wrong. Here's why.` },
            { category: 'Shock', text: `This new update to ${topic} changes everything for developers!` },
            { category: 'Question', text: `Did you know ${topic} can do THIS automatically?` },
            { category: 'FOMO', text: `Don't fall behind! Everyone is switching to ${topic}.` },
            { category: 'Contrarian', text: `Why I stopped using standard tools and switched to ${topic}.` },
            { category: 'Educational', text: `Here is the exact step-by-step framework for ${topic}.` },
          ],
        };

      case 'scripts':
        return {
          success: true,
          provider: 'DEMO MODE',
          data: [
            {
              id: 'script-1',
              title: 'Viral 10s Breakdown',
              style: style,
              durationSec: 10,
              voiceover: `Stop scrolling! ${topic} just dropped, and it literally changes how we build software forever. Here's what you need to know.`,
              visuals: 'Fast kinetic zooms of code editor, high contrast avatar, animated spark overlays.',
              textOverlay: `🔥 NEW TOOL ALERT: ${topic}`,
              cta: 'Comment "AI" below for the free starter guide!',
            },
          ],
        };

      case 'prompts':
        return {
          success: true,
          provider: 'DEMO MODE',
          data: [
            {
              type: 'image',
              title: 'Cyberpunk Tech Presenter',
              fullPromptText: `Ultra-detailed cinematic studio photograph of a tech creator presenting ${topic}, glowing neon cyan highlights, 8k resolution, photorealistic, clean background, 9:16 aspect ratio.`,
            },
            {
              type: 'video',
              title: 'Dynamic B-Roll Loop',
              fullPromptText: `Fast 3D camera pan over holographic code lines floating in dark futuristic workspace, high speed, smooth 60fps, 9:16 aspect ratio.`,
            },
          ],
        };

      case 'captions':
        return {
          success: true,
          provider: 'DEMO MODE',
          data: {
            instagram: `🚀 ${topic} just changed the game! Here is everything you need to know in 10 seconds. Save this reel for later! 📌\n\n#SMRITSAI #TechCreator #${niche.replace(/\s+/g, '')} #AI #Automation`,
            youtubeTitle: `How ${topic} Changes Everything (2026 Breakdown)`,
            youtubeDescription: `In this short video, we break down the newest release of ${topic}.\n\n🔥 Subscribe to Tech Pulse AI for daily breakdown content!\n\nWebsite: https://smrits.com`,
            linkedin: `💡 Big update in the ${niche} space:\n\n${topic} is officially here. Key takeaways:\n1. Faster developer iteration\n2. Built-in automation\n3. Zero friction setup\n\nWhat are your thoughts on this update? Let's discuss below 👇`,
            x: `🔥 ${topic} is officially live!\n\nHere's why every developer & creator needs to try this right now 🧵👇`,
            hashtags: `#${niche.replace(/\s+/g, '')} #AI #SaaS #TechNews #SmritsContentAI #DeveloperTools`,
          },
        };

      case 'repurpose':
        return {
          success: true,
          provider: 'DEMO MODE',
          data: {
            shortVideoIdeas: [
              `3 Key takeaways from ${topic}`,
              `The biggest mistake people make with ${topic}`,
              `Why ${topic} will win in 2026`,
            ],
            linkedinPosts: [
              `Here is how ${topic} impacts the future of software engineering...`,
            ],
            xPosts: [
              `Quick thread on ${topic} 🧵👇`,
            ],
          },
        };

      default:
        return {
          success: true,
          provider: 'DEMO MODE',
          data: {},
        };
    }
  }
}
