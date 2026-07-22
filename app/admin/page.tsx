'use client';
import { useState, useEffect } from 'react';
import { MenuItem } from '@/app/generated/prisma/client';

export default function AdminPage() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/menu')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2>Menu Items</h2>
        <button className="neu-button" style={{ padding: '8px 16px', fontSize: '1rem' }}>+ Add Item</button>
      </div>

      <div className="clay-card" style={{ padding: '24px', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.1)' }}>
              <th style={{ padding: '12px' }}>Name</th>
              <th style={{ padding: '12px' }}>Category</th>
              <th style={{ padding: '12px' }}>Price</th>
              <th style={{ padding: '12px' }}>Today&apos;s Spec</th>
              <th style={{ padding: '12px' }}>Sold Out</th>
              <th style={{ padding: '12px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <td style={{ padding: '12px', fontWeight: 600 }}>{item.name}</td>
                <td style={{ padding: '12px' }}>{item.category}</td>
                <td style={{ padding: '12px' }}>₹{item.price}</td>
                <td style={{ padding: '12px' }}>{item.isTodaySpec ? 'Yes' : 'No'}</td>
                <td style={{ padding: '12px' }}>{item.isSoldOut ? 'Yes' : 'No'}</td>
                <td style={{ padding: '12px' }}>
                  <button style={{ color: 'var(--color-tomato)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
