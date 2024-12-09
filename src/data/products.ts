import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Velvet Blackout Curtains',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    category: 'curtains',
    description: 'Luxurious velvet curtains with complete blackout functionality',
    features: ['100% Blackout', 'Thermal Insulation', 'Sound Reduction', 'Easy Care'],
    material: 'Premium Velvet',
    dimensions: { width: 140, height: 240, unit: 'cm' },
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Navy Blue', 'Charcoal Gray', 'Wine Red', 'Emerald Green'],
    reviews: [
      {
        id: '1',
        userName: 'Sarah M.',
        rating: 5,
        comment: 'Perfect blackout curtains! They keep the room completely dark.',
        date: '2024-02-15'
      },
      {
        id: '2',
        userName: 'Michael R.',
        rating: 4,
        comment: 'Great quality, but slightly longer than expected.',
        date: '2024-02-10'
      }
    ],
    relatedProducts: ['2', '3']
  },
  {
    id: '2',
    name: 'Sheer Linen Panels',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    category: 'curtains',
    description: 'Light and airy linen panels for a natural look',
    features: ['Light Filtering', 'UV Protection', 'Natural Material'],
    material: 'Pure Linen',
    dimensions: { width: 130, height: 220, unit: 'cm' },
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564540583246-934409427776?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['White', 'Natural', 'Light Gray', 'Beige'],
    reviews: [
      {
        id: '3',
        userName: 'Emma L.',
        rating: 5,
        comment: 'Beautiful, natural light filtering. Perfect for my living room!',
        date: '2024-02-12'
      }
    ],
    relatedProducts: ['1', '3']
  },
  {
    id: '3',
    name: 'Decorative Curtain Rod',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1618220924273-338d82d6b886?auto=format&fit=crop&w=800&q=80',
    category: 'accessories',
    description: 'Elegant metal curtain rod with decorative finials',
    features: ['Adjustable Length', 'Easy Installation', 'Durable Metal'],
    dimensions: { width: 160, height: 3, unit: 'cm' },
    images: [
      'https://images.unsplash.com/photo-1618220924273-338d82d6b886?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Brushed Nickel', 'Matte Black', 'Antique Brass'],
    reviews: [
      {
        id: '4',
        userName: 'David K.',
        rating: 4,
        comment: 'Solid construction and beautiful finials.',
        date: '2024-02-08'
      }
    ],
    relatedProducts: ['1', '2']
  }
];