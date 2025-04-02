
import React from 'react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface FilterBarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  activeAge: number | null;
  setActiveAge: (age: number | null) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  activeCategory,
  setActiveCategory,
  activeAge,
  setActiveAge
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
        
        <div>
          <h3 className="text-sm font-medium mb-2 text-gray-600">Filter by age:</h3>
          <ToggleGroup type="single" value={activeAge?.toString()} onValueChange={(value) => setActiveAge(value ? parseInt(value) : null)}>
            <ToggleGroupItem value="2" className="rounded-l-full data-[state=on]:bg-montessori-green-light data-[state=on]:text-gray-800">
              2 years
            </ToggleGroupItem>
            <ToggleGroupItem value="3" className="data-[state=on]:bg-montessori-green-light data-[state=on]:text-gray-800">
              3 years
            </ToggleGroupItem>
            <ToggleGroupItem value="4" className="rounded-r-full data-[state=on]:bg-montessori-green-light data-[state=on]:text-gray-800">
              4 years
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
