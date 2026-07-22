import { CartItem } from '@/store/CartContext';

export const generateSimpleWhatsAppLink = (message: string) => {
  const WHATSAPP_NUMBER = '917065665988';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const generateWhatsAppLink = (
  items: CartItem[], 
  deliveryCharge: number, 
  customerDetails: { name: string; phone: string; address: string; time: string; paymentMethod: string }
) => {
  const WHATSAPP_NUMBER = '917065665988'; // Format: country code + number

  let message = `Hello Mummy Food Hub,\n\nI would like to place an order.\n\n*Order Details*\n`;
  
  let subtotal = 0;
  items.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    message += `${item.name} ×${item.quantity} = ₹${itemTotal}\n`;
  });

  const grandTotal = subtotal + deliveryCharge;

  message += `\nDelivery Charge = ₹${deliveryCharge}\n`;
  message += `*Grand Total = ₹${grandTotal}*\n\n`;

  message += `*Customer Details*\n`;
  message += `Name: ${customerDetails.name}\n`;
  message += `Phone: ${customerDetails.phone}\n`;
  message += `Address: ${customerDetails.address}\n`;
  message += `Preferred Delivery Time: ${customerDetails.time}\n`;
  message += `Payment Method: ${customerDetails.paymentMethod}\n\n`;
  message += `Please confirm my order.`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
