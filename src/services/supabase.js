import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://kevdnmyhnniffgqszisg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtldmRubXlobm5pZmZncXN6aXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5MjcxNDYsImV4cCI6MTk5MDUwMzE0Nn0.eJgW9CJCRYcYNoOplmlGZ5iwjV5z0HWdZ4ms2uslJZQ')
