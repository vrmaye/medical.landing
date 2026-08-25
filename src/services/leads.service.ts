import { getSupabaseClient } from '../supabase/client';

export interface LeadInsert {
  id?: string;
  full_name: string;
  phone: string;
  department: string;
  district: string;
  address: string;
  reference?: string | null;
  package_title: string;
  quantity: number;
  unit_price: number;
  total_base_price: number;
  discount_amount: number;
  extra_exit_discount_amount?: number;
  final_price_total: number;
  shipping_cost?: number;
  status?: string;
  assigned_seller_id?: string | null;
}

export const leadsService = {
  async createLead(lead: LeadInsert) {
    const supabase = getSupabaseClient();
    const { data, error } = await (supabase as any)
      .from('leads')
      .insert(lead)
      .select()
      .single();

    if (error) {
      console.error('[leadsService] Error creating lead:', error.message, error.code);
      return null;
    }

    console.log('[leadsService] Lead created:', data?.id);
    return data;
  },
};
