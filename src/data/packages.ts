import type { PackageOffer } from '../types/landing';

export const packageOffers: PackageOffer[] = [
  {
    id: 'pack-1',
    quantity: 1,
    title: '1 Spray de Propóleo',
    originalPricePerUnit: 89,
    discountPercentage: 0,
    freeShipping: false,
  },
  {
    id: 'pack-2',
    quantity: 2,
    title: '2 Sprays de Propóleo',
    badge: 'MÁS POPULAR',
    isPopular: true,
    originalPricePerUnit: 89,
    discountPercentage: 30, // 30% OFF
    freeShipping: true,
  },
  {
    id: 'pack-3',
    quantity: 3,
    title: '3 Sprays de Propóleo',
    badge: 'MEJOR PRECIO',
    isBestPrice: true,
    originalPricePerUnit: 89,
    discountPercentage: 40, // 40% OFF
    freeShipping: true,
  },
];
