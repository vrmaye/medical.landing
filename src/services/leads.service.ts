import { getSupabaseClient } from '../supabase/client';

export interface LeadInsert {
  id?: string;
  full_name: string;
  phone: string;
  dni?: string | null;
  department: string;
  district: string;
  address: string;
  reference?: string | null;
  package_id?: string | null;
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

export interface LeadItemInsert {
  lead_id: string;
  package_id: string | null;
  product_title: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
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

    // Insert lead item
    if (data?.id) {
      const item: LeadItemInsert = {
        lead_id: data.id,
        package_id: lead.package_id || null,
        product_title: lead.package_title,
        quantity: lead.quantity,
        unit_price: lead.unit_price,
        subtotal: lead.unit_price,
      };

      const { error: itemError } = await (supabase as any)
        .from('lead_items')
        .insert(item);

      if (itemError) {
        console.warn('[leadsService] Error creating lead item:', itemError.message);
      }
    }

    return data;
  },
};
