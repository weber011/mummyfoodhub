import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/store/CartContext';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import AnnouncementBar from '@/components/AnnouncementBar';
import FloatingSocials from '@/components/FloatingSocials';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mummy Food Hub | Home Food Delivery',
  description: 'Premium Ghar Ka Khana Delivered to Your Doorstep',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          {children}
          <CartDrawer />
          <FloatingSocials />
        </CartProvider>
      </body>
    </html>
  );
}
