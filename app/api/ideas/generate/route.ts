import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export async function POST(req: Request) {
  try {
    const { topic, niche, platform } = await req.json();

    const ideas = [
      {
        title: `5 Secret Features in ${topic || 'Claude 3.5'} You Didn't Know`,
        hook: `Stop using ${topic || 'AI tools'} until you watch this video!`,
        description: `Full breakdown of hidden features in ${topic || 'Claude'} that boost coding productivity by 10x.`,
        format: '10s Reel',
        platform: platform || 'Instagram',
        niche: niche || 'AI',
        viralScore: 96,
      },
      {
        title: `${topic || 'AI Engine'} vs Industry Benchmark: Full Comparison`,
        hook: `Is ${topic || 'this AI'} actually worth the hype? Let's test it.`,
        description: `Live head-to-head performance benchmarks testing speed, code output, and accuracy.`,
        format: '10s Reel',
        platform: platform || 'YouTube Shorts',
        niche: niche || 'AI',
        viralScore: 92,
      },
      {
        title: `How to Automate Your Workflow with ${topic || 'AI'} in 60 Seconds`,
        hook: `This 1 trick with ${topic || 'AI'} will save you 10 hours a week!`,
        description: `Step by step developer workflow setup guide for maximum automation.`,
        format: '10s Reel',
        platform: platform || 'TikTok',
        niche: niche || 'AI',
        viralScore: 89,
      },
    ];

    let user = await prisma.user.findFirst();
    if (user) {
      for (const idea of ideas) {
        await prisma.idea.create({
          data: {
            userId: user.id,
            title: idea.title,
            hook: idea.hook,
            format: idea.format,
            platform: idea.platform,
            niche: idea.niche,
            viralScore: idea.viralScore,
          },
        });
      }
    }

    return NextResponse.json({ success: true, ideas });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
