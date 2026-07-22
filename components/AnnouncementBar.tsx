'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "🍱 Today's Fresh Menu Available",
  "🎉 Combo Offer ₹99 Only",
  "🚚 Delivery ₹5–₹20",
  "⏰ Order Before 7:30 PM",
  "❤️ Har Bite Mein Maa Ka Pyaar"
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      background: 'var(--color-orange)',
      color: 'var(--color-white)',
      padding: '8px 0',
      textAlign: 'center',
      fontSize: '0.9rem',
      fontWeight: 600,
      position: 'sticky',
      top: 0,
      zIndex: 100,
      overflow: 'hidden',
      height: '36px'
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', width: '100%', left: 0 }}
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
