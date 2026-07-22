'use client';
import { MapPin, Phone, Clock } from 'lucide-react';
import styles from './LocationSection.module.css';

export default function LocationSection() {
  return (
    <section className={styles.section} id="location">
      <div className={styles.header}>
        <h2>Visit Us</h2>
        <p>Come pick up your fresh meals or find us here.</p>
      </div>

      <div className={styles.container}>
        <div className={`${styles.infoBox} clay-card`}>
          <div className={styles.infoItem}>
            <div className={styles.iconWrap}><MapPin size={24} color="var(--color-tomato)" /></div>
            <div>
              <h3>Our Address</h3>
              <p>Shop No. 3, Shambhu Vatika,<br/>Sector 106, Noida, U.P.</p>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.iconWrap}><Phone size={24} color="var(--color-green)" /></div>
            <div>
              <h3>Contact</h3>
              <p>Anmol Shrivastava<br/>+91 7065665988</p>
            </div>
          </div>
          
          <div className={styles.infoItem}>
            <div className={styles.iconWrap}><Clock size={24} color="var(--color-orange)" /></div>
            <div>
              <h3>Hours</h3>
              <p>Open Daily<br/>10:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className={`${styles.mapBox} clay-card`}>
          <iframe 
            src="https://maps.google.com/maps?q=Shambhu+Vatika,+Sector+106,+Noida,+U.P.&t=&z=14&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mummy Food Hub Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
