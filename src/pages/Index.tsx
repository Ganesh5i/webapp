import React, { useState } from 'react';
import { restaurants, menuItems } from '@/data/restaurantData';
import { useCart } from '@/contexts/CartContext';
import RestaurantCard from '@/components/RestaurantCard';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Utensils, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Featured food items (best sellers from various restaurants)
const bestFoodItems = menuItems.filter(item => 
  ['pp-1', 'bh-1', 'sg-1', 'dw-1', 'st-1', 'cm-1', 'pp-2', 'sg-3'].includes(item.id)
);

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getItemCount } = useCart();

  const searchLower = searchQuery.toLowerCase().trim();
  const searchWords = searchLower.split(/\s+/).filter(word => word.length > 0);
  
  const filteredRestaurants = searchLower.length === 0 
    ? restaurants
    : restaurants.filter(restaurant => {
        const restaurantText = `${restaurant.name} ${restaurant.cuisine} ${restaurant.address}`.toLowerCase();
        // Match if all search words are found in the restaurant text
        return searchWords.every(word => restaurantText.includes(word));
      });

  const filteredFoodItems = searchLower.length === 0
    ? []
    : menuItems.filter(item => {
        const itemText = `${item.name} ${item.description} ${item.category}`.toLowerCase();
        // Match if all search words are found in the item text
        return searchWords.every(word => itemText.includes(word));
      });

  const itemCount = getItemCount();

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Utensils className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-foreground">ZenBite</h1>
                <p className="text-xs text-muted-foreground">Delicious food delivered</p>
              </div>
            </div>
            
            <Button
              onClick={() => setIsCartOpen(true)}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-lg relative gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="font-semibold hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                  {itemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Black Background */}
      <section className="bg-black text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 space-y-4 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Hungry? We've got you <span className="text-primary">covered</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Order from your favorite restaurants and get food delivered to your doorstep
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto mt-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search restaurants, foods, or cuisines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 rounded-full border-gray-700 bg-gray-900 text-white placeholder:text-gray-400 shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">

        {/* Restaurants Section */}
        {(!searchQuery || filteredRestaurants.length > 0) && (
          <div className="animate-slide-up">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              {searchQuery ? 'Restaurants' : 'All Restaurants'}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>

            {searchQuery && filteredRestaurants.length === 0 && (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No restaurants found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        )}

        {/* Food Items Section */}
        {searchQuery ? (
          filteredFoodItems.length > 0 && (
            <div className={`mt-8 animate-slide-up ${filteredRestaurants.length > 0 ? 'mt-12' : ''}`}>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Food Items
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredFoodItems.map((item) => (
                  <ProductCard key={item.id} item={item} showActions={true} />
                ))}
              </div>
            </div>
          )
        ) : (
          <div className="mt-16 animate-slide-up">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Our Best Food Options
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {bestFoodItems.map((item) => (
                <ProductCard key={item.id} item={item} showActions={false} />
              ))}
            </div>
          </div>
        )}

        {/* No Results Message */}
        {searchQuery && filteredRestaurants.length === 0 && filteredFoodItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No results found matching "{searchQuery}"</p>
            <p className="text-muted-foreground text-sm mt-2">Try searching for restaurants, food items, or cuisines</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2025 ZenBite. Serving delicious food with love.
          </p>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Index;
