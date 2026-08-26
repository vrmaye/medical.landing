import { atom, computed } from 'nanostores';
import type { PackageOffer } from '../types/landing';

export const packageOffersStore = atom<PackageOffer[]>([]);
export const packagesLoading = atom<boolean>(false);
export const selectedPackageId = atom<string>('');
export const exitIntentDiscount = atom<number>(0);
export const isCheckoutModalOpen = atom<boolean>(false);
export const isExitModalOpen = atom<boolean>(false);
export const exitAttempted = atom<boolean>(false);
export const hasExitDiscountClaimed = atom<boolean>(false);

export function setPackageOffers(offers: PackageOffer[]) {
  packagesLoading.set(false);
  if (offers && offers.length > 0) {
    packageOffersStore.set(offers);
    const popular = offers.find((p) => p.isPopular) || offers[0];
    if (popular) {
      selectedPackageId.set(popular.id);
    }
  }
}

export function setPackagesLoading(loading: boolean) {
  packagesLoading.set(loading);
}

export const selectedPackage = computed([packageOffersStore, selectedPackageId], (offers, id) => {
  return offers.find((p) => p.id === id) || offers[0] || null;
});

export const checkoutPricing = computed([selectedPackage, exitIntentDiscount], (pkg, extraDiscount) => {
  if (!pkg) {
    return {
      quantity: 0,
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
  
  const packageDiscountAmount = (totalBasePrice * pkg.discountPercentage) / 100;
  let priceAfterPackageDiscount = totalBasePrice - packageDiscountAmount;

  const extraDiscountAmount = (priceAfterPackageDiscount * extraDiscount) / 100;
  const finalPrice = priceAfterPackageDiscount - extraDiscountAmount;

  const totalSaved = totalBasePrice - finalPrice;
  const shippingCost = pkg.freeShipping ? 0 : 15;

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
