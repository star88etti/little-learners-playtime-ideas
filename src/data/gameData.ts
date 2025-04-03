
import { MontessoriGame } from './types';
import { sensoryGames } from './sensoryGames';
import { practicalLifeGames } from './practicalLifeGames';
import { fineMotorGames } from './fineMotorGames';
import { mathGames } from './mathGames';
import { scienceGames } from './scienceGames';

// Combine all game categories into a single array
export const montessoriGames: MontessoriGame[] = [
  ...sensoryGames,
  ...practicalLifeGames,
  ...fineMotorGames,
  ...mathGames,
  ...scienceGames
];

// Function to get a random game
export const getRandomGame = (previousIds: number[] = []): MontessoriGame => {
  // Filter out previously shown games
  const availableGames = montessoriGames.filter(game => !previousIds.includes(game.id));
  
  // If all games have been shown, reset and start over
  if (availableGames.length === 0) {
    return montessoriGames[Math.floor(Math.random() * montessoriGames.length)];
  }
  
  // Return a random game from available games
  return availableGames[Math.floor(Math.random() * availableGames.length)];
};

// Re-export the types
export type { MontessoriGame } from './types';
