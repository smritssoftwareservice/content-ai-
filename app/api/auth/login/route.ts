import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();
    const userEmail = email || 'creator@smrits.com';
    const userName = name || 'Alex Creator';

    let user = await prisma.user.findUnique({
      where: { email: userEmail },
      include: { profile: true, brandKit: true, avatar: true },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email: userEmail,
          name: userName,
          profile: {
            create: {
              channelName: 'Tech Pulse AI',
              primaryNiche: 'AI',
              defaultStyle: 'Energetic',
            },
          },
          brandKit: {
            create: {
              primaryColor: '#6366F1',
              secondaryColor: '#10B981',
              watermarkText: 'SMRITS AI',
              ctaText: 'Follow for more tech updates!',
            },
          },
          usage: {
            create: {
              ideasCount: 0,
              scriptsCount: 0,
              imagesCount: 0,
              videosCount: 0,
            },
          },
        },
        include: { profile: true, brandKit: true, avatar: true },
      });
    }

    const response = NextResponse.json({ success: true, user });
    response.cookies.set('user_id', user.id, { path: '/', httpOnly: false });
    response.cookies.set('user_email', user.email, { path: '/', httpOnly: false });

    return response;
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
