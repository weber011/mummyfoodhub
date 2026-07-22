import prisma from '@/lib/prisma';
import MenuGrid from './MenuGrid';
import styles from './MenuSection.module.css';

export const revalidate = 0; // Dynamic for now

export default async function MenuSection() {
  // Fetch menu items from DB
  const items = await prisma.menuItem.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <section id="today-menu" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>All Day Menu</h2>
          <p>Order a single meal or combo. Delivered hot and fresh.</p>
        </div>
        
        <MenuGrid items={items} />
      </div>
    </section>
  );
}
