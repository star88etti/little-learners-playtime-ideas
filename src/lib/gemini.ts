import { GoogleGenerativeAI } from '@google/generative-ai';
import { MontessoriGame } from '@/data/types';

// Debug logging for API key
console.log('API Key status:', {
  exists: !!import.meta.env.VITE_GEMINI_API_KEY,
  isDefined: typeof import.meta.env.VITE_GEMINI_API_KEY !== 'undefined',
  length: import.meta.env.VITE_GEMINI_API_KEY?.length || 0
});

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
let genAI: GoogleGenerativeAI | null = null;

try {
  if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
    console.log('Gemini API initialized successfully');
  } else {
    console.error('No API key provided');
  }
} catch (error) {
  console.error('Error initializing Gemini API:', error);
}

// Gemini configuration
const GEMINI_CONFIG = {
  model: 'gemini-1.5-pro-002',
  maxOutputTokens: 2048,
  temperature: 0.9, // Increased for more variety
  topP: 0.9,
  topK: 40
};

// Categories with weights to ensure variety
const CATEGORIES = [
  { name: "Sensory", activities: ["texture exploration", "sound matching", "color sorting", "scent identification"] },
  { name: "Practical Life", activities: ["pouring", "folding", "cleaning", "food preparation"] },
  { name: "Math", activities: ["counting", "sorting", "matching", "patterns"] },
  { name: "Science", activities: ["nature observation", "simple experiments", "classification", "weather"] }
];

// Rate limiting configuration
const RATE_LIMIT = {
  lastRequestTime: 0,
  minDelayBetweenRequests: 30000, // 30 seconds in milliseconds
};

export interface GameSuggestion {
  title: string;
  description: string;
  ageRange: string;
  materials: string[];
  instructions: string[];
}

const EMOJIS = ["🎨", "🎮", "🎯", "🎲", "🧩", "🔢", "🎭", "🎪", "🎨", "🎯", "🎲", "🧩"];

export async function generateMontessoriGame(): Promise<MontessoriGame> {
  if (!genAI) {
    throw new Error(
      'Gemini API is not configured. Please contact the administrator.'
    );
  }

  // Select a random category and activity type
  const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
  const activity = category.activities[Math.floor(Math.random() * category.activities.length)];

  const model = genAI.getGenerativeModel({ 
    model: GEMINI_CONFIG.model,
    generationConfig: {
      maxOutputTokens: GEMINI_CONFIG.maxOutputTokens,
      temperature: GEMINI_CONFIG.temperature,
      topP: GEMINI_CONFIG.topP,
      topK: GEMINI_CONFIG.topK
    }
  });

  const prompt = `You are a Montessori education expert. Create a new and unique educational Montessori-inspired activity for young children.

Focus on a ${category.name} activity involving ${activity}.

Requirements:
- Age-appropriate (for ages 2-4)
- Educational and fun
- Easy to set up with common household materials
- Include clear instructions
- Follow Montessori principles of hands-on learning and independence
- Must be DIFFERENT from any basic pom-pom or common activities

Respond with a single JSON object (no markdown, no code blocks) with these exact fields:
{
  "title": "Creative and unique activity title",
  "intro": "2-3 sentences about this specific activity",
  "setup": ["4-5 clear setup steps"],
  "learningSkills": ["3-4 specific skills developed"],
  "extensionIdeas": ["3 creative ways to extend or vary the activity"],
  "materialsNeeded": ["list of required materials"],
  "category": "${category.name}"
}

Make sure the activity is unique and creative, not a common or basic activity.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Update last request time after successful API call
    RATE_LIMIT.lastRequestTime = Date.now();
    
    // Clean up the response by removing any markdown formatting
    text = text.replace(/\`\`\`json\n?|\`\`\`\n?/g, '');
    text = text.trim();
    
    // Parse the response and ensure it's valid JSON
    const game = JSON.parse(text);
    
    // Validate required fields
    const requiredFields = ['title', 'intro', 'setup', 'learningSkills', 'extensionIdeas', 'materialsNeeded', 'category'];
    for (const field of requiredFields) {
      if (!game[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
    
    // Add additional fields
    return {
      ...game,
      id: Date.now(), // Use timestamp as unique ID
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      ageRange: [2, 3, 4],
      aiGenerated: true
    };
  } catch (error) {
    // Check if it's a rate limit error
    if (error instanceof Error && error.message.includes('429')) {
      RATE_LIMIT.lastRequestTime = Date.now(); // Update last request time on rate limit error
      throw new Error('We\'ve hit the API rate limit. Please wait 30 seconds before trying again.');
    }
    
    console.error('Error generating game:', error);
    throw new Error('Failed to generate game. Please try again later.');
  }
}

export async function generateGameSuggestions(
  currentGames: GameSuggestion[],
  count: number = 3
): Promise<GameSuggestion[]> {
  const model = genAI.getGenerativeModel({ 
    model: GEMINI_CONFIG.model,
    generationConfig: {
      maxOutputTokens: GEMINI_CONFIG.maxOutputTokens,
      temperature: GEMINI_CONFIG.temperature,
      topP: GEMINI_CONFIG.topP,
      topK: GEMINI_CONFIG.topK
    }
  });

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