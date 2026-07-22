'use client';
import { MenuItem } from '@/app/generated/prisma/client';
import { useCart } from '@/store/CartContext';
import styles from './FoodCard.module.css';

export default function FoodCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl || undefined
    });
  };

  return (
    <div className={`${styles.card} clay-card`}>
      <div className={styles.imageWrapper}>
        <div className={styles.badges}>
          {item.isTodaySpec && <span className={styles.badgeSpecial}>Today's Special</span>}
          {item.isBestSeller && <span className={styles.badgeBest}>Best Seller</span>}
        </div>
        
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.name} className={styles.foodImg} />
        ) : (
          <div className={styles.placeholderImg}>
            {item.isVeg ? '🥗' : '🍗'}
          </div>
        )}
        
        <div className={styles.vegIcon}>
          <div className={`${styles.vegDot} ${item.isVeg ? styles.veg : styles.nonVeg}`} />
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.desc}>{item.description}</p>
        
        <div className={styles.footer}>
          <div className={styles.price}>₹{item.price}</div>
          
          {item.isSoldOut ? (
            <button className={`${styles.btnSoldOut}`} disabled>
              Sold Out
            </button>
          ) : (
            <button className={`${styles.addBtn} neu-button`} onClick={handleAdd}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
