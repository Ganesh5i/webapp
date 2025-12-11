import margheritaPizza from '@/assets/food/margherita-pizza.jpg';
import chickenBurger from '@/assets/food/chicken-burger.jpg';
import butterChicken from '@/assets/food/butter-chicken.jpg';
import hakkaNoodles from '@/assets/food/hakka-noodles.jpg';
import chocolateBrownie from '@/assets/food/chocolate-brownie.jpg';
import cappuccino from '@/assets/food/cappuccino.jpg';
import pepperoniPizza from '@/assets/food/pepperoni-pizza.jpg';
import biryani from '@/assets/food/biryani.jpg';
import veggieSupreme from '@/assets/food/Veggie-Supreme.jpg';
import CheeseGarlicBread from '@/assets/food/CheeseGarlicBread.jpg';
import CocaCola from '@/assets/food/CocaCola.jpg';
import Onionrings from '@/assets/food/Onionrings.jpg';
import pp1 from '@/assets/food/pp1.jpg';
import pp2 from '@/assets/food/pp2.jpg';
import pp3 from '@/assets/food/pp3.jpg';
import pp4 from '@/assets/food/pp4.jpg';
import pp5 from '@/assets/food/pp5.jpg';
import pp6 from '@/assets/food/pp6.jpg';
import pp7 from '@/assets/food/pp7.jpg';
import pp8 from '@/assets/food/pp8.jpg';
import pp9 from '@/assets/food/pp9.jpg';
import pp10 from '@/assets/food/pp10.jpg';
import pp11 from '@/assets/food/pp11.jpg';
import pp12 from '@/assets/food/pp12.jpg';
import pp13 from '@/assets/food/pp13.jpg';
// Hotel / restaurant hero images
import pizzaPalace from '@/assets/hotels/pizza-palace.jpg.jpg';
import burgerHub from '@/assets/hotels/burger-hub.jpg.jpg';
import spiceGarden from '@/assets/hotels/spice-garden.jpg.jpg';
import dragonWok from '@/assets/hotels/dragon-wok.jpg.jpg';
import sweetTreats from '@/assets/hotels/sweet-treats.jpg.jpg';
import cafeMocha from '@/assets/hotels/cafe-mocha.jpg.jpg';
import h1 from '@/assets/hotels/h1.jpeg';
import h2 from '@/assets/hotels/h2.jpg';
import h3 from '@/assets/hotels/h3.jpeg';
import h4 from '@/assets/hotels/h4.jpeg';
import h5 from '@/assets/hotels/h5.jpeg';
import h6 from '@/assets/hotels/h6.jpeg';

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  phoneNumber: string;
  address: string;
  owner: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  restaurantId: string;
}

export const restaurants: Restaurant[] = [
  {
    id: "Shawk",
    name: "Shawk",
    image: h1,
    rating: 4.5,
    cuisine: "Italian, Pizza",
    deliveryTime: "25-30 min",
    phoneNumber: "8075561821",
    address: "Near Law Gate LPU, Maheru, Phagwara, Punjab 144411, India.",
    owner: "Marco Rossi"
  },
  {
    id: "Shaheen Restauran",
    name: "Shaheen Restaurant",
    image: h2,
    rating: 4.3,
    cuisine: "American, Burgers",
    deliveryTime: "20-25 min",
    phoneNumber: "9041905063",
    address: "Near Law Gate LPU, Maheru, Phagwara, Punjab 144411, India.",
    owner: "John Smith"
  },
  {
    id: "Kerala Cusine Hut",
    name: "Kerala Cusine Hut",
    image: h3,
    rating: 4.6,
    cuisine: "Indian, North Indian",
    deliveryTime: "30-35 min",
    phoneNumber: "8558991081",
    address: "Near Law Gate LPU, Maheru, Phagwara, Punjab 144411, India.",
    owner: "Rajesh Kumar"
  },
  {
    id: "Majlis Restaurent & Cafe",
    name: " Majlis Restaurent & Cafe",
    image: h4,
    rating: 4.4,
    cuisine: "Chinese, Asian",
    deliveryTime: "25-30 min",
    phoneNumber: "8592020511",
    address: "Near Law Gate LPU, Maheru, Phagwara, Punjab 144411, India.",
    owner: "Li Wei"
  },
  {
    id: "Flame & Flavour",
    name: " Flame & Flavour",
    image: h5,
    rating: 4.7,
    cuisine: "Desserts, Bakery",
    deliveryTime: "15-20 min",
    phoneNumber: "7505334931",
    address: " Near Law Gate LPU, Maheru, Phagwara, Punjab 144411, India.",
    owner: "Sarah Johnson"
  },
  {
    id: "The Urban Oven",
    name: "The Urban Oven",
    image: h6,
    rating: 4.2,
    cuisine: "Cafe, Beverages",
    deliveryTime: "15-20 min",
    phoneNumber: "9657200029",
    address: "Near Law Gate LPU, Maheru, Phagwara, Punjab 144411, India.",
    owner: "David Brown"
  }
];

export const menuItems: MenuItem[] = [
  // Shawk
  {
    id: "pp-1",
    name: "Classic Shawaya",
    description: "Classic pizza with fresh mozzarella, basil, and tomato sauce",
    price: 160,
    category: "Pizzas",
    image: pp1,
    restaurantId: "Shawk"
  },
  {
    id: "pp-2",
    name: "Masala Shawaya",
    description: "Classic pizza with fresh mozzarella, basil, and tomato sauce",
    price: 170,
    category: "Pizzas",
    image: pp2,
    restaurantId: "Shawk"
  },
  {
    id: "pp-3",
    name: "Pepperoni Delight",
    description: "Loaded with pepperoni, cheese, and Italian herbs",
    price: 399,
    category: "Pizzas",
    image: pepperoniPizza,
    restaurantId: "Shawk"
  },
  {
    id: "pp-4",
    name: "Veggie Supreme",
    description: "Bell peppers, onions, olives, mushrooms, and sweet corn",
    price: 349,
    category: "Pizzas",
    image: veggieSupreme,
    restaurantId: "Shawk"
  },
  {
    id: "pp-5",
    name: "Garlic Bread",
    description: "Toasted bread with garlic butter and herbs",
    price: 119,
    category: "Sides",
    image: CheeseGarlicBread,
    restaurantId: "Shawk"
  },
  {
    id: "pp-6",
    name: "Coca Cola",
    description: "Chilled 500ml bottle",
    price: 49,
    category: "Drinks",
    image: CocaCola,
    restaurantId: "Shawk"
  },

  // Burger Hub
  {
    id: "bh-1",
    name: "Chicken Kebda",
    description: "Crispy chicken patty with lettuce, tomato, and special sauce",
    price: 129,
    category: "Burgers",
    image: pp3,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "bh-2",
    name: "Chicken Shawaya Mandir",
    description: "Crispy chicken patty with lettuce, tomato, and special sauce",
    price: 179,
    category: "Burgers",
    image: pp4,
    restaurantId: "Shaheen Restauran"
  },
  
  {
    id: "bh-3",
    name: "Classic Chicken Burger",
    description: "Crispy chicken patty with lettuce, tomato, and special sauce",
    price: 179,
    category: "Burgers",
    image: chickenBurger,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "bh-4",
    name: "Cheese Blast Burger",
    description: "Double cheese, beef patty, pickles, and mayo",
    price: 229,
    category: "Burgers",
    image: pp5,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "bh-5",
    name: "Veg Paneer Burger",
    description: "Spicy paneer patty with onions and mint sauce",
    price: 159,
    category: "Burgers",
    image: chickenBurger,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "bh-6",
    name: "French Fries",
    description: "Crispy golden fries with ketchup",
    price: 99,
    category: "Sides",
    image: CheeseGarlicBread,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "bh-7",
    name: "Onion Rings",
    description: "Crispy fried onion rings with dipping sauce",
    price: 129,
    category: "Sides",
    image: Onionrings,
    restaurantId: "Shaheen Restauran"
  },

  // Spice Garden
  {
    id: "sg-1",
    name: "Chicken Biriyani",
    description: "Creamy tomato-based curry with tender chicken",
    price: 129,
    category: "Main Course",
    image: pp6,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "sg-2",
    name: "Paneer Tikka Masala",
    description: "Grilled paneer in spiced tomato gravy",
    price: 169,
    category: "Main Course",
    image: butterChicken,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "sg-3",
    name: "Biryani",
    description: "Fragrant basmati rice with aromatic spices and meat",
    price: 249,
    category: "Rice",
    image: biryani,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "sg-4",
    name: "Naan Bread",
    description: "Soft leavened bread baked in tandoor",
    price: 49,
    category: "Breads",
    image: CheeseGarlicBread,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "sg-5",
    name: "Mango Lassi",
    description: "Thick and creamy mango yogurt drink",
    price: 89,
    category: "Drinks",
    image: cappuccino,
    restaurantId: "Kerala Cusine Hut"
  },

  // Dragon Wok
   {
    id: "dw-1",
    name: "Shawarma",
    description: "Deep-fried vegetable balls in tangy sauce",
    price: 169,
    category: "Starters",
    image: pp7,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "dw-2",
    name: "Hakka Noodles",
    description: "Stir-fried noodles with vegetables and soy sauce",
    price: 189,
    category: "Noodles",
    image: hakkaNoodles,
    restaurantId: "Majlis Restaurent & Cafe"
  },
 
  {
    id: "dw-3",
    name: "Fried Rice",
    description: "Wok-tossed rice with vegetables and eggs",
    price: 179,
    category: "Rice",
    image: biryani,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "dw-4",
    name: "Spring Rolls",
    description: "Crispy rolls stuffed with vegetables",
    price: 129,
    category: "Starters",
    image: hakkaNoodles,
    restaurantId: "Majlis Restaurent & Cafe"
  },

  // Sweet Treats
  {
    id: "st-1",
    name: "Hyderabadi Chicken Biriyani",
    description: "Warm brownie with vanilla ice cream",
    price: 129,
    category: "Desserts",
    image: pp9,
    restaurantId: "Flame & Flavour"
  },

  {
    id: "st-2",
    name: "Malai Tikka Chicken Biriyani",
    description: "Warm brownie with vanilla ice cream",
    price: 129,
    category: "Desserts",
    image: pp10,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "st-3",
    name: "Gulab Jamun",
    description: "Traditional Indian sweet (2 pieces)",
    price: 79,
    category: "Desserts",
    image: pp8,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "st-4",
    name: "Chocolate Shake",
    description: "Thick chocolate milkshake with whipped cream",
    price: 119,
    category: "Shakes",
    image: cappuccino,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "st-5",
    name: "Red Velvet Cake",
    description: "Slice of rich red velvet with cream cheese frosting",
    price: 149,
    category: "Cakes",
    image: chocolateBrownie,
    restaurantId: "Flame & Flavour"
  },

  // Cafe Mocha
  {
    id: "cm-1",
    name: "Paneer Fried Rice",
    description: "Espresso with steamed milk and foam",
    price: 110,
    category: "Coffee",
    image: pp11,
    restaurantId: "The Urban Oven"
  },
  {
    id: "cm-1",
    name: "Egg Fried Rice",
    description: "Espresso with steamed milk and foam",
    price: 120,
    category: "Coffee",
    image: pp12,
    restaurantId: "The Urban Oven"
  },
  {
    id: "cm-3",
    name: "Chicken Fried Rice",
    description: "Espresso with steamed milk and foam",
    price: 129,
    category: "Coffee",
    image: pp13,
    restaurantId: "The Urban Oven"
  },
  {
    id: "cm-4",
    name: "Iced Coffee",
    description: "Cold brew coffee with ice and milk",
    price: 99,
    category: "Coffee",
    image: cappuccino,
    restaurantId: "The Urban Oven"
  },
  {
    id: "cm-5",
    name: "Fresh Lime Soda",
    description: "Refreshing lime soda with mint",
    price: 69,
    category: "Beverages",
    image: CocaCola,
    restaurantId: "The Urban Oven"
  },
  {
    id: "cm-4",
    name: "Sandwich",
    description: "Grilled vegetable sandwich with cheese",
    price: 139,
    category: "Snacks",
    image: CheeseGarlicBread,
    restaurantId: "The Urban Oven"
  }
];

export const getRestaurantById = (id: string): Restaurant | undefined => {
  return restaurants.find(r => r.id === id);
};

export const getMenuByRestaurant = (restaurantId: string): MenuItem[] => {
  return menuItems.filter(item => item.restaurantId === restaurantId);
};

export const getCategoriesByRestaurant = (restaurantId: string): string[] => {
  const items = getMenuByRestaurant(restaurantId);
  const categories = [...new Set(items.map(item => item.category))];
  return ['All', ...categories];
};
