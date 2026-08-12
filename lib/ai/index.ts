import { AIProvider } from './types';
import { DemoAIProvider } from '@/providers/ai/DemoAIProvider';
import { GeminiAIProvider } from '@/providers/ai/GeminiAIProvider';

export function getAIProvider(): AIProvider {
  const providerType = process.env.AI_PROVIDER || 'gemini';

  if (providerType === 'gemini' && process.env.GEMINI_API_KEY) {
    return new GeminiAIProvider();
  }

  // Fallback to zero-cost Demo AI Provider
  return new DemoAIProvider();
}
