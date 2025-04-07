
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center py-8 px-4">
      <div className="wood-panel p-3 px-6 rounded-full inline-flex items-center mb-2">
        <div className="bg-montessori-cream rounded-full p-2 mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-montessori-wood">
            <path d="M9.013 15.282 4 18v-4.995L9.013 6l5.98 1.795L21 6v4.996l-5.008 2.731m-5.98 8.273L4 18m10.993 4-11.98-4M21 11l-5.008 11"></path>
          </svg>
        </div>
        <h1 className="text-montessori-cream text-2xl md:text-3xl">AI Montessori Games</h1>
      </div>
      <p className="text-center max-w-xl text-lg mt-3 text-gray-700">
        Create engaging, developmentally appropriate Montessori activities using common household items
      </p>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        <span className="bg-montessori-green-light px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
          <span className="mr-1">🧒</span> Ages 2-4
        </span>
        <span className="bg-montessori-blue/40 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
          <span className="mr-1">🏠</span> Household Materials
        </span>
        <span className="bg-montessori-wood/20 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
          <span className="mr-1">🌱</span> Montessori Principles
        </span>
      </div>
    </header>
  );
};

export default Header;
