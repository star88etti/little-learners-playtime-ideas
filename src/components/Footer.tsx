
import React from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 py-6 border-t border-montessori-wood/20 text-center">
      <div className="flex flex-col items-center">
        <p className="text-gray-600 mb-2">
          Made with <span className="text-red-500">♥</span> for little learners by LetsTalkAITools
        </p>
        <div className="flex gap-3 text-gray-500 text-sm items-center">
          <a 
            href="mailto:hello@letstalkaitools.com" 
            className="hover:text-montessori-wood-light transition-colors duration-200 flex items-center gap-1"
          >
            <Mail size={14} />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
