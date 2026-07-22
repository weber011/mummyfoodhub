'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/store/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { items, toggleCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToMenu = () => {
    document.getElementById('today-menu')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Responsive Top Header */}
      <header className={`${styles.header} glass-panel`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            Mummy Food Hub
          </Link>
          
          <nav className={styles.nav}>
            <Link href="#today-menu">Today&apos;s Menu</Link>
            <Link href="#subscription">Subscription Plans</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#faq">FAQ</Link>
          </nav>
          
          <div className={styles.actions}>
            <button onClick={scrollToMenu} className={`neu-button ${styles.orderBtn}`}>
              Order
            </button>
            <button onClick={toggleCart} className={styles.cartBtn}>
              <ShoppingCart size={24} />
              {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
            </button>
            <button className={styles.mobileMenuBtn} onClick={() => setIsMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <button className={styles.closeMenuBtn} onClick={() => setIsMenuOpen(false)}>
              <X size={40} />
            </button>
            <div className={styles.mobileNavLinks}>
              <Link href="#today-menu" onClick={() => setIsMenuOpen(false)}>Today&apos;s Menu</Link>
              <Link href="#subscription" onClick={() => setIsMenuOpen(false)}>Subscriptions</Link>
              <Link href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
              <Link href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
