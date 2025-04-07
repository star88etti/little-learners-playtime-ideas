import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import GameDisplay from '@/components/GameDisplay';
import Footer from '@/components/Footer';
import { type MontessoriGame } from '@/data/types';
import { useToast } from '@/components/ui/use-toast';
import { generateMontessoriGame } from '@/lib/gemini';

const Index = () => {
  const [game, setGame] = useState<MontessoriGame | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);
  const { toast } = useToast();

  // Handle cooldown timer
  useEffect(() => {
    if (cooldownSeconds > 0) {
      const timer = setInterval(() => {
        setCooldownSeconds(seconds => Math.max(0, seconds - 1));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cooldownSeconds]);

  const handleNewGame = async () => {
    // Don't allow new requests during cooldown
    if (cooldownSeconds > 0) {
      toast({
        title: "Please Wait",
        description: `Try again in ${cooldownSeconds} seconds.`,
        variant: "default",
        duration: 3000
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const newGame = await generateMontessoriGame();
      setGame(newGame);
    } catch (error) {
      console.error('Error generating game:', error);
      
      // Extract cooldown time from error message if present
      const message = error instanceof Error ? error.message : "An unexpected error occurred.";
      if (message.includes('wait') && message.includes('seconds')) {
        const waitTime = parseInt(message.match(/\d+/)?.[0] || '30');
        setCooldownSeconds(waitTime);
      }
      
      toast({
        title: "Unable to Generate Game",
        description: message,
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
          cooldownSeconds={cooldownSeconds}
        />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
