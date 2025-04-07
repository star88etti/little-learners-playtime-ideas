
import React from 'react';
import type { MontessoriGame } from '../data/gameData';
import { Button } from '@/components/ui/button';

interface GameDisplayProps {
  game: MontessoriGame | null;
  onNewGame: () => void;
  isLoading: boolean;
}

const GameDisplay: React.FC<GameDisplayProps> = ({ game, onNewGame, isLoading }) => {
  if (isLoading) {
    return (
      <div className="paper-card animate-pulse flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-64 h-8 bg-montessori-wood/20 rounded-lg mb-6"></div>
        <div className="w-full h-4 bg-montessori-wood/20 rounded mb-4"></div>
        <div className="w-full h-4 bg-montessori-wood/20 rounded mb-4"></div>
        <div className="w-3/4 h-4 bg-montessori-wood/20 rounded mb-8"></div>
        <div className="w-32 h-10 bg-montessori-green/30 rounded-lg"></div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="paper-card flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="text-2xl mb-4">Ready to Play?</h2>
        <p className="text-gray-600 mb-6 text-center">
          Click the button to generate a Montessori-inspired activity!
        </p>
        <Button 
          onClick={onNewGame} 
          className="bg-montessori-wood hover:bg-montessori-wood-light text-white font-medium py-2 px-6 rounded-full text-lg shadow-md transition-all duration-200 hover:shadow-lg"
        >
          Let's Play!
        </Button>
      </div>
    );
  }

  return (
    <div className="paper-card animate-bounce-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-montessori-wood-light flex items-center">
          {game.title} <span className="ml-2 text-3xl">{game.emoji}</span>
        </h2>
        <div className="bg-montessori-green/30 px-3 py-1 rounded-full text-sm font-medium">
          {game.category}
        </div>
      </div>
      
      <p className="text-gray-700 mb-6 text-lg italic border-l-4 border-montessori-blue pl-4">
        {game.intro}
      </p>
      
      <div className="mb-6">
        <h3 className="font-bold text-xl mb-3 flex items-center">
          <span className="bg-montessori-green-light rounded-full w-8 h-8 flex items-center justify-center mr-2 text-gray-700">1</span>
          Here's how to set it up:
        </h3>
        <ol className="list-decimal list-inside pl-10 space-y-2">
          {game.setup.map((step, index) => (
            <li key={index} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </div>
      
      <div className="mb-6">
        <h3 className="font-bold text-xl mb-3 flex items-center">
          <span className="bg-montessori-blue/40 rounded-full w-8 h-8 flex items-center justify-center mr-2 text-gray-700">2</span>
          <span>💪 Learning skills:</span>
        </h3>
        <ul className="list-disc list-inside pl-10 space-y-1">
          {game.learningSkills.map((skill, index) => (
            <li key={index} className="text-gray-700">{skill}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="font-bold text-xl mb-3 flex items-center">
          <span className="bg-montessori-wood/20 rounded-full w-8 h-8 flex items-center justify-center mr-2 text-gray-700">3</span>
          <span>✨ Extension ideas:</span>
        </h3>
        <ul className="list-disc list-inside pl-10 space-y-1">
          {game.extensionIdeas.map((idea, index) => (
            <li key={index} className="text-gray-700">{idea}</li>
          ))}
        </ul>
      </div>
      
      <div className="bg-montessori-beige border border-montessori-wood/10 rounded-lg p-4">
        <h3 className="font-bold text-lg mb-2">📦 Materials needed:</h3>
        <ul className="list-disc list-inside pl-6 space-y-1">
          {game.materialsNeeded.map((material, index) => (
            <li key={index} className="text-gray-700">{material}</li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button 
          onClick={onNewGame} 
          className="bg-montessori-green hover:bg-montessori-green-light text-gray-800 font-medium py-2 px-6 rounded-full text-lg shadow-md transition-all duration-200 hover:shadow-lg flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
            <path d="M16 21h5v-5"></path>
          </svg>
          New Game
        </Button>
      </div>
    </div>
  );
};

export default GameDisplay;
