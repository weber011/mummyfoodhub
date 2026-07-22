import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import WeeklyMenuSection from '@/components/WeeklyMenuSection';
import WhatsAppChannelBanner from '@/components/WhatsAppChannelBanner';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import LocationSection from '@/components/LocationSection';

export default function Home() {
  return (
    <main>
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      
      <Hero />
      <MenuSection />
      <WeeklyMenuSection />
      <WhatsAppChannelBanner />
      <SubscriptionPlans />
      <LocationSection />
    </main>
  );
}
