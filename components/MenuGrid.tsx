'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '@/app/generated/prisma/client';
import FoodCard from './FoodCard';

export default function MenuGrid({ items }: { items: MenuItem[] }) {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Lunch', 'Dinner', 'Veg', 'Non Veg', 'Add-ons'];

  const filteredItems = items.filter(item => {
    if (filter === 'All') return true;
    if (filter === 'Veg') return item.isVeg;
    if (filter === 'Non Veg') return !item.isVeg;
    return item.category === filter;
  });

  return (
    <div>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '60px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`neu-button ${filter === cat ? '' : 'neu-button-secondary'}`}
            style={{ padding: '12px 28px', fontSize: '1rem', borderRadius: '30px' }}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <motion.div 
        layout
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '40px' 
        }}
      >
        <AnimatePresence>
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <FoodCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredItems.length === 0 && (
        <div style={{ textAlign: 'center', color: 'var(--color-brown)', opacity: 0.6, marginTop: '40px' }}>
          No items found in this category.
        </div>
      )}
    </div>
  );
}
