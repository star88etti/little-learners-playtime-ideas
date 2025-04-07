import { useState } from 'react';
import { generateGameSuggestions, GameSuggestion } from '../lib/gemini';

export function useGameSuggestions(initialGames: GameSuggestion[] = []) {
  const [games, setGames] = useState<GameSuggestion[]>(initialGames);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateMoreGames = async (count: number = 3) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const newGames = await generateGameSuggestions(games, count);
      setGames(prevGames => [...prevGames, ...newGames]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate games');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    games,
    isLoading,
    error,
    generateMoreGames,
  };
} 