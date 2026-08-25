import { getSupabaseClient } from '../supabase/client';
import type { Database } from '../supabase/database.types';

type PackageRow = Database['medic']['Tables']['packages']['Row'];

export interface PackageOffer {
  id: string;
  quantity: number;
  title: string;
  originalPricePerUnit: number;
  discountPercentage: number;
  badge?: string;
  isPopular?: boolean;
  isBestPrice?: boolean;
  freeShipping: boolean;
}

export const packagesService = {
  async getPackages(onlyActive = true): Promise<PackageOffer[]> {
    const supabase = getSupabaseClient();
    let query = supabase
      .from('packages')
      .select('*')
      .order('sort_order', { ascending: true });

    if (onlyActive) {
      query = query.eq('is_active', true);
    }

    const { data, error } = await query;
    if (error) {
      console.error('[packagesService] Error fetching packages:', error.message);
      return [];
    }

    return (data ?? []).map((row: PackageRow) => ({
      id: row.id,
      quantity: row.quantity,
      title: row.title,
      originalPricePerUnit: row.original_price_per_unit,
      discountPercentage: row.discount_percentage,
      badge: row.badge ?? undefined,
      isPopular: row.is_popular,
      isBestPrice: row.is_best_price,
      freeShipping: row.free_shipping,
      imageUrl: row.image_url ?? undefined,
    }));
  },
};
