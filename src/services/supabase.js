import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://kevdnmyhnniffgqszisg.supabase.co', import.meta.env.VITE_SUPABASE_KEY)
