
import React from 'react';
import { Button } from '@/components/ui/button';

interface FilterBarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  activeCategory,
  setActiveCategory
}) => {
  const categories = [
    'All',
    'Sensory',
    'Practical Life',
    'Fine Motor',
    'Math',
    'Science'
  ];

  return (
    <div className="mb-6 bg-montessori-cream/80 rounded-lg p-4 shadow-sm border border-montessori-wood/10">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium mb-2 text-gray-600">Filter by category:</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className={`${
                  activeCategory === category
                    ? 'bg-montessori-wood text-white'
                    : 'bg-white text-gray-700 hover:bg-montessori-wood/10'
                } border border-montessori-wood/20 rounded-full px-3 py-1 text-sm`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
