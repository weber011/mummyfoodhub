'use client';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/store/CartContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { items, toggleCart } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
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
          <button onClick={toggleCart} className={styles.cartBtn}>
            <ShoppingCart size={24} />
            {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
          </button>
          <button className="neu-button" style={{ padding: '10px 24px', fontSize: '1rem' }}>
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
}
