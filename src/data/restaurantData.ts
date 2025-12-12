// Food images - using placeholders until proper images are added
// All food items will use placeholder.svg as temporary image
const placeholderImage = "/placeholder.svg";
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
    owner: "-"
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
    owner: "-"
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
    owner: "-"
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
    owner: "-"
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
    owner: "-"
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
    owner: "-"
  }
];

export const menuItems: MenuItem[] = [
  // 1. Shawk - 10 Items
  {
    id: "shawk-1",
    name: "Classic Chicken Shawarma",
    description: "Soft pita wrap with juicy roasted chicken, garlic mayo, and veggies",
    price: 120,
    category: "Shawarma",
    image: placeholderImage,
    restaurantId: "Shawk"
  },
  {
    id: "shawk-2",
    name: "Mexican Spicy Shawarma",
    description: "Chicken shawarma tossed in Mexican spices with jalapeños",
    price: 150,
    category: "Shawarma",
    image: placeholderImage,
    restaurantId: "Shawk"
  },
  {
    id: "shawk-3",
    name: "Beef Shawarma Roll",
    description: "Tender beef slices wrapped with tahini and pickles",
    price: 160,
    category: "Shawarma",
    image: placeholderImage,
    restaurantId: "Shawk"
  },
  {
    id: "shawk-4",
    name: "Chicken Cheese Shawarma",
    description: "Extra cheesy chicken shawarma with creamy garlic sauce",
    price: 140,
    category: "Shawarma",
    image: placeholderImage,
    restaurantId: "Shawk"
  },
  {
    id: "shawk-5",
    name: "Falafel Wrap",
    description: "Crispy falafel balls rolled with hummus and salad",
    price: 100,
    category: "Wraps",
    image: placeholderImage,
    restaurantId: "Shawk"
  },
  {
    id: "shawk-6",
    name: "Peri Peri Fries",
    description: "Hot peri peri–seasoned fries",
    price: 90,
    category: "Sides",
    image: placeholderImage,
    restaurantId: "Shawk"
  },
  {
    id: "shawk-7",
    name: "Shawk Combo Box",
    description: "Shawarma + fries + drink combo",
    price: 220,
    category: "Combos",
    image: placeholderImage,
    restaurantId: "Shawk"
  },
  {
    id: "shawk-8",
    name: "Zinger Shawarma",
    description: "Crispy fried chicken inside a shawarma wrap",
    price: 160,
    category: "Shawarma",
    image: placeholderImage,
    restaurantId: "Shawk"
  },
  {
    id: "shawk-9",
    name: "Hummus with Pita",
    description: "Smooth hummus served with fresh pita bread",
    price: 110,
    category: "Sides",
    image: placeholderImage,
    restaurantId: "Shawk"
  },
  {
    id: "shawk-10",
    name: "Mint Lime Cooler",
    description: "Refreshing lime drink with mint",
    price: 60,
    category: "Drinks",
    image: placeholderImage,
    restaurantId: "Shawk"
  },

  // 2. Shaheen - 10 Items
  {
    id: "shaheen-1",
    name: "Shaheen Grilled Chicken (Quarter)",
    description: "Flame-grilled, marinated in Arabian spices",
    price: 180,
    category: "Grilled",
    image: placeholderImage,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "shaheen-2",
    name: "Chicken 65",
    description: "Deep-fried spicy chicken cubes, South Indian style",
    price: 150,
    category: "Starters",
    image: placeholderImage,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "shaheen-3",
    name: "Mutton Pepper Fry",
    description: "Slow-cooked mutton with pepper and curry leaves",
    price: 240,
    category: "Main Course",
    image: placeholderImage,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "shaheen-4",
    name: "Dragon Chicken",
    description: "Crispy chicken in spicy Chinese sauce",
    price: 160,
    category: "Main Course",
    image: placeholderImage,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "shaheen-5",
    name: "Chicken Fried Rice",
    description: "Fragrant rice tossed with chicken and veggies",
    price: 130,
    category: "Rice",
    image: placeholderImage,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "shaheen-6",
    name: "Schezwan Noodles",
    description: "Spicy noodles mixed with vegetables and sauce",
    price: 120,
    category: "Noodles",
    image: placeholderImage,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "shaheen-7",
    name: "Butter Chicken",
    description: "Creamy tomato-based gravy with tender chicken",
    price: 180,
    category: "Main Course",
    image: placeholderImage,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "shaheen-8",
    name: "Mutton Biriyani",
    description: "Traditional dum biriyani with aromatic rice",
    price: 220,
    category: "Rice",
    image: placeholderImage,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "shaheen-9",
    name: "Garlic Naan",
    description: "Soft tandoori naan topped with garlic",
    price: 45,
    category: "Breads",
    image: placeholderImage,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "shaheen-10",
    name: "Gulab Jamun",
    description: "Sweet milk dumplings soaked in syrup",
    price: 40,
    category: "Desserts",
    image: placeholderImage,
    restaurantId: "Shaheen Restauran"
  },

  // 3. Kerala Cusine Hut - 10 Items
  {
    id: "cusine-1",
    name: "Margherita Pizza",
    description: "Classic cheese and tomato pizza",
    price: 189,
    category: "Pizzas",
    image: placeholderImage,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "cusine-2",
    name: "Chicken Supreme Pizza",
    description: "Chicken chunks, veggies, cheese overload",
    price: 299,
    category: "Pizzas",
    image: placeholderImage,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "cusine-3",
    name: "Pepperoni Pizza",
    description: "Crispy pepperoni slices with mozzarella",
    price: 329,
    category: "Pizzas",
    image: placeholderImage,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "cusine-4",
    name: "Veg Delight Pizza",
    description: "Onion, capsicum, sweet corn, olives",
    price: 239,
    category: "Pizzas",
    image: placeholderImage,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "cusine-5",
    name: "Garlic Bread",
    description: "Oven-baked bread with garlic butter",
    price: 99,
    category: "Sides",
    image: placeholderImage,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "cusine-6",
    name: "Cheese Burst Garlic Bread",
    description: "Extra cheesy stuffed garlic bread",
    price: 139,
    category: "Sides",
    image: placeholderImage,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "cusine-7",
    name: "White Sauce Pasta",
    description: "Creamy alfredo pasta with herbs",
    price: 179,
    category: "Pasta",
    image: placeholderImage,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "cusine-8",
    name: "Chicken Popcorn",
    description: "Crunchy bite-sized chicken",
    price: 129,
    category: "Starters",
    image: placeholderImage,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "cusine-9",
    name: "Mojito (Blue/Classic)",
    description: "Refreshing soda-based drink",
    price: 79,
    category: "Drinks",
    image: placeholderImage,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "cusine-10",
    name: "Choco Lava Cake",
    description: "Warm chocolate cake with molten center",
    price: 99,
    category: "Desserts",
    image: placeholderImage,
    restaurantId: "Kerala Cusine Hut"
  },

  // 4. Majlis Restaurent & Cafe - 10 Items
  {
    id: "majlis-1",
    name: "Chicken Mandi",
    description: "Aromatic mandi rice served with chargrilled chicken",
    price: 240,
    category: "Mandi",
    image: placeholderImage,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "majlis-2",
    name: "Mutton Mandi",
    description: "Tender mutton with Yemeni-style rice",
    price: 320,
    category: "Mandi",
    image: placeholderImage,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "majlis-3",
    name: "Majlis Alfaham",
    description: "Arabian-style grilled chicken with spices",
    price: 250,
    category: "Grilled",
    image: placeholderImage,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "majlis-4",
    name: "Thalassery Biriyani",
    description: "Mild, flavorful Kerala biriyani",
    price: 220,
    category: "Rice",
    image: placeholderImage,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "majlis-5",
    name: "Chicken Madhbi",
    description: "Chicken roasted on a stone, served with rice",
    price: 260,
    category: "Main Course",
    image: placeholderImage,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "majlis-6",
    name: "Shawaya Chicken",
    description: "Roasted chicken with Arabic herbs",
    price: 200,
    category: "Main Course",
    image: placeholderImage,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "majlis-7",
    name: "Mutton Soup",
    description: "Warm spiced broth with mutton pieces",
    price: 90,
    category: "Soups",
    image: placeholderImage,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "majlis-8",
    name: "Majlis Special Falooda",
    description: "Rich falooda loaded with vermicelli and ice cream",
    price: 140,
    category: "Desserts",
    image: placeholderImage,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "majlis-9",
    name: "Kunafa",
    description: "Crispy dessert with gooey cheese filling",
    price: 150,
    category: "Desserts",
    image: placeholderImage,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "majlis-10",
    name: "Dates Milkshake",
    description: "Thick shake made from premium dates",
    price: 110,
    category: "Drinks",
    image: placeholderImage,
    restaurantId: "Majlis Restaurent & Cafe"
  },

  // 5. Flame & Flavour - 10 Items
  {
    id: "flame-1",
    name: "Flame Grilled Chicken (Quarter)",
    description: "Smoky grilled chicken with special marinade",
    price: 190,
    category: "Grilled",
    image: placeholderImage,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "flame-2",
    name: "Peri Peri Wings",
    description: "Spicy peri peri–coated chicken wings",
    price: 150,
    category: "Starters",
    image: placeholderImage,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "flame-3",
    name: "BBQ Steak",
    description: "Juicy chicken steak with BBQ sauce",
    price: 260,
    category: "Main Course",
    image: placeholderImage,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "flame-4",
    name: "Crispy Chicken Wrap",
    description: "Fried chicken wrap with veggies",
    price: 160,
    category: "Wraps",
    image: placeholderImage,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "flame-5",
    name: "Cheesy Fries",
    description: "Fries coated in melted cheese",
    price: 110,
    category: "Sides",
    image: placeholderImage,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "flame-6",
    name: "Chicken Pasta Alfredo",
    description: "Creamy white sauce pasta with chicken",
    price: 180,
    category: "Pasta",
    image: placeholderImage,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "flame-7",
    name: "Veg Arrabbiata Pasta",
    description: "Tangy red sauce pasta with herbs",
    price: 150,
    category: "Pasta",
    image: placeholderImage,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "flame-8",
    name: "Flame Special Burger",
    description: "Grilled chicken patty with house sauce",
    price: 170,
    category: "Burgers",
    image: placeholderImage,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "flame-9",
    name: "Brownie with Ice Cream",
    description: "Warm brownie topped with vanilla ice cream",
    price: 130,
    category: "Desserts",
    image: placeholderImage,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "flame-10",
    name: "Watermelon Mojito",
    description: "Fresh watermelon and mint drink",
    price: 70,
    category: "Drinks",
    image: placeholderImage,
    restaurantId: "Flame & Flavour"
  },

  // 6. The Urban Oven - 10 Items
  {
    id: "urban-1",
    name: "Urban Special Pizza",
    description: "Wood-fired pizza loaded with toppings",
    price: 299,
    category: "Pizzas",
    image: placeholderImage,
    restaurantId: "The Urban Oven"
  },
  {
    id: "urban-2",
    name: "Creamy Alfredo Pasta",
    description: "Rich white sauce pasta with herbs",
    price: 179,
    category: "Pasta",
    image: placeholderImage,
    restaurantId: "The Urban Oven"
  },
  {
    id: "urban-3",
    name: "Arrabbiata Pasta",
    description: "Spicy Italian-style red sauce pasta",
    price: 159,
    category: "Pasta",
    image: placeholderImage,
    restaurantId: "The Urban Oven"
  },
  {
    id: "urban-4",
    name: "Oven-Baked Lasagna",
    description: "Layered pasta with cheese and sauce",
    price: 229,
    category: "Pasta",
    image: placeholderImage,
    restaurantId: "The Urban Oven"
  },
  {
    id: "urban-5",
    name: "Garlic Herb Bread",
    description: "Soft bread with garlic and herbs",
    price: 99,
    category: "Sides",
    image: placeholderImage,
    restaurantId: "The Urban Oven"
  },
  {
    id: "urban-6",
    name: "Chicken Strips",
    description: "Crispy fried chicken tenders",
    price: 149,
    category: "Starters",
    image: placeholderImage,
    restaurantId: "The Urban Oven"
  },
  {
    id: "urban-7",
    name: "Urban Signature Burger",
    description: "Thick chicken patty with sauces",
    price: 169,
    category: "Burgers",
    image: placeholderImage,
    restaurantId: "The Urban Oven"
  },
  {
    id: "urban-8",
    name: "Veg Loaded Pizza",
    description: "Fresh veggies with mozzarella cheese",
    price: 249,
    category: "Pizzas",
    image: placeholderImage,
    restaurantId: "The Urban Oven"
  },
  {
    id: "urban-9",
    name: "Chocolate Mousse",
    description: "Smooth and airy chocolate dessert",
    price: 89,
    category: "Desserts",
    image: placeholderImage,
    restaurantId: "The Urban Oven"
  },
  {
    id: "urban-10",
    name: "Oreo Shake",
    description: "Thick shake blended with Oreo biscuits",
    price: 99,
    category: "Drinks",
    image: placeholderImage,
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
