import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error('Missing VITE_GEMINI_API_KEY environment variable');
}

const genAI = new GoogleGenerativeAI(API_KEY);

export interface GameSuggestion {
  title: string;
  description: string;
  ageRange: string;
  materials: string[];
  instructions: string[];
}

export async function generateGameSuggestions(
  currentGames: GameSuggestion[],
  count: number = 3
): Promise<GameSuggestion[]> {
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

  const prompt = `
    Generate ${count} new educational playtime activities for young children.
    The activities should be:
    - Age-appropriate (specify age range)
    - Educational and fun
    - Easy to set up with common household materials
    - Include clear instructions
    
    Format each activity as a JSON object with these fields:
    - title: string
    - description: string
    - ageRange: string
    - materials: string[]
    - instructions: string[]
    
    Return only the JSON array of activities, nothing else.
    
    Here are some existing activities to avoid duplicating:
    ${JSON.stringify(currentGames, null, 2)}
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Parse the response and ensure it's valid JSON
    const suggestions = JSON.parse(text);
    
    // Validate the structure of each suggestion
    return suggestions.map((suggestion: any) => ({
      title: suggestion.title,
      description: suggestion.description,
      ageRange: suggestion.ageRange,
      materials: Array.isArray(suggestion.materials) ? suggestion.materials : [],
      instructions: Array.isArray(suggestion.instructions) ? suggestion.instructions : [],
    }));
  } catch (error) {
    console.error('Error generating game suggestions:', error);
    throw new Error('Failed to generate game suggestions');
  }
} 