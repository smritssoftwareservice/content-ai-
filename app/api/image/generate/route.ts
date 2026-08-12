import { NextResponse } from 'next/server';
import { PollinationsImageProvider } from '@/providers/image/PollinationsImageProvider';

export async function POST(req: Request) {
  try {
    const { prompt, style, width, height, aspect } = await req.json();

    let targetWidth = width || 1080;
    let targetHeight = height || 1920;

    if (aspect === '16:9') {
      targetWidth = 1920;
      targetHeight = 1080;
    } else if (aspect === '1:1') {
      targetWidth = 1080;
      targetHeight = 1080;
    }

    const provider = new PollinationsImageProvider();
    const result = provider.generateImage({
      prompt: prompt || 'Cyberpunk content creator in studio setup',
      style: style || 'Cinematic',
      width: targetWidth,
      height: targetHeight,
    });

    return NextResponse.json({
      success: true,
      imageUrl: result.imageUrl,
      prompt: result.prompt,
      provider: result.provider,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to generate image';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
