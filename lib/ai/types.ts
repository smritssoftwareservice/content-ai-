export interface AITextRequest {
  prompt: string;
  niche?: string;
  style?: string;
  count?: number;
  type: 'ideas' | 'hooks' | 'scripts' | 'prompts' | 'captions' | 'repurpose';
}

export interface AITextResponse {
  success: boolean;
  provider: string;
  data?: any;
  error?: string;
}

export interface AIProvider {
  name: string;
  generateText(input: AITextRequest): Promise<AITextResponse>;
}
