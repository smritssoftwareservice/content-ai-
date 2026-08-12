import { NextResponse } from 'next/server';
import { getAIProvider } from '@/lib/ai';

export async function POST(req: Request) {
  try {
    const { topic, niche, style } = await req.json();

    const provider = getAIProvider();

    // Fetch Hooks, Scripts, Prompts, & Captions simultaneously
    const [hooksRes, scriptsRes, promptsRes, captionsRes] = await Promise.all([
      provider.generateText({ prompt: topic, niche, style, type: 'hooks' }),
      provider.generateText({ prompt: topic, niche, style, type: 'scripts' }),
      provider.generateText({ prompt: topic, niche, style, type: 'prompts' }),
      provider.generateText({ prompt: topic, niche, style, type: 'captions' }),
    ]);

    return NextResponse.json({
      success: true,
      provider: provider.name,
      hooks: hooksRes.data,
      scripts: scriptsRes.data,
      prompts: promptsRes.data,
      captions: captionsRes.data,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
