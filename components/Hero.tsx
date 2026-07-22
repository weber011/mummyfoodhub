'use client';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Home-Cooked Happiness Delivered Every Day <span style={{ color: 'var(--color-tomato)' }}>❤️</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fresh, hygienic and affordable homemade meals delivered to your home, hostel, office or PG. Order a single meal or subscribe to flexible monthly meal plans.
        </motion.p>
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="neu-button">Order Today's Meal</button>
          <button className="neu-button neu-button-secondary">View Subscription Plans</button>
        </motion.div>
        
        <motion.div 
          className={styles.badges}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="glass-panel">🌱 Fresh Daily</span>
          <span className="glass-panel">🍳 Homemade</span>
          <span className="glass-panel">✨ Hygienic Kitchen</span>
          <span className="glass-panel">🚚 Doorstep Delivery</span>
        </motion.div>
      </div>

      <div className={styles.imageWrapper}>
        <motion.div 
          className={`${styles.tiffinBox} animate-float`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className={styles.tiffinMock}>
            <img src="/images/real_hero_tiffin_1784699964771.png" alt="Premium Realistic Tiffin" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
