import { getSupabaseClient } from '../supabase/client';
import type { Database } from '../supabase/database.types';

type LandingBlockRow = Database['medic']['Tables']['landing_blocks']['Row'];

export interface GlobalLandingConfig {
  whatsappNumber: string;
  shippingCost: number;
  currency: string;
}

export interface HeaderConfig {
  text: string;
}

export const landingService = {
  async getBlocks(onlyActive = true): Promise<LandingBlockRow[]> {
    const supabase = getSupabaseClient();
    let query = supabase
      .from('landing_blocks')
      .select('*')
      .order('sort_order', { ascending: true });

    if (onlyActive) {
      query = query.eq('is_active', true);
    }

    const { data, error } = await query;
    if (error) {
      console.error('[landingService] Error fetching blocks:', error.message, error.code);
      return [];
    }

    console.log('[landingService] Blocks fetched:', data?.length ?? 0);
    return data ?? [];
  },

  async getGlobalConfig(): Promise<GlobalLandingConfig | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await (supabase as any)
      .from('system_settings')
      .select('value')
      .eq('key', 'landing_global_config')
      .maybeSingle();

    if (error) {
      console.error('Error fetching global config:', error.message);
      return null;
    }

    return (data?.value as GlobalLandingConfig) ?? null;
  },

  async getHeaderConfig(): Promise<HeaderConfig | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await (supabase as any)
      .from('system_settings')
      .select('value')
      .eq('key', 'landing_header_config')
      .maybeSingle();

    if (error) {
      console.error('Error fetching header config:', error.message);
      return null;
    }

    return (data?.value as HeaderConfig) ?? null;
  },
};
