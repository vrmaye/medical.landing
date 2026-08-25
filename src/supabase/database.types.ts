export type BlockTypeEnum = 'image' | 'banner' | 'button';
export type LeadStatus = 'NUEVO' | 'EN_PROCESO' | 'COMPLETADO' | 'CANCELADO';

export interface Database {
  medic: {
    Tables: {
      leads: {
        Row: {
          id: string;
          full_name: string;
          phone: string;
          department: string;
          district: string;
          address: string;
          reference: string | null;
          package_title: string;
          quantity: number;
          unit_price: number;
          total_base_price: number;
          discount_amount: number;
          extra_exit_discount_amount: number;
          final_price_total: number;
          shipping_cost: number;
          status: LeadStatus;
          assigned_seller_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
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
          status?: LeadStatus;
          assigned_seller_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          phone?: string;
          department?: string;
          district?: string;
          address?: string;
          reference?: string | null;
          package_title?: string;
          quantity?: number;
          unit_price?: number;
          total_base_price?: number;
          discount_amount?: number;
          extra_exit_discount_amount?: number;
          final_price_total?: number;
          shipping_cost?: number;
          status?: LeadStatus;
          assigned_seller_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      landing_blocks: {
        Row: {
          id: string;
          type: BlockTypeEnum;
          src: string | null;
          alt: string | null;
          badge_text: string | null;
          text: string | null;
          subtext: string | null;
          variant: string | null;
          sort_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          type: BlockTypeEnum;
          src?: string | null;
          alt?: string | null;
          badge_text?: string | null;
          text?: string | null;
          subtext?: string | null;
          variant?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          type?: BlockTypeEnum;
          src?: string | null;
          alt?: string | null;
          badge_text?: string | null;
          text?: string | null;
          subtext?: string | null;
          variant?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      packages: {
        Row: {
          id: string;
          quantity: number;
          title: string;
          original_price_per_unit: number;
          discount_percentage: number;
          badge: string | null;
          is_popular: boolean;
          is_best_price: boolean;
          free_shipping: boolean;
          is_active: boolean;
          sort_order: number;
          image_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          quantity: number;
          title: string;
          original_price_per_unit: number;
          discount_percentage?: number;
          badge?: string | null;
          is_popular?: boolean;
          is_best_price?: boolean;
          free_shipping?: boolean;
          is_active?: boolean;
          sort_order?: number;
          image_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          quantity?: number;
          title?: string;
          original_price_per_unit?: number;
          discount_percentage?: number;
          badge?: string | null;
          is_popular?: boolean;
          is_best_price?: boolean;
          free_shipping?: boolean;
          is_active?: boolean;
          sort_order?: number;
          image_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      system_settings: {
        Row: {
          key: string;
          value: Record<string, unknown>;
          updated_by_user_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          key: string;
          value: Record<string, unknown>;
          updated_by_user_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          key?: string;
          value?: Record<string, unknown>;
          updated_by_user_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
