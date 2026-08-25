import { atom, computed } from 'nanostores';
import type { PackageOffer } from '../types/landing';
import { packageOffers as initialPackageOffers } from '../data/packages';

export const packageOffersStore = atom<PackageOffer[]>(initialPackageOffers);
export const selectedPackageId = atom<string>('pack-2'); // Default to 2 units (Más Popular)
export const exitIntentDiscount = atom<number>(0); // Extra percentage (e.g., 5 for 5% off)
export const isCheckoutModalOpen = atom<boolean>(false);
export const isExitModalOpen = atom<boolean>(false);
export const exitAttempted = atom<boolean>(false);
export const hasExitDiscountClaimed = atom<boolean>(false);

// Helper function to update package offers dynamically from backend API
export function setPackageOffers(offers: PackageOffer[]) {
  if (offers && offers.length > 0) {
    packageOffersStore.set(offers);
    // Automatically select popular or first package if current selection doesn't exist
    const popular = offers.find((p) => p.isPopular) || offers[0];
    if (popular) {
      selectedPackageId.set(popular.id);
    }
  }
}

export const selectedPackage = computed([packageOffersStore, selectedPackageId], (offers, id) => {
  return offers.find((p) => p.id === id) || offers[0] || initialPackageOffers[1];
});

export const checkoutPricing = computed([selectedPackage, exitIntentDiscount], (pkg, extraDiscount) => {
  if (!pkg) {
    return {
      quantity: 1,
      totalBasePrice: 0,
      packageDiscountAmount: 0,
      extraDiscountPercentage: 0,
      extraDiscountAmount: 0,
      shippingCost: 0,
      totalSaved: 0,
      finalPriceTotal: 0,
    };
  }

  const basePricePerUnit = pkg.originalPricePerUnit;
  const totalBasePrice = basePricePerUnit * pkg.quantity;
  
  // Normal package discount
  const packageDiscountAmount = (totalBasePrice * pkg.discountPercentage) / 100;
  let priceAfterPackageDiscount = totalBasePrice - packageDiscountAmount;

  // Extra exit-intent discount if claimed
  const extraDiscountAmount = (priceAfterPackageDiscount * extraDiscount) / 100;
  const finalPrice = priceAfterPackageDiscount - extraDiscountAmount;

  const totalSaved = totalBasePrice - finalPrice;
  const shippingCost = pkg.freeShipping ? 0 : 15; // Base shipping fee if not free

  return {
    quantity: pkg.quantity,
    totalBasePrice,
    packageDiscountAmount,
    extraDiscountPercentage: extraDiscount,
    extraDiscountAmount,
    shippingCost,
    totalSaved,
    finalPriceTotal: finalPrice + shippingCost,
  };
});
