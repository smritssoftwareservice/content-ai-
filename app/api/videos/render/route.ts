import { NextResponse } from 'next/server';
import { LocalFFmpegVideoProvider } from '@/providers/video/LocalFFmpegVideoProvider';

export async function POST(req: Request) {
  try {
    const { title, scriptText } = await req.json();

    const videoProvider = new LocalFFmpegVideoProvider();
    const result = await videoProvider.render10sVerticalVideo({
      title: title || 'Tech Trend Breakdown',
      scriptText: scriptText || 'Stop scrolling! Big update just launched.',
      watermarkText: 'SMRITS AI',
      durationSec: 10,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
