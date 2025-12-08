import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Copy, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, copyOrderText, CustomerDetails } from '@/utils/whatsapp';
import { getRestaurantById } from '@/data/restaurantData';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface CheckoutFormProps {
  onBack: () => void;
  onClose: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onBack, onClose }) => {
  const { cart, clearCart } = useCart();
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    phone: '',
    address: '',
    note: '',
  });
  const [showFallbackDialog, setShowFallbackDialog] = useState(false);
  const [orderText, setOrderText] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    if (!customer.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!customer.phone.trim()) {
      toast.error('Please enter your phone number');
      return false;
    }
    if (customer.phone.length < 10) {
      toast.error('Please enter a valid phone number');
      return false;
    }
    if (!customer.address.trim()) {
      toast.error('Please enter your delivery address');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    try {
      // Get restaurant ID from cart items (all items should be from the same restaurant)
      const restaurantId = cart.length > 0 ? cart[0].restaurantId : null;
      const restaurant = restaurantId ? getRestaurantById(restaurantId) : null;
      const restaurantNumber = restaurant?.phoneNumber || '919876543210'; // Fallback to default number
      
      const whatsappUrl = buildWhatsAppUrl(cart, customer, restaurantNumber);
      
      // Try to open WhatsApp
      const newWindow = window.open(whatsappUrl, '_blank');
      
      // Fallback if popup was blocked or WhatsApp can't open
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        const text = copyOrderText(cart, customer);
        setOrderText(text);
        setShowFallbackDialog(true);
      } else {
        toast.success('Opening WhatsApp...');
        clearCart();
        onClose();
      }
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      const text = copyOrderText(cart, customer);
      setOrderText(text);
      setShowFallbackDialog(true);
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(orderText);
    toast.success('Order details copied to clipboard!');
  };

  return (
    <>
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={onBack}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Back to cart"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="font-display text-2xl font-semibold">Checkout</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={customer.name}
                onChange={handleInputChange}
                required
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={customer.phone}
                onChange={handleInputChange}
                required
                maxLength={15}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address *</Label>
              <Textarea
                id="address"
                name="address"
                placeholder="Enter your complete delivery address"
                value={customer.address}
                onChange={handleInputChange}
                required
                rows={3}
                maxLength={500}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="note">Additional Note (Optional)</Label>
              <Textarea
                id="note"
                name="note"
                placeholder="Any special instructions or preferences"
                value={customer.note}
                onChange={handleInputChange}
                rows={2}
                maxLength={200}
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4 space-y-1">
              <p className="text-sm font-medium">Payment Method</p>
              <p className="text-lg font-semibold text-primary">Cash on Delivery</p>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-secondary hover:opacity-90 text-secondary-foreground shadow-lg text-lg h-12 gap-2 mt-4"
          >
            <MessageCircle className="w-5 h-5" />
            Confirm Order via WhatsApp
          </Button>
        </form>
      </div>

      <AlertDialog open={showFallbackDialog} onOpenChange={setShowFallbackDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Unable to Open WhatsApp</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-4">
                <p>
                  We couldn't open WhatsApp automatically. Please copy your order details below
                  and send them manually to our WhatsApp number.
                </p>
                <div className="bg-muted rounded-lg p-4 max-h-60 overflow-y-auto">
                  <pre className="text-xs whitespace-pre-wrap font-mono">{orderText}</pre>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleCopyText} className="flex-1 gap-2">
                    <Copy className="w-4 h-4" />
                    Copy Order Details
                  </Button>
                  <Button
                    onClick={() => {
                      setShowFallbackDialog(false);
                      clearCart();
                      onClose();
                    }}
                    variant="outline"
                    className="flex-1"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default CheckoutForm;
