import { AIProvider, AITextRequest, AITextResponse } from '../../lib/ai/types';

export class GeminiAIProvider implements AIProvider {
  name = 'gemini-free';

  async generateText(input: AITextRequest): Promise<AITextResponse> {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.warn('⚠️ GEMINI_API_KEY is not set. Falling back to local zero-cost AI provider.');
      return {
        success: false,
        error: 'GEMINI_API_KEY missing',
        provider: 'GEMINI_API_MISSING',
      };
    }

    try {
      const topic = input.prompt || 'Viral Tech Trends 2026';
      const niche = input.niche || 'Tech & AI';
      const style = input.style || 'Energetic';

      let promptInstruction = '';

      if (input.type === 'ideas') {
        promptInstruction = `Generate 4 viral content ideas for topic "${topic}" in niche "${niche}". Return ONLY a raw JSON array of objects with keys: id, title, hook, format (e.g. "10-sec Reel"), platform ("Instagram" or "YouTube Shorts"), niche, viralScore (number 80-99). No markdown formatting or extra commentary.`;
      } else if (input.type === 'hooks') {
        promptInstruction = `Generate 6 killer viral hook variations for "${topic}". Return ONLY a raw JSON array of objects with keys: category (e.g. Curiosity, Shock, Question, FOMO), text. No markdown.`;
      } else if (input.type === 'scripts') {
        promptInstruction = `Write a 10-second viral video script about "${topic}" in "${style}" style. Return ONLY a raw JSON array containing 1 object with keys: id, title, style, durationSec (10), voiceover, visuals, textOverlay, cta. No markdown.`;
      } else if (input.type === 'captions') {
        promptInstruction = `Generate viral social media captions for "${topic}". Return ONLY a raw JSON object with keys: instagram, youtubeTitle, youtubeDescription, linkedin, x, hashtags. No markdown.`;
      } else {
        promptInstruction = `Generate creative ideas for "${topic}". Return ONLY valid JSON.`;
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: promptInstruction }] }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1000,
              responseMimeType: 'application/json',
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Gemini API error: ${response.statusText}`);
      }

      const json = await response.json();
      const textOutput = json?.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!textOutput) {
        throw new Error('Empty response from Gemini API');
      }

      const parsedData = JSON.parse(textOutput);

      return {
        success: true,
        provider: 'Google Gemini 1.5 Flash (Free Tier)',
        data: parsedData,
      };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown Gemini error';
      console.warn('⚠️ Gemini Provider failed, falling back:', message);
      return {
        success: false,
        error: message,
        provider: 'GEMINI_FAILED',
      };
    }
  }
}
