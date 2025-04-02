import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import GameDisplay from '@/components/GameDisplay';
import FilterBar from '@/components/FilterBar';
import Footer from '@/components/Footer';
import { getRandomGame, type MontessoriGame } from '@/data/gameData';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [game, setGame] = useState<MontessoriGame | null>(null);
  const [previousGameIds, setPreviousGameIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const { toast } = useToast();

  const handleNewGame = () => {
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      // Get a new game
      const newGame = getRandomGame(previousGameIds);
      
      // Filter by category if selected
      let filteredGame = newGame;
      if (activeCategory !== 'All') {
        // Add current game to previous ids to avoid repeating
        setPreviousGameIds(prev => [...prev, newGame.id]);
        
        // Try to find a game that matches filters
        let attempts = 0;
        const maxAttempts = 10;
        
        while (attempts < maxAttempts) {
          const categoryMatch = activeCategory === 'All' || filteredGame.category === activeCategory;
          
          if (categoryMatch) {
            break;
          }
          
          filteredGame = getRandomGame(previousGameIds);
          attempts++;
        }
        
        // If we couldn't find a matching game after max attempts
        if (attempts === maxAttempts) {
          toast({
            title: "No matching games found",
            description: "Try changing your filters or resetting them.",
            variant: "default",
          });
        }
      }
      
      // Update game state and previous game ids
      setGame(filteredGame);
      setPreviousGameIds(prev => {
        if (prev.length > 25) {
          // Keep the list manageable by removing oldest entries
          return [...prev.slice(-24), filteredGame.id];
        }
        return [...prev, filteredGame.id];
      });
      
      setIsLoading(false);
    }, 600);
  };

  // Reset filters
  const resetFilters = () => {
    setActiveCategory('All');
  };

  // Apply filters effect
  useEffect(() => {
    if (game && activeCategory !== 'All') {
      const categoryMatch = activeCategory === 'All' || game.category === activeCategory;
      
      if (!categoryMatch) {
        handleNewGame();
      }
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container px-4 mx-auto max-w-4xl">
        <Header />
        
        {game && (
          <FilterBar 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory}
          />
        )}
        
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
