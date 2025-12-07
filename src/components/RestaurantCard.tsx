import React from 'react';
import { Link } from 'react-router-dom';
import { Restaurant } from '@/data/restaurantData';
import { Star } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block group">
      <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
        <div className="relative overflow-hidden bg-muted aspect-video">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute bottom-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium">
            {restaurant.deliveryTime}
          </div>
        </div>
        
        <div className="p-4 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-lg text-foreground line-clamp-1">
              {restaurant.name}
            </h3>
            <div className="flex items-center gap-1 bg-secondary/10 px-2 py-0.5 rounded-full">
              <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
              <span className="text-sm font-semibold text-secondary">{restaurant.rating}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {restaurant.cuisine}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
