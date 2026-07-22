'use client';
import { motion } from 'framer-motion';
import { generateWhatsAppLink } from '@/utils/whatsapp';
import { Check, Info, Leaf, ShieldCheck, Heart, Truck } from 'lucide-react';
import styles from './SubscriptionPlans.module.css';

export default function SubscriptionPlans() {
  const handleSubscribe = (planName: string) => {
    const url = generateWhatsAppLink(`Hi Mummy Food Hub! I am interested in subscribing to the *${planName}*. Please share the details.`);
    window.open(url, '_blank');
  };

  return (
    <section className={styles.section} id="subscription">
      <div className={styles.header}>
        <h2>Monthly Subscriptions</h2>
        <p>Fresh, hygienic, and affordable homemade meals delivered daily.</p>
      </div>

      {/* Pricing Cards */}
      <div className={styles.cardsGrid}>
        {/* Lunch Plan */}
        <motion.div className={`${styles.card} clay-card`} whileHover={{ y: -5 }}>
          <div className={styles.cardHeader}>
            <div className={styles.planName}>Lunch Subscription</div>
            <div className={styles.planDuration}>(26 Days)</div>
          </div>
          <div className={styles.priceWrap}>
            <div className={styles.price}>₹1999</div>
          </div>
          <div className={styles.savings}>
            Normal Cost: ₹2054<br />
            <strong>Savings: ₹55</strong>
          </div>
          <button className={`neu-button ${styles.btn}`} onClick={() => handleSubscribe('Lunch Subscription (26 Days)')}>
            Start Lunch Plan
          </button>
        </motion.div>

        {/* Complete Plan */}
        <motion.div className={`${styles.card} ${styles.popularCard} clay-card`} whileHover={{ y: -5 }}>
          <div className={styles.popularBadge}>⭐ Complete Monthly Plan ⭐</div>
          <div className={styles.cardHeader}>
            <div className={styles.planName}>Breakfast + Lunch + Dinner</div>
            <div className={styles.planDuration}>(30 Days)</div>
          </div>
          <div className={styles.priceWrap}>
            <div className={styles.price}>₹5999<span className={styles.month}>/mo</span></div>
          </div>
          <div className={styles.savings}>
            Normal Cost: ₹6510<br />
            <strong style={{ color: 'var(--color-green)' }}>Total Savings: ₹511/month 👍</strong>
          </div>
          <button className={`neu-button ${styles.btn}`} onClick={() => handleSubscribe('Complete Monthly Plan (₹5999)')}>
            Start Complete Plan
          </button>
        </motion.div>

        {/* Dinner Plan */}
        <motion.div className={`${styles.card} clay-card`} whileHover={{ y: -5 }}>
          <div className={styles.cardHeader}>
            <div className={styles.planName}>Dinner Subscription</div>
            <div className={styles.planDuration}>(30 Days)</div>
          </div>
          <div className={styles.priceWrap}>
            <div className={styles.price}>₹2299</div>
          </div>
          <div className={styles.savings}>
            Normal Cost: ₹2370<br />
            <strong>Savings: ₹71</strong>
          </div>
          <button className={`neu-button ${styles.btn}`} onClick={() => handleSubscribe('Dinner Subscription (30 Days)')}>
            Start Dinner Plan
          </button>
        </motion.div>
      </div>

      {/* Details Section */}
      <div className={styles.detailsGrid}>
        <div className={`${styles.detailBox} clay-card`}>
          <h3>Each Meal Includes:</h3>
          <ul className={styles.featureList}>
            <li><Check size={18} color="var(--color-green)" /> 4 Butter Roti</li>
            <li><Check size={18} color="var(--color-green)" /> Dal</li>
            <li><Check size={18} color="var(--color-green)" /> Chawal</li>
            <li><Check size={18} color="var(--color-green)" /> 1 Seasonal Sabji</li>
            <li><Check size={18} color="var(--color-green)" /> Fresh Salad</li>
          </ul>
        </div>
        
        <div className={`${styles.detailBox} clay-card`}>
          <h3>Breakfast Variety (Seven Days, Seven Taste):</h3>
          <p className={styles.descText}>
            Aloo Paratha / Triangle Paratha / Puri / Poha / Upma / Macaroni / Sandwiches
          </p>
          <h3 style={{ marginTop: '20px' }}>Benefits of Our Plan:</h3>
          <ul className={styles.benefitList}>
            <li><strong>Twice a week:</strong> Extra rotis, or raita once a week.</li>
            <li><strong>Once every 15 days:</strong> Paratha add-on (normally served twice).</li>
            <li><strong>Twice a month:</strong> Choose any sabji of your preference.</li>
          </ul>
        </div>
      </div>

      {/* Note Section */}
      <div className={`${styles.noteBox} clay-card`}>
        <Info size={24} color="var(--color-tomato)" />
        <p><strong>NOTE:</strong> If usage in a month is less than 26 days (or as per the subscription plan), the remaining meals will be seamlessly carried forward to the next month.</p>
      </div>

      {/* Trust Badges */}
      <div className={styles.trustGrid}>
        <div className={styles.trustItem}>
          <Leaf size={32} color="var(--color-green)" />
          <span>Fresh Ingredients</span>
        </div>
        <div className={styles.trustItem}>
          <ShieldCheck size={32} color="var(--color-orange)" />
          <span>Hygienic Preparation</span>
        </div>
        <div className={styles.trustItem}>
          <Heart size={32} color="var(--color-tomato)" />
          <span>Homemade with Love</span>
        </div>
        <div className={styles.trustItem}>
          <Truck size={32} color="var(--color-brown)" />
          <span>On-Time Delivery</span>
        </div>
      </div>
    </section>
  );
}
