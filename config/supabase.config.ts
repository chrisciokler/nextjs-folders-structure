import { createClient } from '@supabase/supabase-js';

// const options = {
//   schema: 'public',
//   headers: { 'x-my-custom-header': 'my-app-name' },
//   autoRefreshToken: true,
//   persistSession: true,
//   detectSessionInUrl: true
// };

const SUPABASE_URL: any = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY: any = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
