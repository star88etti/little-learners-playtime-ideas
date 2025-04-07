import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import GameDisplay from '@/components/GameDisplay';
import Footer from '@/components/Footer';
import { getRandomGame, type MontessoriGame } from '@/data/gameData';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [game, setGame] = useState<MontessoriGame | null>(null);
  const [previousGameIds, setPreviousGameIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNewGame = () => {
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      // Get a new game
      const newGame = getRandomGame(previousGameIds);
      
      // Update game state and previous game ids
      setGame(newGame);
      setPreviousGameIds(prev => {
        if (prev.length > 25) {
          // Keep the list manageable by removing oldest entries
          return [...prev.slice(-24), newGame.id];
        }
        return [...prev, newGame.id];
      });
      
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container px-4 mx-auto max-w-4xl">
        <Header />
        
        <GameDisplay 
          game={game} 
          onNewGame={handleNewGame} 
          isLoading={isLoading}
        />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
