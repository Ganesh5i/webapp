import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            "px-6 py-2.5 rounded-full font-medium whitespace-nowrap transition-all duration-200",
            "hover:scale-105 active:scale-95",
            selectedCategory === category
              ? "bg-gradient-primary text-primary-foreground shadow-md shadow-primary/30"
              : "bg-card text-foreground border border-border hover:border-primary/50"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
