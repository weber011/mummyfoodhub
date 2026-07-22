'use client';
import { MessageCircle, Instagram } from 'lucide-react';
import { generateSimpleWhatsAppLink } from '@/utils/whatsapp';
import styles from './FloatingSocials.module.css';

export default function FloatingSocials() {
  const handleWhatsApp = () => {
    const url = generateSimpleWhatsAppLink('Hi Mummy Food Hub! I have a question about your menu.');
    window.open(url, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/mummyfoodhub?igsh=N2oxNm5taGY5bHox', '_blank');
  };

  return (
    <div className={styles.container}>
      <button
        onClick={handleInstagram}
        className={`clay-card ${styles.socialBtn} ${styles.instagram}`}
      >
        <Instagram size={28} />
      </button>

      <button
        onClick={handleWhatsApp}
        className={`clay-card ${styles.socialBtn} ${styles.whatsapp}`}
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
}
