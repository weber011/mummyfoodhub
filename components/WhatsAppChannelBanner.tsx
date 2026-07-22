'use client';
import { MessageCircle, BellRing } from 'lucide-react';
import styles from './WhatsAppChannelBanner.module.css';

export default function WhatsAppChannelBanner() {
  const channelLink = "https://whatsapp.com/channel/YOUR_CHANNEL_LINK_HERE"; // Placeholder

  return (
    <section className={styles.section}>
      <div className={`${styles.banner} clay-card`}>
        <div className={styles.content}>
          <div className={styles.iconWrapper}>
            <MessageCircle size={40} color="var(--color-white)" />
            <div className={styles.notificationBadge}>
              <BellRing size={16} color="var(--color-white)" />
            </div>
          </div>
          <div className={styles.textWrapper}>
            <h2>Follow Our WhatsApp Channel</h2>
            <p>Get daily updated Lunch & Dinner menus, Special Offers, and New Dish Alerts directly on your phone!</p>
          </div>
        </div>
        <button 
          className={`neu-button ${styles.joinBtn}`}
          onClick={() => window.open(channelLink, '_blank')}
        >
          Join Channel Now
        </button>
      </div>
    </section>
  );
}
