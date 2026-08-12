export interface GeneratePollinationsImageInput {
  prompt: string;
  width?: number;
  height?: number;
  seed?: number;
  model?: string; // 'flux', 'turbo', 'deliberate'
  nologo?: boolean;
  style?: string; // e.g. 'cinematic', '3d', 'cyberpunk', 'photorealistic'
}

export interface GeneratePollinationsImageResult {
  success: boolean;
  imageUrl: string;
  prompt: string;
  provider: string;
}

export class PollinationsImageProvider {
  name = 'pollinations-free';

  /**
   * Generates high quality free AI images via Pollinations.ai API endpoint.
   * No API key required, 100% free forever for image generation.
   */
  generateImage(input: GeneratePollinationsImageInput): GeneratePollinationsImageResult {
    const width = input.width || 1080;
    const height = input.height || 1920; // Default 9:16 vertical video frame
    const seed = input.seed || Math.floor(Math.random() * 1000000);
    const stylePrefix = input.style ? `${input.style} style, ` : 'cinematic studio lighting, ultra detailed 8k, ';
    
    const fullPrompt = `${stylePrefix}${input.prompt}`.trim();
    const encodedPrompt = encodeURIComponent(fullPrompt);

    // Build URL directly pointing to Pollinations AI free image generation service
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&seed=${seed}&nologo=${input.nologo ?? true}&model=${input.model || 'flux'}`;

    return {
      success: true,
      imageUrl,
      prompt: fullPrompt,
      provider: 'Pollinations.ai Free AI (Flux Engine)',
    };
  }
}
