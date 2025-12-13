// Food images - using placeholders until proper images are added
const placeholderImage = "/placeholder.svg";

// Food images
import margheritaPizza from '@/assets/food/margherita-pizza.jpg';
import pepperoniPizza from '@/assets/food/pepperoni-pizza.jpg';
import veggieSupreme from '@/assets/food/Veggie-Supreme.jpg';
import CheeseGarlicBread from '@/assets/food/CheeseGarlicBread.jpg';
import CocaCola from '@/assets/food/CocaCola.jpg';
import chickenBurger from '@/assets/food/chicken-burger.jpg';
import butterChicken from '@/assets/food/butter-chicken.jpg';
import biryani from '@/assets/food/biryani.jpg';
import hakkaNoodles from '@/assets/food/hakka-noodles.jpg';
import chocolateBrownie from '@/assets/food/chocolate-brownie.jpg';
import cappuccino from '@/assets/food/cappuccino.jpg';
import Onionrings from '@/assets/food/Onionrings.jpg';
import pp5 from '@/assets/food/pp5.jpg';
import pp13 from '@/assets/food/pp13.jpg';
import pp8 from '@/assets/food/pp8.jpg';

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
  // 1. Shawk (Pizza Palace items)
  {
    id: "pp-1",
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, basil, and tomato sauce",
    price: 299,
    category: "Pizzas",
    image: margheritaPizza,
    restaurantId: "Shawk"
  },
  {
    id: "pp-2",
    name: "Pepperoni Delight",
    description: "Loaded with pepperoni, cheese, and Italian herbs",
    price: 399,
    category: "Pizzas",
    image: pepperoniPizza,
    restaurantId: "Shawk"
  },
  {
    id: "pp-3",
    name: "Veggie Supreme",
    description: "Bell peppers, onions, olives, mushrooms, and sweet corn",
    price: 349,
    category: "Pizzas",
    image: veggieSupreme,
    restaurantId: "Shawk"
  },
  {
    id: "pp-4",
    name: "Garlic Bread",
    description: "Toasted bread with garlic butter and herbs",
    price: 119,
    category: "Sides",
    image: CheeseGarlicBread,
    restaurantId: "Shawk"
  },
  {
    id: "pp-5",
    name: "Coca Cola",
    description: "Chilled 500ml bottle",
    price: 49,
    category: "Drinks",
    image: CocaCola,
    restaurantId: "Shawk"
  },

  // 1. Shawk - Additional Items
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

  // 2. Shaheen Restaurant (Burger Hub items)
  {
    id: "bh-1",
    name: "Classic Chicken Burger",
    description: "Crispy chicken patty with lettuce, tomato, and special sauce",
    price: 179,
    category: "Burgers",
    image: chickenBurger,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "bh-2",
    name: "Cheese Blast Burger",
    description: "Double cheese, beef patty, pickles, and mayo",
    price: 229,
    category: "Burgers",
    image: pp5,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "bh-3",
    name: "Veg Paneer Burger",
    description: "Spicy paneer patty with onions and mint sauce",
    price: 159,
    category: "Burgers",
    image: placeholderImage,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "bh-4",
    name: "French Fries",
    description: "Crispy golden fries with ketchup",
    price: 99,
    category: "Sides",
    image: placeholderImage,
    restaurantId: "Shaheen Restauran"
  },
  {
    id: "bh-5",
    name: "Onion Rings",
    description: "Crispy fried onion rings with dipping sauce",
    price: 129,
    category: "Sides",
    image: Onionrings,
    restaurantId: "Shaheen Restauran"
  },

  // 2. Shaheen - Additional Items
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

  // 3. Kerala Cusine Hut (Spice Garden items)
  {
    id: "sg-1",
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken",
    price: 299,
    category: "Main Course",
    image: butterChicken,
    restaurantId: "Kerala Cusine Hut"
  },
  {
    id: "sg-2",
    name: "Paneer Tikka Masala",
    description: "Grilled paneer in spiced tomato gravy",
    price: 269,
    category: "Main Course",
    image: placeholderImage,
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
    image: placeholderImage,
    restaurantId: "Kerala Cusine Hut"
  },

  // 3. Kerala Cusine Hut - Additional Items
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

  // 4. Majlis Restaurent & Cafe (Dragon Wok items)
  {
    id: "dw-1",
    name: "Hakka Noodles",
    description: "Stir-fried noodles with vegetables and soy sauce",
    price: 189,
    category: "Noodles",
    image: hakkaNoodles,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "dw-2",
    name: "Manchurian",
    description: "Deep-fried vegetable balls in tangy sauce",
    price: 169,
    category: "Starters",
    image: placeholderImage,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "dw-3",
    name: "Fried Rice",
    description: "Wok-tossed rice with vegetables and eggs",
    price: 179,
    category: "Rice",
    image: pp13,
    restaurantId: "Majlis Restaurent & Cafe"
  },
  {
    id: "dw-4",
    name: "Spring Rolls",
    description: "Crispy rolls stuffed with vegetables",
    price: 129,
    category: "Starters",
    image: placeholderImage,
    restaurantId: "Majlis Restaurent & Cafe"
  },

  // 4. Majlis Restaurent & Cafe - Additional Items
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

  // 5. Flame & Flavour (Sweet Treats items)
  {
    id: "st-1",
    name: "Chocolate Brownie",
    description: "Warm brownie with vanilla ice cream",
    price: 129,
    category: "Desserts",
    image: chocolateBrownie,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "st-2",
    name: "Gulab Jamun",
    description: "Traditional Indian sweet (2 pieces)",
    price: 79,
    category: "Desserts",
    image: pp8,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "st-3",
    name: "Chocolate Shake",
    description: "Thick chocolate milkshake with whipped cream",
    price: 119,
    category: "Shakes",
    image: placeholderImage,
    restaurantId: "Flame & Flavour"
  },
  {
    id: "st-4",
    name: "Red Velvet Cake",
    description: "Slice of rich red velvet with cream cheese frosting",
    price: 149,
    category: "Cakes",
    image: placeholderImage,
    restaurantId: "Flame & Flavour"
  },

  // 5. Flame & Flavour - Additional Items
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

  // 6. The Urban Oven (Cafe Mocha items)
  {
    id: "cm-1",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 129,
    category: "Coffee",
    image: cappuccino,
    restaurantId: "The Urban Oven"
  },
  {
    id: "cm-2",
    name: "Iced Coffee",
    description: "Cold brew coffee with ice and milk",
    price: 99,
    category: "Coffee",
    image: placeholderImage,
    restaurantId: "The Urban Oven"
  },
  {
    id: "cm-3",
    name: "Fresh Lime Soda",
    description: "Refreshing lime soda with mint",
    price: 69,
    category: "Beverages",
    image: placeholderImage,
    restaurantId: "The Urban Oven"
  },
  {
    id: "cm-4",
    name: "Sandwich",
    description: "Grilled vegetable sandwich with cheese",
    price: 139,
    category: "Snacks",
    image: placeholderImage,
    restaurantId: "The Urban Oven"
  },

  // 6. The Urban Oven - Additional Items
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
