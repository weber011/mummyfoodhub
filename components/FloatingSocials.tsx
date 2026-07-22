'use client';
import { MessageCircle, Instagram } from 'lucide-react';
import { generateWhatsAppLink } from '@/utils/whatsapp';

export default function FloatingSocials() {
  const handleWhatsApp = () => {
    const url = generateWhatsAppLink('Hi Mummy Food Hub! I have a question about your menu.');
    window.open(url, '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/mummyfoodhub?igsh=N2oxNm5taGY5bHox', '_blank');
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      zIndex: 9999
    }}>
      <button
        onClick={handleInstagram}
        className="clay-card"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          border: 'none',
          boxShadow: '0 10px 20px rgba(220, 39, 67, 0.4)',
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
      >
        <Instagram size={32} />
      </button>

      <button
        onClick={handleWhatsApp}
        className="whatsapp-btn clay-card"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          border: 'none',
          boxShadow: '0 10px 20px rgba(37, 211, 102, 0.4)',
          transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
      >
        <MessageCircle size={32} />
      </button>
    </div>
  );
}
