'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/store/CartContext';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import styles from './CartDrawer.module.css';
import { useState, useEffect } from 'react';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, subtotal } = useCart();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Hardcoded distance based delivery for demo
  const deliveryCharge = items.length > 0 ? 15 : 0; 
  const grandTotal = subtotal + deliveryCharge;

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    address: '',
    time: '8:00 PM',
    paymentMethod: 'Cash on Delivery'
  });

  const handleOrder = () => {
    const link = generateWhatsAppLink(items, deliveryCharge, customer);
    window.open(link, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.overlay}
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={isMobile ? { y: '100%' } : { x: '100%' }}
            animate={isMobile ? { y: 0 } : { x: 0 }}
            exit={isMobile ? { y: '100%' } : { x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`${styles.drawer} glass-panel`}
          >
            <div className={styles.header}>
              <h2>Your Order</h2>
              <button onClick={() => setIsCartOpen(false)} className={styles.closeBtn}>
                <X size={24} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className={styles.emptyCart}>
                <ShoppingBag size={48} className={styles.emptyIcon} />
                <p>Your cart is empty.</p>
                <button className="neu-button" onClick={() => setIsCartOpen(false)}>
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className={styles.content}>
                <div className={styles.itemsList}>
                  {items.map(item => (
                    <div key={item.id} className={`${styles.cartItem} clay-card`}>
                      <div className={styles.itemInfo}>
                        <h4>{item.name}</h4>
                        <p>₹{item.price}</p>
                      </div>
                      <div className={styles.itemActions}>
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus size={16} />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`${styles.summary} clay-card`}>
                  <div className={styles.summaryRow}>
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span>Delivery Charge</span>
                    <span>₹{deliveryCharge}</span>
                  </div>
                  <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                    <span>Grand Total</span>
                    <span>₹{grandTotal}</span>
                  </div>
                </div>

                <div className={styles.customerDetails}>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={customer.name}
                    onChange={e => setCustomer({...customer, name: e.target.value})}
                    className={styles.input}
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    value={customer.phone}
                    onChange={e => setCustomer({...customer, phone: e.target.value})}
                    className={styles.input}
                  />
                  <textarea 
                    placeholder="Delivery Address" 
                    value={customer.address}
                    onChange={e => setCustomer({...customer, address: e.target.value})}
                    className={styles.input}
                    rows={2}
                  />
                </div>

                <button 
                  className={`neu-button ${styles.orderBtn}`} 
                  onClick={handleOrder}
                  disabled={!customer.name || !customer.phone || !customer.address}
                >
                  Proceed to WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
