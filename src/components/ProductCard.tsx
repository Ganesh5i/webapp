import React from 'react';
import { MenuItem } from '@/data/restaurantData';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  item: MenuItem;
  showActions?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, showActions = true }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      duration: 2000,
    });
  };

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border group">
      <div className="relative overflow-hidden bg-muted aspect-square">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-display font-semibold text-lg text-foreground line-clamp-1">
            {item.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {item.description}
          </p>
        </div>
        
        {showActions && (
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary font-display">
              ₹{item.price}
            </span>
            
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-200 gap-1.5"
            >
              <Plus className="w-4 h-4" />
              Add
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
