export interface SocialPublishInput {
  platform: 'Instagram' | 'YouTube' | 'LinkedIn' | 'X' | 'TikTok';
  title: string;
  caption: string;
  mediaUrl?: string;
}

export interface SocialPublishResult {
  success: boolean;
  publishedUrl?: string;
  statusText: string;
  isDemo: boolean;
  provider: string;
}

export class DemoSocialProvider {
  name = 'demo';

  async publishPost(input: SocialPublishInput): Promise<SocialPublishResult> {
    console.log(`[DemoSocialProvider] Simulating publish to ${input.platform}...`);
    
    // Explicitly labeled as simulated/demo as per safety requirement #30 & #60
    return {
      success: true,
      publishedUrl: `https://${input.platform.toLowerCase()}.com/demo/post-${Date.now()}`,
      statusText: 'DEMO PUBLISHED: Simulated operation (No official social API key configured).',
      isDemo: true,
      provider: 'DEMO SOCIAL PROVIDER',
    };
  }
}
