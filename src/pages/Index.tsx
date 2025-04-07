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
        title: "Error",
        description: "Failed to generate a new game. Please try again.",
        variant: "destructive"
      });
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
