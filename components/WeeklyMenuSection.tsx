'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const weeklyData = [
  { day: 'Monday', lunch: 'Rajma Chawal + Salad', dinner: 'Mix Veg + 4 Butter Roti' },
  { day: 'Tuesday', lunch: 'Kadi Pakoda + Rice', dinner: 'Aloo Gobi + 4 Butter Roti' },
  { day: 'Wednesday', lunch: 'Chole Bhature (2)', dinner: 'Dal Makhani + Jeera Rice' },
  { day: 'Thursday', lunch: 'Matar Paneer + 4 Roti', dinner: 'Yellow Dal Tadka + Rice' },
  { day: 'Friday', lunch: 'Veg Pulao + Boondi Raita', dinner: 'Palak Paneer + 4 Roti' },
  { day: 'Saturday', lunch: 'Special Thali', dinner: 'Paneer Butter Masala + Naan' },
  { day: 'Sunday', lunch: 'Aloo Paratha (2) + Curd', dinner: 'Chef Special Surprise' }
];

export default function WeeklyMenuSection() {
  const [activeDay, setActiveDay] = useState('Monday');

  const activeData = weeklyData.find(d => d.day === activeDay);

  return (
    <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '3rem', color: 'var(--color-brown)', marginBottom: '12px' }}>Day-Wise Menu</h2>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-brown)', opacity: 0.8 }}>
          See what&apos;s cooking every day in our kitchen.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '20px', justifyContent: 'center' }}>
        {weeklyData.map((d) => (
          <button
            key={d.day}
            onClick={() => setActiveDay(d.day)}
            className={`neu-button ${activeDay === d.day ? '' : 'neu-button-secondary'}`}
            style={{ padding: '12px 28px', fontSize: '1rem', borderRadius: '30px', whiteSpace: 'nowrap' }}
          >
            {d.day}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="clay-card"
            style={{ padding: '40px', maxWidth: '600px', width: '100%', textAlign: 'center', background: 'var(--color-cream)' }}
          >
            <h3 style={{ fontSize: '2rem', color: 'var(--color-tomato)', marginBottom: '30px' }}>
              {activeDay}&apos;s Special
            </h3>
            
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-brown)', marginBottom: '8px' }}>☀️ LUNCH</div>
              <div style={{ fontSize: '1.4rem', color: 'var(--color-brown)' }}>{activeData?.lunch}</div>
            </div>

            <div style={{ height: '1px', background: 'rgba(0,0,0,0.1)', margin: '24px 0' }}></div>

            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-brown)', marginBottom: '8px' }}>🌙 DINNER</div>
              <div style={{ fontSize: '1.4rem', color: 'var(--color-brown)' }}>{activeData?.dinner}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
