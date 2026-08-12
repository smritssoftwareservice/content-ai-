import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  const user = await prisma.user.upsert({
    where: { email: 'creator@smrits.com' },
    update: {},
    create: {
      email: 'creator@smrits.com',
      name: 'Alex TechCreator',
      role: 'user',
      avatarUrl: '/default-avatar.png',
      profile: {
        create: {
          channelName: 'Tech Pulse AI',
          bio: 'Building and reviewing cutting-edge AI tools & developer workflows.',
          website: 'https://smrits.com',
          primaryNiche: 'AI',
          defaultStyle: 'Energetic',
        },
      },
      brandKit: {
        create: {
          primaryColor: '#6366F1',
          secondaryColor: '#10B981',
          fontFamily: 'Inter',
          ctaText: 'Follow @TechPulseAI for daily AI breakdowns!',
          username: '@TechPulseAI',
          watermarkText: 'SMRITS AI',
        },
      },
      avatar: {
        create: {
          name: 'Alex Avatar',
          imageUrl: '/sample-avatar.png',
          hasConsent: true,
          motionStyle: 'subtle-pan',
        },
      },
      usage: {
        create: {
          ideasCount: 5,
          scriptsCount: 3,
          imagesCount: 2,
          videosCount: 1,
        },
      },
    },
  });

  console.log('✅ User seeded:', user.email);

  const trends = [
    {
      title: 'Claude 3.5 Sonnet Artifacts & Canvas Features Released',
      url: 'https://anthropic.com/news/claude-3-5-sonnet',
      source: 'Anthropic News',
      summary: 'Anthropic announces major updates to Claude featuring interactive canvas artifacts and enhanced code execution.',
      category: 'AI',
      trendScore: 96,
      freshness: 'Very High',
    },
    {
      title: 'OpenAI Introduces Advanced Voice Mode for ChatGPT',
      url: 'https://openai.com/index/advanced-voice-mode',
      source: 'OpenAI Blog',
      summary: 'Real-time conversational speech synthesis powered by GPT-4o released to all Plus subscribers.',
      category: 'AI',
      trendScore: 94,
      freshness: 'Very High',
    },
    {
      title: 'Next.js 15 Release Candidate Brings React 19 Support',
      url: 'https://nextjs.org/blog/next-15-rc',
      source: 'Vercel Blog',
      summary: 'Next.js 15 adds async request APIs, React 19 integration, and improved dev server performance.',
      category: 'Coding',
      trendScore: 89,
      freshness: 'High',
    },
    {
      title: '5 Open-Source AI Developer Tools Taking Over GitHub in 2026',
      url: 'https://news.ycombinator.com/item?id=400192',
      source: 'Hacker News',
      summary: 'Community roundup of top trending open source repositories for local LLM agents and code completion.',
      category: 'Developer Tools',
      trendScore: 91,
      freshness: 'High',
    },
  ];

  for (const trend of trends) {
    await prisma.trend.upsert({
      where: { url: trend.url },
      update: {},
      create: trend,
    });
  }

  console.log('✅ Trends seeded!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
