import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getRestaurantById, getMenuByRestaurant, getCategoriesByRestaurant } from '@/data/restaurantData';
import { useCart } from '@/contexts/CartContext';
import CategoryFilter from '@/components/CategoryFilter';
import ProductCard from '@/components/ProductCard';
import Cart from '@/components/Cart';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';

const Restaurant = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = getRestaurantById(id || '');
  const menuItems = getMenuByRestaurant(id || '');
  const categories = getCategoriesByRestaurant(id || '');
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getItemCount } = useCart();

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const itemCount = getItemCount();

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-gradient-warm flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-xl text-muted-foreground">Restaurant not found</p>
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="p-2 hover:bg-muted rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="font-display text-xl font-bold text-foreground">{restaurant.name}</h1>
                <p className="text-xs text-muted-foreground">{restaurant.cuisine}</p>
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

      {/* Restaurant Hero */}
      <div className="relative h-48 md:h-64 bg-muted overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="container mx-auto px-0">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{restaurant.name}</h2>
                <p className="text-muted-foreground">{restaurant.cuisine}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-secondary px-3 py-1.5 rounded-full">
                  <Star className="w-4 h-4 fill-secondary-foreground text-secondary-foreground" />
                  <span className="font-bold text-secondary-foreground">{restaurant.rating}</span>
                </div>
                <div className="bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium">
                  {restaurant.deliveryTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8 animate-slide-up">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-slide-up">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No items found in this category</p>
          </div>
        )}
      </main>

      {/* Cart Sidebar */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Restaurant;
