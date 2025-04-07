import React, { useState } from 'react';
import Header from '@/components/Header';
import GameDisplay from '@/components/GameDisplay';
import Footer from '@/components/Footer';
import { type MontessoriGame } from '@/data/types';
import { useToast } from '@/components/ui/use-toast';
import { generateMontessoriGame } from '@/lib/gemini';

const Index = () => {
  const [game, setGame] = useState<MontessoriGame | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNewGame = async () => {
    setIsLoading(true);
    
    try {
      const newGame = await generateMontessoriGame();
      setGame(newGame);
    } catch (error) {
      console.error('Error generating game:', error);
      toast({
        title: "Unable to Generate Game",
        description: error instanceof Error ? error.message : "An unexpected error occurred. Please try again later.",
        variant: "destructive",
        duration: 5000
      });
      // Keep the current game if there's an error
      setGame(game);
    } finally {
      setIsLoading(false);
    }
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
