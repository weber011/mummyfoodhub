import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const count = await prisma.menuItem.count();
    
    if (count === 0) {
      await prisma.menuItem.createMany({
        data: [
          {
            name: 'Dal Tadka',
            description: 'Homestyle yellow dal cooked with Indian spices and tempered with ghee.',
            price: 120,
            isVeg: true,
            category: 'Curries',
            isTodaySpec: false,
            isBestSeller: true
          },
          {
            name: 'Steamed Rice',
            description: 'Fluffy, perfectly cooked basmati rice.',
            price: 60,
            isVeg: true,
            category: 'Rice'
          },
          {
            name: 'Butter Roti (4 Pcs)',
            description: 'Soft whole wheat flatbreads brushed with fresh butter.',
            price: 40,
            isVeg: true,
            category: 'Roti'
          },
          {
            name: 'Special Combo',
            description: 'Rice + 4 Butter Roti + Choose Any 2 Sabji + Raita + Rasgulla',
            price: 99,
            isVeg: true,
            category: 'Lunch',
            isTodaySpec: true
          },
          {
            name: 'Boondi Raita',
            description: 'Cool yogurt with crispy besan pearls and roasted cumin.',
            price: 10,
            isVeg: true,
            category: 'Add-ons'
          },
          {
            name: 'Rasgulla (2 Pcs)',
            description: 'Soft and spongy milk solids soaked in sugar syrup.',
            price: 20,
            isVeg: true,
            category: 'Desserts'
          }
        ]
      });
      return NextResponse.json({ message: 'Database seeded successfully' });
    }
    
    return NextResponse.json({ message: 'Database already seeded' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 });
  }
}
