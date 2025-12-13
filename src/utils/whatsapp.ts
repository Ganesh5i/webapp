import { CartItem } from '@/contexts/CartContext';

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  note?: string;
}

export const DELIVERY_FEE = 20;

export const buildWhatsAppUrl = (
  cart: CartItem[],
  customer: CustomerDetails,
  restaurantNumber: string = '919876543210'
): string => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + DELIVERY_FEE;
  
  const timestamp = new Date().toISOString();
  
  let message = `*Unieats Order*\n`;
  message += `Time: ${timestamp}\n`;
  message += `Customer: ${customer.name} | ${customer.phone}\n`;
  message += `Address: ${customer.address}\n\n`;
  
  message += `*Items:*\n`;
  cart.forEach(item => {
    const lineTotal = item.price * item.quantity;
    message += `${item.quantity} x ${item.name} — ₹${lineTotal}\n`;
  });
  
  message += `\n`;
  message += `Subtotal: ₹${subtotal}\n`;
  message += `Delivery: ₹${DELIVERY_FEE}\n`;
  message += `*Total: ₹${total}*\n\n`;
  
  message += `Payment: Cash on Delivery\n`;
  
  if (customer.note) {
    message += `Note: ${customer.note}\n`;
  }
  
  message += `\nPlease confirm delivery time. Thanks!`;
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${restaurantNumber}?text=${encodedMessage}`;
};

export const copyOrderText = (
  cart: CartItem[],
  customer: CustomerDetails
): string => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + DELIVERY_FEE;
  
  const timestamp = new Date().toISOString();
  
  let message = `Unieats Order\n`;
  message += `Time: ${timestamp}\n`;
  message += `Customer: ${customer.name} | ${customer.phone}\n`;
  message += `Address: ${customer.address}\n\n`;
  
  message += `Items:\n`;
  cart.forEach(item => {
    const lineTotal = item.price * item.quantity;
    message += `${item.quantity} x ${item.name} — ₹${lineTotal}\n`;
  });
  
  message += `\n`;
  message += `Subtotal: ₹${subtotal}\n`;
  message += `Delivery: ₹${DELIVERY_FEE}\n`;
  message += `Total: ₹${total}\n\n`;
  
  message += `Payment: Cash on Delivery\n`;
  
  if (customer.note) {
    message += `Note: ${customer.note}\n`;
  }
  
  message += `\nPlease confirm delivery time. Thanks!`;
  
  return message;
};
