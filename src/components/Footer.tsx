
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 py-6 border-t border-montessori-wood/20 text-center">
      <div className="flex flex-col items-center">
        <p className="text-gray-600 mb-2">
          Made with <span className="text-red-500">♥</span> for little learners
        </p>
        <div className="flex gap-3 text-gray-500 text-sm">
          <a href="#" className="hover:text-montessori-wood-light transition-colors duration-200">About</a>
          <span>•</span>
          <a href="#" className="hover:text-montessori-wood-light transition-colors duration-200">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:text-montessori-wood-light transition-colors duration-200">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
