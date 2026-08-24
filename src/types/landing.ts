export type BlockType = 'image' | 'banner' | 'button';

export interface BaseBlock {
  id: string;
  type: BlockType;
}

export interface ImageBlockData extends BaseBlock {
  type: 'image';
  src: string;
  alt?: string;
}

export interface BannerBlockData extends BaseBlock {
  type: 'banner';
  src: string;
  alt?: string;
  badgeText?: string;
}

export interface ButtonBlockData extends BaseBlock {
  type: 'button';
  text: string;
  subtext?: string;
  variant?: 'primary' | 'secondary' | 'pulse';
  action?: 'scrollToCheckout';
}

export type LandingBlock = ImageBlockData | BannerBlockData | ButtonBlockData;

export interface PackageOffer {
  id: string;
  quantity: number;
  title: string;
  badge?: string;
  isPopular?: boolean;
  isBestPrice?: boolean;
  originalPricePerUnit: number;
  discountPercentage: number;
  freeShipping: boolean;
}

export interface CustomerFormData {
  fullName: string;
  phone: string;
  address: string;
  reference: string;
  department: string;
  district: string;
}
