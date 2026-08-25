import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

let _client: SupabaseClient<Database, 'medic', 'medic'> | null = null;

function getEnv(key: string): string {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    return import.meta.env[key] || '';
  }
  return '';
}

export function getSupabaseClient(): SupabaseClient<Database, 'medic', 'medic'> {
  if (_client) return _client;

  const url = getEnv('VITE_SUPABASE_URL');
  const key = getEnv('VITE_SUPABASE_ANON_KEY');

  if (!url || !key) {
    throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY');
  }

  _client = createClient<Database, 'medic', 'medic'>(url, key, {
    db: { schema: 'medic' as const },
  });

  return _client;
}
