import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Minus, Plus, Trash2, X } from 'lucide-react';
import { DELIVERY_FEE } from '@/utils/whatsapp';
import CheckoutForm from './CheckoutForm';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = getCartTotal();
  const total = subtotal + DELIVERY_FEE;

  const handleProceed = () => {
    setShowCheckout(true);
  };

  const handleBackToCart = () => {
    setShowCheckout(false);
  };

  if (showCheckout) {
    return (
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="right" className="w-full sm:max-w-lg overflow-y-auto">
          <CheckoutForm onBack={handleBackToCart} onClose={onClose} />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl">Your Cart</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground text-lg">Your cart is empty</p>
              <p className="text-sm text-muted-foreground">Add some delicious items to get started!</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-muted/50 rounded-xl p-4 space-y-3">
                  <div className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground line-clamp-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                      <p className="text-lg font-bold text-primary mt-1">₹{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors h-fit"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-background border border-border rounded-lg p-2 hover:bg-muted transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-background border border-border rounded-lg p-2 hover:bg-muted transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-bold text-lg">₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="font-medium">₹{DELIVERY_FEE}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">₹{total}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  onClick={handleProceed}
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-lg text-lg h-12"
                >
                  Proceed to Checkout
                </Button>
                <Button
                  onClick={clearCart}
                  variant="outline"
                  className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
